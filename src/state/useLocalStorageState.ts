import {Reducer, useReducer, useRef} from 'react';
import {loadState, saveState} from './localStorage';
import {State, RawStateData, Action} from './types';
import {loadDataSet, unloadDataSet} from '../core/source/loadDataSet';

export const useLocalStorageState = (reducer: Reducer<State, Action>, initialState: State, storageKey: string): [State, Function] => {
  const isLoading = useRef(true);
  if (isLoading.current) {
    const load = loadState<RawStateData>(storageKey);
    if (load) {
      initialState = {
        ...load, comments: loadDataSet(load.comments, 'comments')
      };
    }
    isLoading.current = false;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // saveState(storageKey, {...state, comments: unloadDataSet(state.comments)});
  return [state, dispatch];
};
