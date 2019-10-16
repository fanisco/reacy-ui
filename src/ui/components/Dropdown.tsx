import React from 'react';
import styled from 'styled-components';
// import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { List, ListItem } from './List';

interface IProps {
    onClick?: (item: ListItem) => void;
    open?: boolean;
    position?: 'bl'
    items: any[];
    style?: Styles;
    size?: Sizes;
}

export const Dropdown: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, position = 'bl', ...props}) => {
    const onListClick = (item: ListItem) => {
        props.onClick && props.onClick(item);
    };

    // const colors = Colors[style];
    // const sizes = Dims[size];
    const Dropdown = styled.div`
        position: absolute;
        width: 100%;
        
        ${position === 'bl' && `
            top: 100%;
            left: 0;
            margin-top: 1px;
        `}
    `;
    const ListWrapper = styled.div`
        ${!props.open && 'display: none;'};
    `;

    return (
        <Dropdown>
            <ListWrapper>
                <List
                    style={style}
                    size={size}
                    items={props.items}
                    onClick={onListClick}
                />
            </ListWrapper>
        </Dropdown>
    );
};
