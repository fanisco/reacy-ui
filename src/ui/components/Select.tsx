import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { Images } from '../images';
import { List, ListItem } from './List';
import { Button } from './Button';

interface IProps {
    onChange?: (item: ListItem) => void;
    style?: Styles;
    size?: Sizes,
    value?: any;
    items: any[]
}

export const Select: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onChange}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Select = styled.div`
        position: relative;
    `;

    const Arrow = styled.div`
        position: absolute;
        top: ${sizes.spacing + sizes.spacingHalf}px;
        right: ${sizes.spacing}px;
        width: ${Images.arrowDown.width}px;
        height: ${Images.arrowDown.height}px;
        background: url("${Images.arrowDown.src}") center no-repeat;
    `;

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Select>
            <Button bottomOpen={isOpen} fullWidth={true} textAlign="left" onClick={() => {
                setIsOpen(!isOpen);
            }}>Sek<Arrow/></Button>
            {isOpen ?
                <List items={items} onClick={(item: any) => {
                    setIsOpen(false);
                    onChange && onChange(item.id);
                }}/> : null}
        </Select>
    );
};
