import React from 'react';
import Context from './Context';
import {
    Button,
    Input, Textarea, Switch, Controller,
    List, Select,
    Panel,
    Heading,
    Row,
    Container,
    Styles, Sizes
} from './ui';

export const Demo: React.FC = () => {
    const store = React.useContext(Context);
    if (!store) {
        throw Error('Store shouldn\'t be null');
    }
    const items = store.allItems;
    return (
        <Container size={Sizes.sm}>
            <Controller items={items} onChange={(id, value) => {
                store.setItem(id, value);
            }}/>
        </Container>
    );
};
