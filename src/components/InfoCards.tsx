import type { Lesson, MathFact } from "../types";

/** Leçon du jour, en fin de parcours élève. */
export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <section className="card border-2 border-gold bg-gradient-to-b from-paper to-[#FDF3E0]">
      <div className="mb-3.5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-green text-[1.7rem] text-paper"
        >
          📘
        </span>
        <div>
          <h2 className="card-title mb-0 text-[1.15rem]">Leçon du jour</h2>
          <p className="m-0 text-[0.78rem] font-bold text-clay-dark">{lesson.theme}</p>
        </div>
      </div>
      <p className="m-0 text-[1.05rem] leading-[1.75]">{lesson.text}</p>
    </section>
  );
}

/** Info du jour de l'enseignant : l'histoire des mathématiques en Afrique. */
export function FactCard({ fact }: { fact: MathFact }) {
  return (
    <section className="card border-none bg-gradient-to-b from-ink to-ink-soft text-paper">
      <div className="mb-3.5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-gold text-[1.35rem] text-ink"
        >
          🌍
        </span>
        <div>
          <p className="m-0 font-display text-base font-extrabold">{fact.name}</p>
          <p className="m-0 text-[0.72rem] font-bold text-gold">{fact.era}</p>
        </div>
      </div>
      <p className="m-0 text-[0.86rem] leading-[1.6] opacity-95">{fact.text}</p>
    </section>
  );
}
