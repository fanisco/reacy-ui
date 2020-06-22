import React, {createContext} from 'react';
import reducer from './reducer';
import {items} from './items';
import useLocalStorageState from './useLocalStorageState';

const initialState = {
  items,
  cart: []
};

const storageKey = 'TASK_PIZZA_STATE';

export const Context = createContext(initialState);
export function ContextProvider({children}) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useLocalStorageState(reducer, initialState, storageKey);
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
}
