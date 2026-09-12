interface CountdownCardProps {
  eyebrow: string;
  title: string;
  days: number;
}

/** Compte à rebours en jours — la seule unité demandée par le cahier des charges. */
export function CountdownCard({ eyebrow, title, days }: CountdownCardProps) {
  return (
    <div className="card relative overflow-hidden border-none bg-gradient-to-b from-ink to-ink-soft text-center text-paper">
      <div
        aria-hidden="true"
        className="absolute -right-[30px] -top-[30px] h-[120px] w-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, #FFCE00 0%, transparent 70%)" }}
      />
      <p className="eyebrow relative text-gold">{eyebrow}</p>
      <p className="relative mb-3.5 mt-0.5 font-display text-[1.15rem] font-bold">{title}</p>
      <div className="relative flex justify-center">
        <div className="min-w-[150px] rounded-xl bg-white/10 px-2.5 py-4">
          <p className="m-0 font-display text-[2.6rem] font-extrabold leading-none">{days}</p>
          <p className="m-0 mt-1.5 text-[0.82rem] opacity-75">{days > 1 ? "jours restants" : "jour restant"}</p>
        </div>
      </div>
    </div>
  );
}
