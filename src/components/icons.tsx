/** Icônes de navigation, tracées au trait pour rester lisibles en petit. */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type IconProps = { className?: string };

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
      <path d="M9.5 19.5v-6h5v6" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 4h10v4.5a5 5 0 0 1-10 0V4z" />
      <path d="M7 5H4.5A3.5 3.5 0 0 0 7 8" />
      <path d="M17 5h2.5A3.5 3.5 0 0 1 17 8" />
      <path d="M12 13.5v3" />
      <path d="M9 20.5h6" />
      <path d="M9.8 16.5h4.4v4H9.8z" />
    </svg>
  );
}

export function SchoolIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 20.5h18" />
      <path d="M5 20.5V9.5l7-4 7 4v11" />
      <path d="M9.5 20.5v-6h5v6" />
      <path d="M12 5.5v3.5" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4.5 20V11" />
      <path d="M11 20V4" />
      <path d="M17.5 20v-7.5" />
      <path d="M3.5 20h17" />
    </svg>
  );
}

export function GraduationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 4 21 8.5 12 13 3 8.5 12 4z" />
      <path d="M6.5 10.5v4c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4" />
      <path d="M21 8.5V15" />
    </svg>
  );
}

export function MedalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="15" r="5.2" />
      <path d="M9.2 10.7 7.3 3.5h3l1.8 5" />
      <path d="M14.8 10.7 16.7 3.5h-3l-1.8 5" />
    </svg>
  );
}
