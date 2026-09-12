interface LeaderboardRowProps {
  rank: number;
  avatar: string;
  name: string;
  subtitle?: string;
  points: number;
  highlight?: boolean;
}

const RANK_COLOR = ["text-gold-dark text-[1.2rem]", "text-[#8A8A8A]", "text-[#A5672C]"];

/** Une ligne de classement, utilisée pour les élèves comme pour les enseignants. */
export function LeaderboardRow({ rank, avatar, name, subtitle, points, highlight }: LeaderboardRowProps) {
  return (
    <div
      className={`flex items-center gap-3 px-1.5 py-2.5 ${
        highlight ? "rounded-xl bg-[#FDF6E9]" : "border-b border-sand-deep last:border-b-0"
      }`}
    >
      <span className={`w-[26px] text-center font-display text-[0.95rem] font-extrabold ${RANK_COLOR[rank - 1] ?? "text-clay-dark"}`}>
        {rank}
      </span>
      <span
        aria-hidden="true"
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-pill bg-sand-deep text-[1.4rem]"
      >
        {avatar}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[0.92rem] font-bold">{name}</span>
        {subtitle && <span className="block truncate text-[0.72rem] font-semibold text-muted">{subtitle}</span>}
      </span>
      <span className="whitespace-nowrap text-[0.9rem] font-extrabold text-green-dark">
        {points.toLocaleString("fr-FR")} pts
      </span>
    </div>
  );
}
