import type { Lesson } from "../types";

/** Leçon du jour : un rappel court, avec un exemple concret, aligné sur le programme CE2. */
export const LESSONS: Lesson[] = [
  {
    theme: "Numération",
    text: "Les nombres jusqu'à 1000 : on compte par centaines (100, 200, 300…), puis par dizaines, puis par unités. Exemple : 347 = 3 centaines + 4 dizaines + 7 unités. Astuce : pour comparer deux nombres, regarde toujours d'abord le chiffre des centaines.",
  },
  {
    theme: "Addition",
    text: "La retenue en addition : quand la somme d'une colonne dépasse 9, on écrit l'unité et on reporte 1 dizaine sur la colonne suivante. Exemple : 27 + 15, unités 7+5=12, on pose 2 et on retient 1, ce qui donne 42 au total.",
  },
  {
    theme: "Multiplication",
    text: "La table de multiplication de 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54, 60. Astuce : chaque résultat augmente de 6. Tu peux aussi retrouver 6×7 en calculant 6×6=36 puis en ajoutant 6, soit 42.",
  },
  {
    theme: "Heure",
    text: "Lire l'heure : la petite aiguille indique les heures, la grande indique les minutes. Quand la grande aiguille est sur le 6, il est « et demie ». Quand elle est sur le 3, il est « et quart ».",
  },
  {
    theme: "Fractions",
    text: "Les fractions simples : une pizza coupée en 4 parts égales, chaque part vaut un quart, noté 1/4. Deux parts font 2/4, soit la moitié. Si tu manges 3 parts sur 4, il en reste une seule.",
  },
  {
    theme: "Monnaie",
    text: "La monnaie en FCFA : pour payer 350 F, on peut utiliser une pièce de 200 F, une de 100 F et une de 50 F. On additionne toujours les pièces choisies, et on vérifie qu'on obtient bien le bon total.",
  },
  {
    theme: "Géométrie",
    text: "Les formes géométriques : un carré a 4 côtés égaux et 4 angles droits ; un rectangle a 4 angles droits mais des côtés opposés égaux deux à deux. Un triangle, lui, n'a que 3 côtés.",
  },
];
