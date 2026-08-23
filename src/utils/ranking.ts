import { Student } from '../types';

/**
 * Cascading leaderboard tie-breaker.
 *
 * With 25-30 MCQs posted every week, it's expected that multiple
 * students land on the exact same point total — and since only the
 * top 5 get a certificate, an arbitrary tie resolution isn't good
 * enough. This comparator breaks ties in order, stopping at the first
 * rule that actually differentiates the two students:
 *
 *   1. Points (weekly total, or all-time total for the monthly board)
 *   2. Whoever REACHED that point total first (earlier `lastPointsUpdateAt`
 *      wins) — rewards consistency/speed over "getting there eventually"
 *   3. More correct answers this week (fewer combo-bonus questions
 *      needed to hit the same score ranks higher)
 *   4. Fewer wrong attempts this week
 *
 * If all four are identical, the students are genuinely tied and keep
 * a stable relative order (by id) rather than jumping around on every
 * re-render.
 */
export function compareStudents(
  a: Student,
  b: Student,
  metric: 'weekly' | 'monthly'
): number {
  const aPoints = metric === 'weekly' ? (a.weeklyPoints ?? a.points) : a.points;
  const bPoints = metric === 'weekly' ? (b.weeklyPoints ?? b.points) : b.points;
  if (bPoints !== aPoints) return bPoints - aPoints;

  // Tie-break #2: earlier timestamp wins (reached this total first).
  // Students who haven't earned any points yet (undefined) are treated
  // as "reached last" so they never jump ahead of someone with a real
  // timestamp purely due to missing data.
  const aTime = a.lastPointsUpdateAt ?? Infinity;
  const bTime = b.lastPointsUpdateAt ?? Infinity;
  if (aTime !== bTime) return aTime - bTime;

  // Tie-break #3: more correct answers this week ranks higher.
  const aCorrect = a.weeklyCorrectCount ?? 0;
  const bCorrect = b.weeklyCorrectCount ?? 0;
  if (bCorrect !== aCorrect) return bCorrect - aCorrect;

  // Tie-break #4: fewer wrong attempts this week ranks higher.
  const aWrong = a.weeklyWrongCount ?? 0;
  const bWrong = b.weeklyWrongCount ?? 0;
  if (aWrong !== bWrong) return aWrong - bWrong;

  // Fully tied on every metric — keep a stable, deterministic order.
  return a.id.localeCompare(b.id);
}

/** Returns a NEW array of students sorted for the given leaderboard timeframe. */
export function sortStudents(students: Student[], metric: 'weekly' | 'monthly'): Student[] {
  return [...students].sort((a, b) => compareStudents(a, b, metric));
}

/**
 * Computes a student's 1-based rank within a list, for a given leaderboard
 * timeframe, using the full cascading tie-breaker above. Used to gate
 * certificate generation to Top-5 students only.
 */
export function getRank(
  students: Student[],
  studentId: string,
  metric: 'weekly' | 'monthly'
): number {
  const sorted = sortStudents(students, metric);
  const idx = sorted.findIndex((s) => s.id === studentId);
  return idx === -1 ? Infinity : idx + 1;
}

/** True if the student is Top-5 on either the weekly or monthly board. */
export function isTopFive(students: Student[], studentId: string): boolean {
  return getRank(students, studentId, 'weekly') <= 5 || getRank(students, studentId, 'monthly') <= 5;
}

/**
 * Certificate eligibility rule used across the app:
 * the viewer must own the profile AND that profile must be Top-5
 * (weekly or monthly) for the "Generate Official Certificate" action
 * to be visible/usable.
 */
export function canGenerateCertificate(
  students: Student[],
  viewerId: string,
  profileStudentId: string
): boolean {
  return viewerId === profileStudentId && isTopFive(students, profileStudentId);
}