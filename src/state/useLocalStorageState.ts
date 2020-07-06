import {Reducer, useReducer, useRef} from 'react';
import {loadState, saveState} from './localStorage';
import {State, RawStateData, Action} from './types';
import {loadComments, unloadComments} from '../helpers/loadComments';

export const useLocalStorageState = (reducer: Reducer<State, Action>, initialState: State, storageKey: string): [State, Function] => {
  const isLoading = useRef(true);
  if (isLoading.current) {
    const load = loadState<RawStateData>(storageKey);
    if (load) {
      initialState = {
        ...load, comments: loadComments(load.comments)
      };
    }
    isLoading.current = false;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(unloadComments(state.comments));
  // saveState(storageKey, {...state, comments: unloadDataSet(state.comments)});
  return [state, dispatch];
};
