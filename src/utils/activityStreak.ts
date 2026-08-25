/**
 * Computes the "days active in a row" streak from a raw activity log of
 * timestamps (one entry per action, not deduplicated by day).
 *
 * This is deliberately independent of correct/wrong answers: showing up
 * and playing at all on a given calendar day counts as one active day.
 * The streak continues as long as there's no calendar day gap — it does
 * NOT reset just because today hasn't had activity logged yet (the day
 * isn't over), only when a full day was skipped entirely.
 */
export function calculateDayStreak(activityLog: number[] | undefined): number {
  if (!activityLog || activityLog.length === 0) return 0;

  const dayKey = (t: number) => {
    const d = new Date(t);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  };

  const uniqueDayTimestamps = Array.from(new Set(activityLog.map(dayKey)))
    .map((key) => {
      const [y, m, d] = key.split('-').map(Number);
      return new Date(y, m, d).getTime();
    })
    .sort((a, b) => b - a);

  if (uniqueDayTimestamps.length === 0) return 0;

  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const now = new Date();
  const todayTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const mostRecentActiveDay = uniqueDayTimestamps[0];

  if (todayTimestamp - mostRecentActiveDay > ONE_DAY_MS) return 0;

  let streak = 1;
  for (let i = 1; i < uniqueDayTimestamps.length; i++) {
    const gap = uniqueDayTimestamps[i - 1] - uniqueDayTimestamps[i];
    if (gap === ONE_DAY_MS) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
