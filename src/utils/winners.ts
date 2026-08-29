export type WinPeriodType = 'weekly' | 'monthly' | 'yearly';

export interface WinEntry {
  type: WinPeriodType;
  periodLabel: string;
  rank: number; // 1-based, 1 = 1st place
}

const TYPE_PRIORITY: Record<WinPeriodType, number> = {
  yearly: 0,
  monthly: 1,
  weekly: 2,
};

/**
 * Flattens the three separate admin-announced winner maps into a single,
 * ranked list of everything a given student has actually won. A student
 * only ever appears here once an admin has explicitly announced them —
 * this never reflects live/still-moving leaderboard standings.
 *
 * Sorted so the most prestigious, most recent-feeling wins surface
 * first: yearly > monthly > weekly, then by rank within each type.
 */
export function getStudentWins(
  studentId: string,
  weeklyWinners: Record<number, string[]>,
  monthlyWinners: Record<string, string[]>,
  yearlyWinners: Record<string, string[]>
): WinEntry[] {
  const wins: WinEntry[] = [];

  Object.entries(weeklyWinners).forEach(([week, ids]) => {
    const idx = ids.indexOf(studentId);
    if (idx >= 0) wins.push({ type: 'weekly', periodLabel: `Week ${week}`, rank: idx + 1 });
  });

  Object.entries(monthlyWinners).forEach(([label, ids]) => {
    const idx = ids.indexOf(studentId);
    if (idx >= 0) wins.push({ type: 'monthly', periodLabel: label, rank: idx + 1 });
  });

  Object.entries(yearlyWinners).forEach(([label, ids]) => {
    const idx = ids.indexOf(studentId);
    if (idx >= 0) wins.push({ type: 'yearly', periodLabel: label, rank: idx + 1 });
  });

  return wins.sort((a, b) => TYPE_PRIORITY[a.type] - TYPE_PRIORITY[b.type] || a.rank - b.rank);
}

/** The single most prestigious win, used to pick a sensible default when
 * generating a certificate without the person choosing a specific win. */
export function getBestWin(wins: WinEntry[]): WinEntry | undefined {
  return wins[0];
}

export function rankLabel(rank: number): string {
  if (rank === 1) return '1st';
  if (rank === 2) return '2nd';
  if (rank === 3) return '3rd';
  return `${rank}th`;
}

export function typeLabel(type: WinPeriodType): string {
  if (type === 'weekly') return 'Weekly';
  if (type === 'monthly') return 'Monthly';
  return 'Yearly';
}
