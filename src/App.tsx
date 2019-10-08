import React from 'react';
import { Button, Panel, GridView } from './ui';

const App: React.FC = () => {
    return (
        <div className="App">
            <Panel caption="Panel">
                <GridView>
                    <Button>Button</Button>
                    <Button style="success">Button</Button>
                    <Button disabled={true}>Button</Button>
                </GridView>
            </Panel>
        </div>
    );
};

export default App;
