import React from 'react';
import { Button, Panel, GridView, Styles, Sizes } from './ui';

const App: React.FC = () => {
    return (
        <div className="App">
            <Panel caption="Panel">
                <GridView>
                    <Button>Button</Button>
                    <Button style={Styles.success}>Button</Button>
                    <Button disabled={true}>Button</Button>
                </GridView>
                <GridView>
                    <Button size={Sizes.xs}>XS</Button>
                    <Button size={Sizes.sm}>SM</Button>
                    <Button size={Sizes.md}>MD</Button>
                    <Button size={Sizes.lg}>LG</Button>
                    <Button size={Sizes.xl}>XL</Button>
                </GridView>
            </Panel>
        </div>
    );
};

export default App;
