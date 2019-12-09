import React from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { List } from '../list/List';
import { ListItem } from '../types/Item';

interface IProps {
    onClick?: (item: ListItem) => void;
    open?: boolean;
    position?: 'bl'
    items?: any[];
    style?: Styles;
    size?: Sizes;
}

export const Dropdown: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, position = 'bl', ...props}) => {
    const onListClick = (item: ListItem) => {
        props.onClick && props.onClick(item);
    };

    const colors = Colors[style];
    const sizes = Dims[size];
    const Dropdown = styled.div`
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        background: ${colors.baseL3};
        border: 1px solid ${colors.baseL0};
        border-radius: ${sizes.borderRadius}px;
        box-shadow: 0 1px 5px ${colors.baseL0}50;
        
        ${position === 'bl' && `
            top: 100%;
            left: 0;
            margin-top: -1px;
        `}
        
        ${!props.open && 'display: none;'};
    `;

    return (
        <Dropdown>
            <List
                style={style}
                size={size}
                items={props.items}
                onClick={onListClick}
            />
        </Dropdown>
    );
};
