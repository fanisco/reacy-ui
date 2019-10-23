import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import Store from './Store';

const Context = createContext<Store | null>(null);
export const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(() => new Store());

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
};

export default Context;