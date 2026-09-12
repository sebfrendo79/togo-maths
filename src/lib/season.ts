/**
 * Saison de classement et compte à rebours.
 *
 * Un seul endroit à changer d'une année sur l'autre : `CONTEST_DATE`. Tout le
 * reste (jours restants, jour courant de la saison, avancement) en découle.
 */

/** Date de la finale nationale, à Lomé. Format ISO, minuit heure locale. */
export const CONTEST_DATE = new Date("2027-06-19T00:00:00");

/** La période de classement couvre les 300 jours qui précèdent le concours. */
export const SEASON_LENGTH_DAYS = 300;

const MS_PER_DAY = 86_400_000;

/** Points gagnés par bonne réponse à l'exercice du jour. */
export const POINTS_PER_CORRECT = 10;

/** Index de jour stable : deux appels le même jour renvoient la même valeur. */
export function dayIndex(now: Date = new Date()): number {
  const local = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor(local.getTime() / MS_PER_DAY);
}

/** Jours restants avant le concours, jamais négatif. */
export function daysUntilContest(now: Date = new Date()): number {
  const diff = CONTEST_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / MS_PER_DAY));
}

/** Premier jour de la saison de classement (J-300). */
export function seasonStart(): Date {
  return new Date(CONTEST_DATE.getTime() - SEASON_LENGTH_DAYS * MS_PER_DAY);
}

/**
 * Jour courant de la saison, borné à [0, 300] : 0 avant l'ouverture de la
 * saison, 300 le jour du concours.
 */
export function seasonDay(now: Date = new Date()): number {
  const elapsed = Math.floor((now.getTime() - seasonStart().getTime()) / MS_PER_DAY);
  return Math.min(SEASON_LENGTH_DAYS, Math.max(0, elapsed));
}

/** Avancement de la saison, entre 0 et 1. */
export function seasonProgress(now: Date = new Date()): number {
  return seasonDay(now) / SEASON_LENGTH_DAYS;
}

/** Choisit l'élément du jour dans une liste qui tourne en boucle. */
export function pickForDay<T>(items: readonly T[], day: number = dayIndex()): T {
  return items[((day % items.length) + items.length) % items.length];
}
