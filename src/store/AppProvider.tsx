import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { MATH_FACTS } from "../data/africanMathFacts";
import { EXERCISE_SETS } from "../data/exercises";
import { LESSONS } from "../data/lessons";
import { EXPERT_CHALLENGES, PEDAGOGY_CHALLENGES } from "../data/teacherChallenges";
import {
  dayIndex,
  daysUntilContest,
  pickForDay,
  POINTS_PER_CORRECT,
  seasonDay,
  SEASON_LENGTH_DAYS,
  seasonProgress,
} from "../lib/season";
import { loadProgress, saveProgress } from "../lib/storage";
import type { Lesson, MathFact, Question, Role, StudentProgress, View } from "../types";

const FIRST_VIEW: Record<Role, View> = {
  eleve: "accueil",
  parent: "accueil",
  prof: "dashboard",
};

export interface AppContextValue {
  role: Role;
  setRole: (role: Role) => void;
  /** Le parent voit les écrans de l'élève, mais ne joue pas à sa place. */
  interactive: boolean;
  view: View;
  setView: (view: View) => void;

  /** Jours restants avant la finale à Lomé. */
  daysLeft: number;
  seasonDay: number;
  seasonLength: number;
  seasonProgress: number;

  questions: Question[];
  lesson: Lesson;
  fact: MathFact;
  pedagogyChallenge: Question;
  expertChallenge: Question;

  progress: StudentProgress;
  /** Enregistre une réponse à la question courante et renvoie si elle était juste. */
  answerQuestion: (choice: string) => boolean;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>("eleve");
  const [view, setView] = useState<View>("accueil");

  // L'index du jour est figé au montage : l'app ne doit pas changer de contenu
  // sous les doigts de l'élève si minuit passe pendant l'exercice.
  const day = useMemo(() => dayIndex(), []);
  const [progress, setProgress] = useState<StudentProgress>(() => loadProgress(day));

  useEffect(() => saveProgress(progress), [progress]);

  const questions = useMemo(() => pickForDay(EXERCISE_SETS, day), [day]);
  const lesson = useMemo(() => pickForDay(LESSONS, day), [day]);
  const fact = useMemo(() => pickForDay(MATH_FACTS, day), [day]);
  const pedagogyChallenge = useMemo(() => pickForDay(PEDAGOGY_CHALLENGES, day), [day]);
  const expertChallenge = useMemo(() => pickForDay(EXPERT_CHALLENGES, day), [day]);

  const setRole = useCallback((next: Role) => {
    setRoleState(next);
    setView(FIRST_VIEW[next]);
  }, []);

  const answerQuestion = useCallback(
    (choice: string) => {
      const question = questions[progress.today.answered];
      if (!question) return false;
      const correct = question.answer === choice;

      setProgress((previous) => {
        const answered = previous.today.answered + 1;
        const gained = correct ? POINTS_PER_CORRECT : 0;
        const finished = answered === questions.length;

        // La série augmente le jour où l'exercice est terminé, et seulement si
        // la veille l'a été aussi. Sinon elle repart à 1.
        const streak = finished
          ? previous.lastCompletedDay === day - 1
            ? previous.streak + 1
            : 1
          : previous.streak;

        return {
          today: {
            day,
            answered,
            correct: previous.today.correct + (correct ? 1 : 0),
            points: previous.today.points + gained,
          },
          streak,
          lastCompletedDay: finished ? day : previous.lastCompletedDay,
          seasonPoints: previous.seasonPoints + gained,
        };
      });

      return correct;
    },
    [questions, progress.today.answered, day]
  );

  const value: AppContextValue = {
    role,
    setRole,
    interactive: role === "eleve",
    view,
    setView,

    daysLeft: daysUntilContest(),
    seasonDay: seasonDay(),
    seasonLength: SEASON_LENGTH_DAYS,
    seasonProgress: seasonProgress(),

    questions,
    lesson,
    fact,
    pedagogyChallenge,
    expertChallenge,

    progress,
    answerQuestion,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
