import React, { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { StoreProvider, storeContext } from './Context';
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
    const store = useContext(storeContext);
    if (!store) {
        throw Error('Store shouldn\'t be null.');
    }
    return useObserver(() => {
        return (
            <Container size={Sizes.xl}>
                <Controller items={store.allElements} onChange={(name, value) => {
                    const elem = store.getElementByName(name);
                    if (!elem) {
                        return;
                    }
                    console.log(name, value, elem);
                    elem.value = value;
                }}/>
            </Container>
        );
    });
};
