import { CountdownCard } from "../components/CountdownCard";
import { LeaderboardRow } from "../components/LeaderboardRow";
import { CURRENT_TEACHER_ID, schoolLabel, TEACHERS } from "../data/demo";
import { teacherRanking, TEACHER_CLASS_WEIGHT, TEACHER_QUIZ_WEIGHT } from "../lib/rankings";
import { useApp } from "../store/useApp";

const percent = (weight: number) => Math.round(weight * 100);

export function TeacherContest() {
  const { daysLeft } = useApp();

  const ranking = teacherRanking(CURRENT_TEACHER_ID);
  const me = TEACHERS.find((teacher) => teacher.id === CURRENT_TEACHER_ID);
  const myRank = ranking.find((entry) => entry.isMe);

  return (
    <>
      <h2 className="m-0 mb-3 font-display text-[1.3rem] font-extrabold">Concours des enseignants</h2>

      <CountdownCard eyebrow="En parallèle du concours élèves" title="Finale enseignants à Lomé" days={daysLeft} />

      <section className="card">
        <h2 className="card-title">Comment est calculé ce classement ?</h2>
        <div className="flex h-4 overflow-hidden rounded-pill bg-sand-deep" aria-hidden="true">
          <div className="bg-green" style={{ width: `${percent(TEACHER_CLASS_WEIGHT)}%` }} />
          <div className="bg-gold" style={{ width: `${percent(TEACHER_QUIZ_WEIGHT)}%` }} />
        </div>
        <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0 text-[0.88rem] font-bold">
          <li>
            <span className="mr-[7px] inline-block h-[11px] w-[11px] rounded-pill bg-green" aria-hidden="true" />
            2/3 — Performance de vos élèves aux exercices
          </li>
          <li>
            <span className="mr-[7px] inline-block h-[11px] w-[11px] rounded-pill bg-gold" aria-hidden="true" />
            1/3 — Votre quiz quotidien (maths &amp; pédagogie)
          </li>
        </ul>
        <p className="mt-3 text-[0.85rem] leading-[1.5] text-warm">
          Faire progresser sa classe compte pour l'essentiel du score, et votre propre défi quotidien vient compléter
          votre place au classement national.
        </p>

        {me && myRank && (
          <div className="mt-3 rounded-xl bg-sand-deep p-3 text-[0.85rem] font-bold">
            <p className="m-0">Votre score : {myRank.points.toLocaleString("fr-FR")} pts</p>
            <p className="m-0 mt-1 font-semibold text-warm">
              {me.classScore.toLocaleString("fr-FR")} × 2/3 (votre classe) +{" "}
              {me.quizScore.toLocaleString("fr-FR")} × 1/3 (vos défis)
            </p>
          </div>
        )}
      </section>

      <section className="card">
        <h2 className="card-title">Classement national des enseignants</h2>
        {ranking.map((entry) => (
          <LeaderboardRow
            key={entry.item.id}
            rank={entry.rank}
            avatar={entry.item.avatar}
            name={entry.isMe ? `${entry.item.name} (vous)` : entry.item.name}
            subtitle={schoolLabel(entry.item.schoolId)}
            points={entry.points}
            highlight={entry.isMe}
          />
        ))}
      </section>
    </>
  );
}
