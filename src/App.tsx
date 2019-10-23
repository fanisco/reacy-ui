import React from 'react';
import { StoreProvider } from './Context';
import { Demo } from './Demo';

const App: React.FC = () => {
    return (
        <StoreProvider>
            <Demo/>
        </StoreProvider>
    );
};

export default App;
