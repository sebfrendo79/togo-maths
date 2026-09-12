import { useApp } from "../store/useApp";
import type { Role } from "../types";

const ROLES: { id: Role; label: string }[] = [
  { id: "eleve", label: "Élève" },
  { id: "parent", label: "Parent" },
  { id: "prof", label: "Enseignant" },
];

export function AppHeader() {
  const { role, setRole } = useApp();

  return (
    <header className="border-b-2 border-sand-deep bg-paper px-[18px] pb-3 pt-4">
      <div className="flex items-center justify-between">
        <p className="m-0 flex items-center gap-2 font-display text-[1.3rem] font-extrabold text-clay-dark">
          <span aria-hidden="true" className="text-[1.4rem]">
            ⭐
          </span>
          Togo Maths
        </p>
        <span className="pill bg-green text-paper">CE2</span>
      </div>

      <div className="mt-3.5 flex gap-1 rounded-pill bg-sand-deep p-1" role="tablist" aria-label="Choisir un rôle">
        {ROLES.map((entry) => {
          const active = role === entry.id;
          return (
            <button
              key={entry.id}
              role="tab"
              aria-selected={active}
              onClick={() => setRole(entry.id)}
              className={`flex-1 rounded-pill py-[9px] font-display text-[0.9rem] font-bold transition-colors ${
                active ? "bg-clay text-paper" : "bg-transparent text-ink"
              }`}
            >
              {entry.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
