import type { StudentProgress } from "../types";
import { dayIndex } from "./season";

/**
 * Progression de l'élève, conservée sur son appareil.
 *
 * C'est le point que remplacera l'API : tant qu'il n'y a pas de comptes, la
 * série de jours et les points de l'exercice quotidien ne suivent pas l'élève
 * d'un appareil à l'autre (voir docs/cahier-des-charges.md, § 7).
 */
const KEY = "togo-maths-progress-v1";

export const emptyProgress = (day: number = dayIndex()): StudentProgress => ({
  today: { day, answered: 0, correct: 0, points: 0 },
  streak: 0,
  lastCompletedDay: null,
  seasonPoints: 0,
});

export function loadProgress(day: number = dayIndex()): StudentProgress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyProgress(day);
    const stored = JSON.parse(raw) as StudentProgress;

    // Un nouveau jour remet le quiz à zéro ; la série ne survit qu'à un seul
    // jour d'écart, sinon elle repart de zéro.
    if (stored.today?.day !== day) {
      const missedDays = stored.lastCompletedDay === null ? Infinity : day - stored.lastCompletedDay;
      return {
        ...stored,
        today: { day, answered: 0, correct: 0, points: 0 },
        streak: missedDays <= 1 ? stored.streak : 0,
      };
    }
    return stored;
  } catch {
    return emptyProgress(day);
  }
}

export function saveProgress(progress: StudentProgress): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Stockage indisponible (navigation privée, quota) : la session reste
    // jouable, elle ne sera simplement pas retrouvée demain.
  }
}
