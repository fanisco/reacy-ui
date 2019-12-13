import React from 'react';
import Context from './Context';
import { observer } from 'mobx-react-lite';
import { Container, Panel, H3 } from './ui/layout';
import { Controller } from './ui/form';
import { Button } from './ui/buttons';
import { Icon } from './ui/icons';
import { Sizes } from './ui';

export const Demo: React.FC = observer(() => {
    const store = React.useContext(Context);
    if (!store) {
        throw Error('Store shouldn\'t be null');
    }
    const items = store.allItems;
    const props = store.allProps;
    return (
        <Container size={Sizes.sm}>
            <Panel>
                <H3>Button configurator <Icon name="dragon"/></H3>
                <Controller wrap={true} items={items} onChange={(id, value) => {
                    store.setItem(id, value);
                }}/>
                <Button {...props}>{props.caption}</Button>
            </Panel>
        </Container>
    );
});
