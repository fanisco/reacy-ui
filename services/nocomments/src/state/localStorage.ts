export const loadState = <T>(key: string): T | null => {
  try {
    const serialized = localStorage.getItem(key);
    if (serialized) {
      return JSON.parse(serialized);
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const saveState = <T>(key: string, state: T) => {
  try {
    const serialized = typeof state === 'string' ? state : JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.log(e);
  }
};
