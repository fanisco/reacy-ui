import React, {createContext, useReducer} from 'react';

import {reducer} from './reducer';
import {State} from './types';

const initialState: State = {};

const Context = createContext<{state: State, dispatch: any}>({
  state: initialState,
  dispatch: () => void 0
});

const Provider: React.FC<{}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};

export {Context, Provider}
