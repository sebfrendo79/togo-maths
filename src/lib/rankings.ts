import { CURRENT_STUDENT_ID, SCHOOLS, STUDENTS, TEACHERS } from "../data/demo";
import type { School, Student, Teacher } from "../types";

/**
 * Classement des enseignants : 2/3 la performance de leur classe aux exercices
 * quotidiens, 1/3 leurs propres défis. La règle est affichée telle quelle dans
 * l'écran Concours, et calculée ici — pas écrite en dur dans la maquette.
 */
export const TEACHER_CLASS_WEIGHT = 2 / 3;
export const TEACHER_QUIZ_WEIGHT = 1 / 3;

export const teacherScore = (teacher: Teacher) =>
  Math.round(teacher.classScore * TEACHER_CLASS_WEIGHT + teacher.quizScore * TEACHER_QUIZ_WEIGHT);

export interface Ranked<T> {
  rank: number;
  item: T;
  points: number;
  isMe: boolean;
}

/**
 * Classement des élèves. Les points gagnés sur cet appareil s'ajoutent à ceux
 * de l'élève connecté, pour que jouer fasse réellement bouger le classement.
 */
export function studentRanking(bonusForCurrent = 0): Ranked<Student>[] {
  return STUDENTS.map((student) => ({
    student,
    points: student.points + (student.id === CURRENT_STUDENT_ID ? bonusForCurrent : 0),
  }))
    .sort((a, b) => b.points - a.points)
    .map(({ student, points }, index) => ({
      rank: index + 1,
      item: student,
      points,
      isMe: student.id === CURRENT_STUDENT_ID,
    }));
}

export interface RankedSchool extends Ranked<School> {
  /** Part des points de la meilleure école, pour la longueur de la barre. */
  share: number;
}

/** Classement des écoles : somme des points de tous leurs élèves. */
export function schoolRanking(bonusForCurrent = 0): RankedSchool[] {
  const ranked = studentRanking(bonusForCurrent);
  const totals = new Map<string, number>();
  for (const { item, points } of ranked) {
    totals.set(item.schoolId, (totals.get(item.schoolId) ?? 0) + points);
  }

  const mySchoolId = ranked.find((entry) => entry.isMe)?.item.schoolId;
  const rows = SCHOOLS.map((school) => ({ school, points: totals.get(school.id) ?? 0 })).sort(
    (a, b) => b.points - a.points
  );
  const best = rows[0]?.points || 1;

  return rows.map(({ school, points }, index) => ({
    rank: index + 1,
    item: school,
    points,
    share: points / best,
    isMe: school.id === mySchoolId,
  }));
}

/** Classement national des enseignants, par score pondéré. */
export function teacherRanking(currentTeacherId: string): Ranked<Teacher>[] {
  return TEACHERS.map((teacher) => ({ teacher, points: teacherScore(teacher) }))
    .sort((a, b) => b.points - a.points)
    .map(({ teacher, points }, index) => ({
      rank: index + 1,
      item: teacher,
      points,
      isMe: teacher.id === currentTeacherId,
    }));
}
