import {useReducer, useRef} from 'react';
import {loadState, saveState} from './localStorage';

export default function useLocalStorageState(reducer, initialState, storageKey) {
  const isLoading = useRef(true);
  let loadedState;
  if (isLoading.current) {
    loadedState = loadState(storageKey) || initialState;
    loadedState = {products: initialState.products, cart: Array.isArray(loadedState.cart) ? loadedState.cart : initialState.cart};
    isLoading.current = false;
  }
  const [state, dispatch] = useReducer(reducer, loadedState);
  saveState(storageKey, state);
  return [state, dispatch];
}