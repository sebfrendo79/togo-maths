import { useApp } from "../store/useApp";

/** Avancement de la saison de classement (300 jours avant le concours). */
export function SeasonBar() {
  const { seasonDay, seasonLength, seasonProgress } = useApp();

  return (
    <div className="card">
      <p className="eyebrow">Saison de classement</p>
      <div className="flex items-center gap-3">
        <div
          className="track h-2.5 flex-1"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={seasonLength}
          aria-valuenow={seasonDay}
          aria-label="Avancement de la saison"
        >
          <div
            className="h-full rounded-pill bg-gradient-to-r from-green to-gold"
            style={{ width: `${Math.round(seasonProgress * 100)}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-[0.85rem] font-extrabold text-green-dark">
          Jour {seasonDay}/{seasonLength}
        </span>
      </div>
    </div>
  );
}
