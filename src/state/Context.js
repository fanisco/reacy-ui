import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import {items} from './items';

const initialState = {
  items,
  cart: []
};

export const Context = createContext(initialState);
export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
}
