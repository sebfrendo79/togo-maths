import { useEffect, useRef, useState } from "react";
import { POINTS_PER_CORRECT } from "../lib/season";
import { useApp } from "../store/useApp";

const PASTELS = ["bg-pastel-1 border-[#F0B889]", "bg-pastel-2 border-[#8FC79A]", "bg-pastel-3 border-[#F2CB6B]", "bg-pastel-4 border-[#B9C2D0]"];

const FEEDBACK_DELAY_MS = 1100;

/** Exercice du jour : 10 questions, réponse immédiate, points et série de jours. */
export function DailyExercise() {
  const { questions, progress, answerQuestion, interactive } = useApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => void (timerRef.current && window.clearTimeout(timerRef.current)), []);

  const index = progress.today.answered;
  const question = questions[index];
  const finished = index >= questions.length;

  const choose = (choice: string) => {
    if (!interactive || selected !== null || !question) return;
    setSelected(choice);
    setWasCorrect(question.answer === choice);
    timerRef.current = window.setTimeout(() => {
      answerQuestion(choice);
      setSelected(null);
      setWasCorrect(null);
    }, FEEDBACK_DELAY_MS);
  };

  return (
    <section className="card">
      <div className="flex items-center justify-between">
        <h2 className="card-title mb-0">🎯 Exercice du jour</h2>
        <span className="flex items-center gap-1.5 rounded-pill bg-[#FDEBD3] px-2.5 py-[5px] text-[0.82rem] font-extrabold text-gold-dark">
          🔥 {progress.streak} {progress.streak > 1 ? "jours" : "jour"}
        </span>
      </div>

      <div className="mt-3.5 flex justify-center gap-1.5" aria-hidden="true">
        {questions.map((_, position) => (
          <span
            key={position}
            className={`h-2 w-2 rounded-pill ${
              position < index ? "bg-green" : position === index ? "bg-gold" : "bg-sand-deep"
            }`}
          />
        ))}
      </div>

      {finished ? (
        <div className="mt-4 text-center">
          <p className="m-0 font-display text-[1.35rem] font-extrabold">Terminé pour aujourd'hui !</p>
          <p className="mt-2 text-[0.95rem] font-bold text-green-dark">
            {progress.today.correct}/{questions.length} bonnes réponses · +{progress.today.points} points
          </p>
          <p className="mt-2 text-[0.88rem] font-bold text-gold-dark">
            Reviens demain pour un nouvel exercice et continuer ta série 🔥
          </p>
        </div>
      ) : (
        <>
          <p className="my-4 text-center font-display text-[1.6rem] font-extrabold" aria-live="polite">
            {question.prompt}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {question.choices.map((choice, position) => {
              const revealing = selected !== null;
              const isAnswer = choice === question.answer;
              const isPicked = choice === selected;

              const state = !revealing
                ? PASTELS[position % PASTELS.length]
                : isAnswer
                  ? "bg-[#E4F3E6] border-green text-green-dark"
                  : isPicked
                    ? "bg-[#FBE7E9] border-wrong text-wrong"
                    : "bg-paper border-sand-deep opacity-60";

              return (
                <button
                  key={choice}
                  onClick={() => choose(choice)}
                  disabled={!interactive || revealing}
                  className={`rounded-2xl border-2 px-2 py-4 font-display text-[1.25rem] font-bold transition-transform active:scale-95 disabled:cursor-default ${state}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          <p
            className="mt-3 min-h-[20px] text-center text-[0.9rem] font-bold"
            role="status"
            style={{ color: wasCorrect === null ? undefined : wasCorrect ? "#054F2C" : "#7A1F2B" }}
          >
            {wasCorrect === null
              ? interactive
                ? ""
                : "Vue parent : le parcours est consultable, les réponses restent à l'élève."
              : wasCorrect
                ? `Bravo, bonne réponse ! +${POINTS_PER_CORRECT} points`
                : "Pas tout à fait, la bonne réponse est en vert."}
          </p>
        </>
      )}
    </section>
  );
}
