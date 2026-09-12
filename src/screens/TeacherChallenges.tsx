import { useState } from "react";
import { useApp } from "../store/useApp";
import type { Question } from "../types";

interface ChallengeCardProps {
  title: string;
  badge?: string;
  question: Question;
  /** Une colonne pour les longs énoncés de pédagogie, deux pour les nombres. */
  singleColumn?: boolean;
}

function ChallengeCard({ title, badge, question, singleColumn }: ChallengeCardProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const answered = picked !== null;

  return (
    <section className="card">
      {badge && (
        <span className="mb-2.5 inline-block rounded-pill bg-ink px-2.5 py-1 text-[0.7rem] font-extrabold text-gold">
          {badge}
        </span>
      )}
      <h2 className="card-title">{title}</h2>
      <p className={`mb-4 font-display font-extrabold ${singleColumn ? "text-[1.05rem]" : "text-center text-[1.2rem]"}`}>
        {question.prompt}
      </p>

      <div className={`grid gap-3 ${singleColumn ? "grid-cols-1" : "grid-cols-2"}`}>
        {question.choices.map((choice) => {
          const isAnswer = choice === question.answer;
          const state = !answered
            ? "bg-paper border-sand-deep"
            : isAnswer
              ? "bg-[#E4F3E6] border-green text-green-dark"
              : choice === picked
                ? "bg-[#FBE7E9] border-wrong text-wrong"
                : "bg-paper border-sand-deep opacity-60";

          return (
            <button
              key={choice}
              onClick={() => !answered && setPicked(choice)}
              disabled={answered}
              className={`rounded-2xl border-2 px-3 py-4 font-display font-bold transition-transform active:scale-95 disabled:cursor-default ${
                singleColumn ? "text-left text-[1rem]" : "text-[1.25rem]"
              } ${state}`}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {answered && question.explanation && (
        <p className="mt-3 rounded-xl bg-sand-deep p-3 text-[0.85rem] leading-[1.5]" role="status">
          {picked === question.answer ? "Exact. " : "La bonne réponse est en vert. "}
          {question.explanation}
        </p>
      )}
    </section>
  );
}

export function TeacherChallenges() {
  const { pedagogyChallenge, expertChallenge } = useApp();

  return (
    <>
      <h2 className="m-0 mb-3 font-display text-[1.3rem] font-extrabold">Défi enseignant du jour</h2>
      <ChallengeCard
        title="Diagnostiquer une erreur d'élève"
        badge="Niveau supérieur · pédagogie"
        question={pedagogyChallenge}
        singleColumn
      />
      <ChallengeCard title="Défi mathématique — niveau expert" question={expertChallenge} />
      <p className="mb-4 px-1 text-[0.85rem] leading-[1.5] text-warm">
        Ces deux défis alimentent le tiers « quiz personnel » de votre classement national.
      </p>
    </>
  );
}
