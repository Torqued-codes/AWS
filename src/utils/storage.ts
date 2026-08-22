export const STORAGE_KEYS = {
  CURRENT_USER: 'aws_cloud_city_user',
  SUBMISSIONS: 'aws_cloud_city_submissions',
  CUSTOM_QUESTIONS: 'aws_cloud_city_custom_questions',
  MUTED: 'aws_cloud_city_muted',
  ACTIVE_WEEK: 'aws_cloud_city_active_week'
};

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch (e) {
    console.warn(`Error reading from localStorage key: ${key}`, e);
    return defaultValue;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Error writing to localStorage key: ${key}`, e);
  }
}
