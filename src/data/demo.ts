import type { ClassStudent, School, Student, Teacher } from "../types";

/**
 * Données de démonstration.
 *
 * Elles tiennent lieu de base de données tant que l'API n'existe pas : ce sont
 * exactement les tables décrites au § 6 du cahier des charges (École,
 * Utilisateur, Classe, résultats), en mémoire.
 */

export const SCHOOLS: School[] = [
  { id: "be-kpota", name: "EPP Bè-Kpota", city: "Lomé" },
  { id: "tokoin", name: "EPP Tokoin", city: "Lomé" },
  { id: "kara", name: "École de Kara", city: "Kara" },
  { id: "sokode", name: "École de Sokodé", city: "Sokodé" },
  { id: "kpalime", name: "École de Kpalimé", city: "Kpalimé" },
];

export const schoolById = (id: string) => SCHOOLS.find((school) => school.id === id);

/** « EPP Tokoin, Lomé », mais « École de Kara » sans répéter la ville. */
export const schoolLabel = (id: string) => {
  const school = schoolById(id);
  if (!school) return "École inconnue";
  return school.name.includes(school.city) ? school.name : `${school.name}, ${school.city}`;
};

/** L'élève connecté dans cette démonstration. */
export const CURRENT_STUDENT_ID = "edem";

export const STUDENTS: Student[] = [
  { id: "ayele", name: "Ayélé K.", schoolId: "be-kpota", avatar: "🧒", points: 2840 },
  { id: "komi", name: "Komi A.", schoolId: "tokoin", avatar: "👦", points: 2715 },
  { id: "afi", name: "Afi M.", schoolId: "be-kpota", avatar: "👧", points: 2690 },
  { id: "yawo", name: "Yawo N.", schoolId: "kara", avatar: "🧒", points: 2510 },
  { id: "akouvi", name: "Akouvi T.", schoolId: "tokoin", avatar: "👧", points: 2470 },
  { id: CURRENT_STUDENT_ID, name: "Edem", schoolId: "be-kpota", avatar: "⭐", points: 2390 },
  { id: "abra", name: "Abra S.", schoolId: "sokode", avatar: "🧒", points: 2350 },
  { id: "mawuli", name: "Mawuli D.", schoolId: "kara", avatar: "👦", points: 2210 },
  { id: "kokou", name: "Kokou B.", schoolId: "kpalime", avatar: "👦", points: 2080 },
  { id: "sena", name: "Séna A.", schoolId: "kpalime", avatar: "👧", points: 1960 },
];

/** Classe suivie par l'enseignant connecté. */
export const TEACHER_CLASS = { label: "CE2 B", schoolId: "be-kpota" };

/**
 * Les statistiques du dashboard sont calculées à partir de cette liste : le
 * nombre d'élèves, le taux d'activité et les relances viennent des données,
 * jamais d'un chiffre écrit en dur dans l'écran.
 */
export const CLASS_STUDENTS: ClassStudent[] = [
  { id: "afi", name: "Afi M.", progress: 92, streak: 14, daysSinceActive: 0 },
  { id: "abra", name: "Abra S.", progress: 88, streak: 9, daysSinceActive: 0 },
  { id: "komla", name: "Komla E.", progress: 83, streak: 11, daysSinceActive: 0 },
  { id: "yawo", name: "Yawo N.", progress: 78, streak: 6, daysSinceActive: 1 },
  { id: "yao", name: "Yao K.", progress: 71, streak: 4, daysSinceActive: 1 },
  { id: "akouvi", name: "Akouvi T.", progress: 65, streak: 2, daysSinceActive: 2 },
  { id: "delali", name: "Délali A.", progress: 55, streak: 1, daysSinceActive: 2 },
  { id: "essi", name: "Essi P.", progress: 40, streak: 0, daysSinceActive: 5 },
  { id: "mawuli", name: "Mawuli D.", progress: 20, streak: 0, daysSinceActive: 4 },
  { id: "kokou", name: "Kokou B.", progress: 15, streak: 0, daysSinceActive: 9 },
];

/** Fenêtre servant au taux « actifs » du dashboard. */
export const ACTIVITY_WINDOW_DAYS = 7;

/** Au-delà de ce nombre de jours sans exercice, l'élève est signalé à relancer. */
export const INACTIVITY_ALERT_DAYS = 3;

/** L'enseignant connecté dans cette démonstration. */
export const CURRENT_TEACHER_ID = "dogbe";

export const TEACHERS: Teacher[] = [
  { id: "amouzou", name: "M. Amouzou", schoolId: "tokoin", avatar: "🧑‍🏫", classScore: 1980, quizScore: 1800 },
  { id: CURRENT_TEACHER_ID, name: "Mme Dogbé", schoolId: "be-kpota", avatar: "👩‍🏫", classScore: 1890, quizScore: 1740 },
  { id: "kossi", name: "M. Kossi", schoolId: "kara", avatar: "🧑‍🏫", classScore: 1755, quizScore: 1860 },
  { id: "lawson", name: "M. Lawson", schoolId: "sokode", avatar: "🧑‍🏫", classScore: 1700, quizScore: 1550 },
  { id: "akakpo", name: "Mme Akakpo", schoolId: "kpalime", avatar: "👩‍🏫", classScore: 1610, quizScore: 1490 },
];
