import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, TStore } from './Store';

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(createStore);

    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    );
};
