import { Student } from '../types';

/**
 * Computes a student's 1-based rank within a list, for a given leaderboard
 * timeframe. Used to gate certificate generation to Top-5 students only.
 *
 * 'weekly'  -> sorted by weeklyPoints (falls back to points if unset)
 * 'monthly' -> sorted by all-time points
 */
export function getRank(
  students: Student[],
  studentId: string,
  metric: 'weekly' | 'monthly'
): number {
  const sorted = [...students].sort((a, b) => {
    if (metric === 'weekly') {
      return (b.weeklyPoints || b.points) - (a.weeklyPoints || a.points);
    }
    return b.points - a.points;
  });
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