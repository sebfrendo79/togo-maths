import { useApp } from "../store/useApp";
import type { View } from "../types";
import { ChartIcon, GraduationIcon, HomeIcon, MedalIcon, SchoolIcon, TrophyIcon } from "./icons";

type NavItem = { view: View; label: string; Icon: typeof HomeIcon };

const STUDENT_NAV: NavItem[] = [
  { view: "accueil", label: "Accueil", Icon: HomeIcon },
  { view: "classement", label: "Élèves", Icon: TrophyIcon },
  { view: "ecoles", label: "Écoles", Icon: SchoolIcon },
];

const TEACHER_NAV: NavItem[] = [
  { view: "dashboard", label: "Dashboard", Icon: ChartIcon },
  { view: "defis", label: "Défis pro", Icon: GraduationIcon },
  { view: "concours", label: "Concours", Icon: MedalIcon },
];

export function BottomNav() {
  const { role, view, setView } = useApp();
  const items = role === "prof" ? TEACHER_NAV : STUDENT_NAV;

  return (
    <nav
      className="flex border-t-2 border-sand-deep bg-paper px-1.5 pb-3 pt-2"
      aria-label="Navigation principale"
    >
      {items.map(({ view: target, label, Icon }) => {
        const active = view === target;
        return (
          <button
            key={target}
            onClick={() => setView(target)}
            aria-current={active ? "page" : undefined}
            className={`flex flex-1 flex-col items-center gap-[3px] py-1.5 text-[0.68rem] font-bold ${
              active ? "text-clay-dark" : "text-[#A08B6F]"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center">
              <Icon className={`h-[23px] w-[23px] ${active ? "[stroke-width:2.4]" : ""}`} />
            </span>
            {label}
          </button>
        );
      })}
    </nav>
  );
}
