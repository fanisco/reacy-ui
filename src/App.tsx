import React from 'react';
import { Button, Panel } from './ui';

const App: React.FC = () => {
    return (
        <div className="App">
            <Panel>Panel
                <Button>Button</Button>
            </Panel>
        </div>
    );
};

export default App;
