import {Reducer, useReducer, useRef} from 'react';
import {loadState, saveState} from './localStorage';
import {State, Action} from './types';

export const useLocalStorageState = (reducer: Reducer<State, Action>, initialState: State, storageKey: string): [State, Function] => {
  const isLoading = useRef(true);
  if (isLoading.current) {
    const load = loadState<State>(storageKey);
    if (load) {
      initialState = {
        ...load, comments: load.comments
      };
    }
    isLoading.current = false;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  saveState(storageKey, state);
  return [state, dispatch];
};
