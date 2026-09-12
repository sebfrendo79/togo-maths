import type { Question } from "../types";

/**
 * Exercices du jour — niveau CE2.
 *
 * Une série de 10 questions par jour, tirée à tour de rôle dans cette liste.
 * Sept séries couvrent une semaine sans répétition ; c'est ce contenu que le
 * back-office de l'équipe pédagogique remplacera (voir le cahier des charges,
 * § 7) pour alimenter l'année entière.
 *
 * La bonne réponse est écrite en toutes lettres (`answer`) et non par son rang :
 * un numéro de rang se décale silencieusement dès qu'on réordonne les choix.
 */
export const EXERCISE_SETS: Question[][] = [
  // Jour A — addition à retenue, numération, tables
  [
    { prompt: "37 + 26 = ?", choices: ["53", "61", "63", "73"], answer: "63" },
    { prompt: "Combien de dizaines dans 84 ?", choices: ["4", "8", "14", "84"], answer: "8" },
    { prompt: "7 × 6 = ?", choices: ["36", "41", "42", "48"], answer: "42" },
    { prompt: "92 − 45 = ?", choices: ["37", "47", "53", "57"], answer: "47" },
    { prompt: "Quelle est la moitié de 18 ?", choices: ["6", "8", "9", "12"], answer: "9" },
    { prompt: "3 × 8 = ?", choices: ["18", "21", "24", "28"], answer: "24" },
    { prompt: "Combien de centaines dans 456 ?", choices: ["4", "5", "6", "45"], answer: "4" },
    { prompt: "Il est 14h30. Combien de temps avant 15h ?", choices: ["10 min", "20 min", "30 min", "40 min"], answer: "30 min" },
    { prompt: "Un carré a combien de côtés égaux ?", choices: ["2", "3", "4", "5"], answer: "4" },
    { prompt: "48 + 27 = ?", choices: ["65", "71", "75", "85"], answer: "75" },
  ],
  // Jour B — soustraction, fractions simples, monnaie
  [
    { prompt: "45 + 38 = ?", choices: ["73", "83", "84", "93"], answer: "83" },
    { prompt: "Combien d'unités dans 507 ?", choices: ["0", "5", "7", "57"], answer: "7" },
    { prompt: "8 × 4 = ?", choices: ["24", "28", "32", "36"], answer: "32" },
    { prompt: "61 − 24 = ?", choices: ["37", "43", "47", "27"], answer: "37" },
    { prompt: "Quel est le double de 35 ?", choices: ["60", "65", "70", "75"], answer: "70" },
    { prompt: "Combien font un quart de 20 ?", choices: ["4", "5", "10", "16"], answer: "5" },
    { prompt: "Quel nombre est le plus grand ?", choices: ["398", "401", "389", "399"], answer: "401" },
    { prompt: "Il est 9h15. Où est la grande aiguille ?", choices: ["sur le 1", "sur le 3", "sur le 9", "sur le 12"], answer: "sur le 3" },
    { prompt: "Combien de côtés a un triangle ?", choices: ["2", "3", "4", "6"], answer: "3" },
    { prompt: "250 F + 150 F = ?", choices: ["300 F", "350 F", "400 F", "450 F"], answer: "400 F" },
  ],
  // Jour C — tables, comparaison, lecture de l'heure
  [
    { prompt: "56 + 29 = ?", choices: ["75", "84", "85", "95"], answer: "85" },
    { prompt: "9 × 7 = ?", choices: ["56", "63", "72", "67"], answer: "63" },
    { prompt: "100 − 37 = ?", choices: ["53", "63", "67", "73"], answer: "63" },
    { prompt: "Combien de dizaines dans 260 ?", choices: ["2", "6", "26", "60"], answer: "26" },
    { prompt: "Quelle est la moitié de 50 ?", choices: ["20", "25", "30", "45"], answer: "25" },
    { prompt: "6 × 6 = ?", choices: ["30", "36", "42", "12"], answer: "36" },
    { prompt: "Quelle fraction représente la moitié ?", choices: ["1/2", "1/3", "1/4", "2/3"], answer: "1/2" },
    { prompt: "17 h, c'est quelle heure de l'après-midi ?", choices: ["3 heures", "4 heures", "5 heures", "7 heures"], answer: "5 heures" },
    { prompt: "Combien d'angles droits a un rectangle ?", choices: ["1", "2", "3", "4"], answer: "4" },
    { prompt: "500 F − 275 F = ?", choices: ["125 F", "225 F", "235 F", "325 F"], answer: "225 F" },
  ],
  // Jour D — numération, triple, durées
  [
    { prompt: "74 + 18 = ?", choices: ["82", "88", "92", "94"], answer: "92" },
    { prompt: "83 − 46 = ?", choices: ["37", "43", "47", "27"], answer: "37" },
    { prompt: "5 × 9 = ?", choices: ["35", "40", "45", "54"], answer: "45" },
    { prompt: "Combien de centaines dans 803 ?", choices: ["3", "8", "80", "83"], answer: "8" },
    { prompt: "Quel est le triple de 7 ?", choices: ["14", "17", "21", "28"], answer: "21" },
    { prompt: "Combien font trois quarts de 12 ?", choices: ["3", "6", "9", "12"], answer: "9" },
    { prompt: "Quel est le plus petit nombre ?", choices: ["129", "192", "219", "291"], answer: "129" },
    { prompt: "De 8h00 à 8h45, combien de temps ?", choices: ["15 min", "30 min", "45 min", "1 heure"], answer: "45 min" },
    { prompt: "Combien de sommets a un carré ?", choices: ["2", "3", "4", "8"], answer: "4" },
    { prompt: "3 pièces de 100 F et 1 pièce de 50 F, cela fait ?", choices: ["250 F", "300 F", "350 F", "400 F"], answer: "350 F" },
  ],
  // Jour E — doubles, chiffres des rangs, solides
  [
    { prompt: "29 + 29 = ?", choices: ["48", "58", "59", "68"], answer: "58" },
    { prompt: "120 − 45 = ?", choices: ["65", "75", "85", "95"], answer: "75" },
    { prompt: "4 × 7 = ?", choices: ["21", "24", "28", "32"], answer: "28" },
    { prompt: "Dans 365, quel est le chiffre des dizaines ?", choices: ["3", "5", "6", "65"], answer: "6" },
    { prompt: "Quelle est la moitié de 24 ?", choices: ["8", "12", "14", "16"], answer: "12" },
    { prompt: "8 × 8 = ?", choices: ["16", "56", "64", "72"], answer: "64" },
    { prompt: "Combien font un tiers de 9 ?", choices: ["2", "3", "4", "6"], answer: "3" },
    { prompt: "Il est 11h50. Quelle heure sera-t-il dans 10 minutes ?", choices: ["11h60", "12h00", "12h10", "11h55"], answer: "12h00" },
    { prompt: "Combien de faces a un cube ?", choices: ["4", "6", "8", "12"], answer: "6" },
    { prompt: "1000 F − 650 F = ?", choices: ["250 F", "350 F", "450 F", "550 F"], answer: "350 F" },
  ],
  // Jour F — décomposition, fractions équivalentes, durées
  [
    { prompt: "67 + 25 = ?", choices: ["82", "89", "92", "93"], answer: "92" },
    { prompt: "90 − 58 = ?", choices: ["32", "38", "42", "48"], answer: "32" },
    { prompt: "6 × 9 = ?", choices: ["45", "54", "56", "63"], answer: "54" },
    { prompt: "Combien vaut 4 centaines + 2 dizaines + 9 unités ?", choices: ["249", "409", "429", "492"], answer: "429" },
    { prompt: "Quel est le double de 45 ?", choices: ["80", "85", "90", "95"], answer: "90" },
    { prompt: "7 × 7 = ?", choices: ["42", "47", "49", "56"], answer: "49" },
    { prompt: "Deux quarts, cela fait combien ?", choices: ["un demi", "un tiers", "un quart", "trois quarts"], answer: "un demi" },
    { prompt: "Un cours va de 10h00 à 11h30. Combien de temps dure-t-il ?", choices: ["1 heure", "1 h 15", "1 h 30", "2 heures"], answer: "1 h 30" },
    { prompt: "Combien d'angles a un triangle ?", choices: ["2", "3", "4", "5"], answer: "3" },
    { prompt: "2 paquets à 175 F, cela fait ?", choices: ["275 F", "300 F", "350 F", "375 F"], answer: "350 F" },
  ],
  // Jour G — franchir la centaine, écarts de temps
  [
    { prompt: "88 + 34 = ?", choices: ["112", "118", "122", "132"], answer: "122" },
    { prompt: "75 − 39 = ?", choices: ["34", "36", "44", "46"], answer: "36" },
    { prompt: "9 × 9 = ?", choices: ["72", "79", "81", "89"], answer: "81" },
    { prompt: "Quel nombre vient juste après 599 ?", choices: ["598", "600", "690", "5910"], answer: "600" },
    { prompt: "Quelle est la moitié de 36 ?", choices: ["12", "16", "18", "24"], answer: "18" },
    { prompt: "5 × 6 = ?", choices: ["25", "30", "35", "36"], answer: "30" },
    { prompt: "Combien font la moitié de 14 ?", choices: ["4", "6", "7", "8"], answer: "7" },
    { prompt: "Il est 7h25. Combien de minutes jusqu'à 8h00 ?", choices: ["25 min", "35 min", "45 min", "75 min"], answer: "35 min" },
    { prompt: "Combien de côtés égaux a un carré ?", choices: ["0", "2", "4", "6"], answer: "4" },
    { prompt: "800 F + 450 F = ?", choices: ["1150 F", "1250 F", "1350 F", "1450 F"], answer: "1250 F" },
  ],
];

export const QUESTIONS_PER_DAY = 10;
