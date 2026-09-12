import { LeaderboardRow } from "../components/LeaderboardRow";
import { schoolLabel } from "../data/demo";
import { studentRanking } from "../lib/rankings";
import { useApp } from "../store/useApp";

export function StudentRanking() {
  const { progress, seasonDay, seasonLength } = useApp();
  const ranking = studentRanking(progress.seasonPoints);

  return (
    <>
      <h2 className="m-0 font-display text-[1.3rem] font-extrabold">Classement élèves</h2>
      <p className="mb-3.5 mt-1 text-[0.85rem] text-warm">
        Depuis le début de la saison — jour {seasonDay}/{seasonLength}
      </p>
      <div className="card">
        {ranking.map((entry) => (
          <LeaderboardRow
            key={entry.item.id}
            rank={entry.rank}
            avatar={entry.item.avatar}
            name={entry.isMe ? `${entry.item.name} (toi)` : entry.item.name}
            subtitle={schoolLabel(entry.item.schoolId)}
            points={entry.points}
            highlight={entry.isMe}
          />
        ))}
      </div>
    </>
  );
}
