import React, { useState } from 'react';
import {
    Button,
    Input, Switch,
    List, Select,
    Panel,
    Heading,
    Row,
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
    const [switch1Value, setSwitch1Value] = useState(true);

    return (
        <div>
            <Container size={Sizes.xl}>
                <Panel>
                    <Heading>Button types</Heading>
                    <Row>
                        <Button>Default</Button>
                        <Button style={Styles.primary}>Primary</Button>
                        <Button style={Styles.primary} mode="link">Primary link</Button>
                        <Button style={Styles.secondary}>Secondary</Button>
                        <Button style={Styles.secondary} mode="link">Secondary link</Button>
                    </Row>
                    <Row>
                        <Button style={Styles.success}>Success</Button>
                        <Button style={Styles.warning}>Warning</Button>
                        <Button style={Styles.danger}>Danger</Button>
                    </Row>
                    <Row>
                        <Button style={Styles.success} mode="outline">Success outline</Button>
                        <Button style={Styles.danger} mode="outline">Danger outline</Button>
                        <Button style={Styles.warning} mode="outline">Warning outline</Button>
                    </Row>
                    <Row>
                        <Button disabled={true}>Disabled</Button>
                    </Row>
                </Panel>
                <Panel key="panel">
                    <Row key="grid">
                        <div>
                            <Heading>Button sizes</Heading>
                            <Row>
                                <Button size={Sizes.xs}>XS</Button>
                                <Button size={Sizes.sm}>SM</Button>
                                <Button size={Sizes.md}>MD</Button>
                                <Button size={Sizes.lg}>LG</Button>
                                <Button size={Sizes.xl}>XL</Button>
                            </Row>
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
                            <Switch size={Sizes.xs} name="switch" caption="Switch" value={switch1Value} onChange={(value) => {
                                setSwitch1Value(value);
                            }}/>
                        </div>
                    </Row>
                </Panel>
            </Container>
        </div>
    );
};

export default App;
