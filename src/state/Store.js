import React, {createContext, useReducer} from 'react';
import {items} from './items';

const initialState = {
  items
};

export const Store = createContext(initialState);
export function StoreProvider({children}) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const value = {state, dispatch};
  const value = {items};
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
