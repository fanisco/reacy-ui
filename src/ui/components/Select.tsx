import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { List } from './List';
import { Button } from './Button';

interface IProps {
    onChange?: Function;
    style?: Styles;
    size?: Sizes,
    value?: any;
    items: any[]
}

export const Select: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onChange}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Select = styled.div`
        
    `;

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Select>
            <Button bottomOpen={isOpen} fullWidth={true} onClick={() => {
                setIsOpen(!isOpen);
            }}>Sek</Button>
            <List items={items} onClick={(item: any) => {
                setIsOpen(false);
            }}/>
        </Select>
    );
};
