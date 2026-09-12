interface MascotBannerProps {
  title: string;
  subtitle: string;
}

/** Bandeau d'accueil de l'élève : la mascotte donne le ton. */
export function MascotBanner({ title, subtitle }: MascotBannerProps) {
  return (
    <div className="relative mb-4 flex items-center gap-3.5 overflow-hidden rounded-[22px] border-[3px] border-dashed border-gold-dark bg-gradient-to-br from-[#FFF6DE] to-[#FDEBD3] p-[18px]">
      <span aria-hidden="true" className="absolute right-3.5 top-2.5 text-[1.3rem] opacity-70">
        ✨
      </span>
      <span aria-hidden="true" className="shrink-0 animate-bounce-soft text-[3.4rem]">
        🐘
      </span>
      <span>
        <span className="block font-display text-[1.15rem] font-extrabold text-clay-dark">{title}</span>
        <span className="mt-[3px] block text-[0.86rem] font-bold text-warm">{subtitle}</span>
      </span>
    </div>
  );
}
