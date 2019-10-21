import React, { useState } from 'react';
import {
    Button, Input, List, Select,
    Panel,
    Heading,
    GridView,
    Container,
    Styles, Sizes
} from './ui';

const items = [
    { id: 1, title: 'List item 1' },
    { id: 2, title: 'List item 2' },
    { id: 3, title: 'List item 3' },
    { id: 4, title: 'List item 4' },
    { id: 5, title: 'List item 5' },
];

const App: React.FC = () => {
    const [select1Value, setSelect1Value] = useState(1);
    const [input1Value, setInput1Value] = useState('');

    return (
        <div>
            <Container size={Sizes.xl}>
                <Panel>
                    <Heading>Button types</Heading>
                    <GridView>
                        <Button>Default</Button>
                        <Button style={Styles.primary}>Primary</Button>
                        <Button style={Styles.primary} mode="link">Primary link</Button>
                        <Button style={Styles.secondary}>Secondary</Button>
                        <Button style={Styles.secondary} mode="link">Secondary link</Button>
                    </GridView>
                    <GridView>
                        <Button style={Styles.success}>Success</Button>
                        <Button style={Styles.warning}>Warning</Button>
                        <Button style={Styles.danger}>Danger</Button>
                    </GridView>
                    <GridView>
                        <Button style={Styles.success} mode="outline">Success outline</Button>
                        <Button style={Styles.danger} mode="outline">Danger outline</Button>
                        <Button style={Styles.warning} mode="outline">Warning outline</Button>
                    </GridView>
                    <GridView>
                        <Button disabled={true}>Disabled</Button>
                    </GridView>
                </Panel>
                <Panel key="panel">
                    <GridView key="grid">
                        <div>
                            <Heading>Button sizes</Heading>
                            <GridView>
                                <Button size={Sizes.xs}>XS</Button>
                                <Button size={Sizes.sm}>SM</Button>
                                <Button size={Sizes.md}>MD</Button>
                                <Button size={Sizes.lg}>LG</Button>
                                <Button size={Sizes.xl}>XL</Button>
                            </GridView>
                        </div>
                        <div>
                            <Heading>List</Heading>
                            <List items={items} onClick={(item: any) => {
                                alert(`Clicked on item #${item.id}`);
                            }}/>
                        </div>
                        <div>
                            <Heading>Select</Heading>
                            <Select items={items} value={select1Value} onChange={(value) => {
                                setSelect1Value(value);
                            }}/>
                            <Input value={input1Value} onChange={(value) => {
                                setInput1Value(value);
                            }}/>
                        </div>
                    </GridView>
                </Panel>
            </Container>
        </div>
    );
};

export default App;
