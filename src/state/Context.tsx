import React, {createContext, useReducer} from 'react';

import data from '../data/comments.json';
import {loadComments} from '../helpers/loadComments';

import {reducer} from './reducer';
import {useLocalStorageState} from './useLocalStorageState';
import {State} from './types';

const initialState = {
  comments: loadComments(data),
  settings: {
    compact: false,
    stacked: false
  }
};

const storageKey = 'NO_COMMENTS_STATE';

const Context = createContext<{state: State, dispatch: any}>({
  state: initialState,
  dispatch: () => void 0
});
const Provider: React.FC<{}> = ({children}) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useLocalStorageState(reducer, initialState, storageKey);
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};

export {Context, Provider}
