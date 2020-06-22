export const loadState = (key) => {
  try {
    const serialized = localStorage.getItem(key);
    const state = JSON.parse(serialized);
    return state;
  } catch (e) {
    return null;
  }
};

export const saveState = (key, state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.log(e);
  }
};
