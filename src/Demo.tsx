import React from 'react';
import { useLocalStore, useObserver, observer } from 'mobx-react-lite';
import Store from './Store';
// import { StoreProvider, Context } from './Context';
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

export const Demo: React.FC = observer(() => {
    const store = useLocalStore(() => new Store());
    const items = store.allItems;
    return (
        <Container size={Sizes.xl}>
            <List items={items}/>
            <Controller items={items} onChange={(id, value) => {
                store.setItem(id, value);
            }}/>
            {items.map((item, i) => {
                return <input key={i} value={item.value} onChange={(e) => {
                    console.log(e.target.value);
                }}/>
            })}
        </Container>
    );
});
