import React from 'react';
import { Button, Panel, Heading, GridView, Container, Presentation, Styles, Sizes } from './ui';

const App: React.FC = () => {
    return (
        <div className="App">
            <Presentation>
                <Container size={Sizes.xl}>
                    <Panel>
                        <Heading>Button types</Heading>
                        <GridView>
                            <Button>Default</Button>
                            <Button style={Styles.success}>Success</Button>
                            <Button style={Styles.warning}>Warning</Button>
                            <Button style={Styles.danger}>Danger</Button>
                            <Button disabled={true}>Disabled</Button>
                        </GridView>
                    </Panel>
                    <Panel>
                        <Heading>Button sizes</Heading>
                        <GridView>
                            <Button size={Sizes.xs}>XS</Button>
                            <Button size={Sizes.sm}>SM</Button>
                            <Button size={Sizes.md}>MD</Button>
                            <Button size={Sizes.lg}>LG</Button>
                            <Button size={Sizes.xl}>XL</Button>
                        </GridView>
                    </Panel>
                </Container>
            </Presentation>
        </div>
    );
};

export default App;
