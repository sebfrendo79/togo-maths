/** Types partagés de Togo Maths. */

/** Trois publics : l'élève joue, le parent regarde, l'enseignant pilote sa classe. */
export type Role = "eleve" | "parent" | "prof";

export type StudentView = "accueil" | "classement" | "ecoles";

export type TeacherView = "dashboard" | "defis" | "concours";

export type View = StudentView | TeacherView;

export interface School {
  id: string;
  name: string;
  city: string;
}

export interface Student {
  id: string;
  name: string;
  schoolId: string;
  avatar: string;
  /** Points cumulés depuis le début de la saison. */
  points: number;
}

/** Un élève vu depuis le dashboard de son enseignant. */
export interface ClassStudent {
  id: string;
  name: string;
  /** Progression sur le programme de la saison, en pourcentage. */
  progress: number;
  /** Jours consécutifs avec un exercice terminé. */
  streak: number;
  /** Jours écoulés depuis le dernier exercice. */
  daysSinceActive: number;
}

export interface Teacher {
  id: string;
  name: string;
  schoolId: string;
  avatar: string;
  /** Performance de sa classe aux exercices quotidiens — compte pour 2/3. */
  classScore: number;
  /** Ses propres résultats aux défis quotidiens — comptent pour 1/3. */
  quizScore: number;
}

export interface Question {
  prompt: string;
  choices: string[];
  /** La bonne réponse, écrite telle qu'elle apparaît dans `choices`. */
  answer: string;
  /** Affichée après la réponse, pour les défis enseignants. */
  explanation?: string;
}

export interface Lesson {
  theme: string;
  text: string;
}

export interface MathFact {
  name: string;
  era: string;
  text: string;
}

/** Progression du jour, conservée sur l'appareil de l'élève. */
export interface DailyProgress {
  /** Index du jour (jours écoulés depuis epoch) auquel cette progression se rapporte. */
  day: number;
  /** Nombre de questions déjà répondues aujourd'hui. */
  answered: number;
  /** Bonnes réponses du jour. */
  correct: number;
  /** Points gagnés aujourd'hui. */
  points: number;
}

export interface StudentProgress {
  today: DailyProgress;
  /** Jours consécutifs terminés, dernier jour terminé compris. */
  streak: number;
  /** Index du dernier jour où l'exercice a été terminé en entier. */
  lastCompletedDay: number | null;
  /** Points cumulés sur la saison par cet appareil. */
  seasonPoints: number;
}
