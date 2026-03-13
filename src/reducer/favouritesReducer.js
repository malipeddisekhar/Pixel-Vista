export const ACTION_TYPES = {
  ADD_FAVOURITE: "ADD_FAVOURITE",
  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
};

export function loadFavourites(storageKey) {
  try {
    const storedValue = localStorage.getItem(storageKey);

    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_FAVOURITE:
      if (state.some((photo) => photo.id === action.payload.id)) {
        return state;
      }

      return [...state, action.payload];

    case ACTION_TYPES.REMOVE_FAVOURITE:
      return state.filter((photo) => photo.id !== action.payload.id);

    default:
      return state;
  }
}