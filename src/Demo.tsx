import React from 'react';
import Context from './Context';
import { observer } from 'mobx-react-lite';
import { Container, H3, Card } from './ui/layout';
import { Controller, Input, Switch } from './ui/form';
import { Button } from './ui/buttons';
import { Icon } from './ui/icons';
import { Stack } from './ui/popup';
import { Menu } from './ui/list';
import { Row, Cell } from './ui/grid';

export const Demo: React.FC = observer(() => {
    const store = React.useContext(Context);
    if (!store) {
        throw Error('Store shouldn\'t be null');
    }
    const items = store.allItems;
    const props = store.allProps;
    const menu = store.allMenu;
    return (
        <>
            <Container>
                <Row>
                    <Cell cols={12}>
                        <Card>
                            <H3>Button configurator <Icon name="dragon"/></H3>
                            <Controller wrap={true} items={items} onChange={(id, value) => {
                                store.setItem(id, value);
                            }}/>
                            <Button {...props}>{props.caption}</Button>
                        </Card>
                    </Cell>
                    {/*<Cell cols={12}>*/}
                    {/*    <Card>Test</Card>*/}
                    {/*</Cell>*/}
                </Row>
            </Container>
        </>
    );
});
