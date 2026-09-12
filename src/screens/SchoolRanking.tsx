import { schoolRanking } from "../lib/rankings";
import { useApp } from "../store/useApp";

export function SchoolRanking() {
  const { progress } = useApp();
  const ranking = schoolRanking(progress.seasonPoints);

  return (
    <>
      <h2 className="m-0 font-display text-[1.3rem] font-extrabold">Classement des écoles</h2>
      <p className="mb-3.5 mt-1 text-[0.85rem] text-warm">Total des points cumulés par tous les élèves</p>
      <div className="card">
        {ranking.map((entry) => (
          <div key={entry.item.id} className="mb-3.5 last:mb-0">
            <div className="mb-1.5 flex justify-between gap-2 text-[0.88rem] font-bold">
              <span className={entry.isMe ? "text-clay-dark" : undefined}>
                {entry.rank}. {entry.item.name} ({entry.item.city})
              </span>
              <span className="whitespace-nowrap">{entry.points.toLocaleString("fr-FR")} pts</span>
            </div>
            <div className="track h-3.5">
              <div
                className="h-full rounded-pill bg-gradient-to-r from-clay to-gold"
                style={{ width: `${Math.round(entry.share * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
