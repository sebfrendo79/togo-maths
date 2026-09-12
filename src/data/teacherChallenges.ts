import type { Question } from "../types";

/**
 * Défis quotidiens de l'enseignant : un cas de pédagogie à diagnostiquer et un
 * problème de mathématiques au-delà du programme CE2. Les deux comptent pour le
 * tiers « quiz personnel » de son classement national.
 */

export const PEDAGOGY_CHALLENGES: Question[] = [
  {
    prompt:
      "Un élève pose systématiquement 47 − 19 en alignant les chiffres à droite, mais obtient 32. Quelle est la source d'erreur la plus probable ?",
    choices: [
      "Il ne connaît pas ses tables",
      "Il soustrait le petit chiffre du grand, sans gérer la retenue",
      "Il confond addition et soustraction",
    ],
    answer: "Il soustrait le petit chiffre du grand, sans gérer la retenue",
    explanation:
      "C'est l'erreur la plus fréquente en CE2 : l'élève calcule 9−7 au lieu de 7−9 sur la colonne des unités. Un rappel visuel de la retenue (une dizaine échangée contre dix unités) résout le problème dans la majorité des cas.",
  },
  {
    prompt: "On dicte « trois cent cinq » et l'élève écrit 30005. Que faut-il retravailler en priorité ?",
    choices: [
      "L'écriture en lettres des nombres",
      "La valeur positionnelle des chiffres",
      "La table d'addition",
    ],
    answer: "La valeur positionnelle des chiffres",
    explanation:
      "L'élève transcrit chaque mot entendu séparément (300, puis 5) au lieu de placer les chiffres selon leur rang. Le tableau de numération centaines/dizaines/unités, avec le zéro comme marqueur de rang vide, est l'outil de remédiation.",
  },
  {
    prompt: "Un élève affirme que 1/4 est plus grand que 1/2, « parce que 4 est plus grand que 2 ». Que fait-il ?",
    choices: [
      "Il compare les dénominateurs comme des nombres entiers",
      "Il confond numérateur et dénominateur",
      "Il ne sait pas lire une fraction",
    ],
    answer: "Il compare les dénominateurs comme des nombres entiers",
    explanation:
      "Plus on partage en parts nombreuses, plus chaque part est petite. Le passage par un objet partagé — une galette coupée en 2 puis en 4 — rend la comparaison évidente avant toute règle écrite.",
  },
  {
    prompt: "Un élève écrit 6 × 0 = 6. Quelle confusion explique le mieux cette réponse ?",
    choices: [
      "Il applique à la multiplication la règle du zéro en addition",
      "Il a oublié sa table de 6",
      "Il lit le signe × comme un +",
    ],
    answer: "Il applique à la multiplication la règle du zéro en addition",
    explanation:
      "En addition, ajouter 0 ne change rien : 6 + 0 = 6. L'élève transfère cette règle. Revenir au sens — « 6 fois rien du tout » — puis à une rangée vide d'objets rétablit le résultat 0.",
  },
  {
    prompt: "Pour 23 + 9 posé en colonnes, un élève écrit 212. Quelle est la cause ?",
    choices: [
      "Il pose la somme des unités en entier au lieu de retenir",
      "Il ne connaît pas le nombre 32",
      "Il inverse les deux nombres",
    ],
    answer: "Il pose la somme des unités en entier au lieu de retenir",
    explanation:
      "3 + 9 = 12 : l'élève écrit 12 sous la colonne des unités, puis recopie le 2 des dizaines. La retenue doit être posée comme un échange de dix unités contre une dizaine, pas comme un chiffre qu'on « ajoute à côté ».",
  },
  {
    prompt:
      "La petite aiguille est entre le 3 et le 4, la grande sur le 9. L'élève annonce « 4 heures 45 ». Que corriger ?",
    choices: [
      "Il lit l'heure sur l'aiguille la plus proche au lieu de celle déjà dépassée",
      "Il confond les deux aiguilles",
      "Il ne sait pas compter de 5 en 5",
    ],
    answer: "Il lit l'heure sur l'aiguille la plus proche au lieu de celle déjà dépassée",
    explanation:
      "L'heure est celle que la petite aiguille a dépassée, jamais celle vers laquelle elle se dirige : il est 3 h 45. Faire tourner les aiguilles d'une horloge à main sur une heure complète rend la règle visible.",
  },
  {
    prompt: "Un élève donne le périmètre d'un rectangle en cm². Quelle notion est à reprendre ?",
    choices: [
      "La distinction entre longueur et surface",
      "La multiplication des longueurs",
      "Le tracé à la règle",
    ],
    answer: "La distinction entre longueur et surface",
    explanation:
      "Le périmètre est une longueur : on fait le tour, on mesure en cm. L'aire couvre une surface, en cm². Faire parcourir le contour au doigt, puis recouvrir la figure de carreaux d'un centimètre, sépare durablement les deux idées.",
  },
];

export const EXPERT_CHALLENGES: Question[] = [
  {
    prompt: "Quel est le prochain nombre : 2, 6, 12, 20, 30, ?",
    choices: ["36", "40", "42", "44"],
    answer: "42",
    explanation: "Les écarts augmentent de 2 à chaque fois (+4, +6, +8, +10, +12). C'est la suite n(n+1) : 6×7 = 42.",
  },
  {
    prompt: "Quel est le prochain nombre : 1, 4, 9, 16, 25, ?",
    choices: ["30", "32", "36", "49"],
    answer: "36",
    explanation: "Ce sont les carrés parfaits : 1², 2², 3², 4², 5², donc 6² = 36.",
  },
  {
    prompt: "Combien vaut la somme des dix premiers nombres impairs (1 + 3 + 5 + … + 19) ?",
    choices: ["90", "100", "110", "121"],
    answer: "100",
    explanation: "La somme des n premiers impairs vaut toujours n². Ici 10² = 100 — un résultat qui se démontre joliment en empilant des carrés.",
  },
  {
    prompt: "Combien de diviseurs entiers positifs possède 36 ?",
    choices: ["6", "8", "9", "12"],
    answer: "9",
    explanation: "36 = 2² × 3², donc (2+1) × (2+1) = 9 diviseurs : 1, 2, 3, 4, 6, 9, 12, 18 et 36.",
  },
  {
    prompt: "Quel est le prochain nombre : 1, 1, 2, 3, 5, 8, ?",
    choices: ["11", "12", "13", "16"],
    answer: "13",
    explanation: "Suite de Fibonacci : chaque terme est la somme des deux précédents, donc 5 + 8 = 13.",
  },
  {
    prompt: "Quel est le PGCD de 84 et 126 ?",
    choices: ["14", "21", "42", "63"],
    answer: "42",
    explanation: "84 = 2² × 3 × 7 et 126 = 2 × 3² × 7. On garde les facteurs communs à la plus petite puissance : 2 × 3 × 7 = 42.",
  },
  {
    prompt: "Par combien de zéros se termine le produit 25 × 4 × 5 × 2 ?",
    choices: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "Le produit vaut 1000. Chaque zéro final vient d'une paire 2 × 5 : il y en a trois dans ce produit.",
  },
];
