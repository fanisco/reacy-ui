import React from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes,
    items: any[]
}

export const List: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onClick}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${colors.baseL1};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius};
    `;
    const Item = styled.li`
        padding: ${sizes.spacingHalf} ${sizes.spacing};
        border-top: 1px solid ${colors.baseL2};
        cursor: pointer;
        
        &:first-child {
            border-top: 0 none;
        }
        &:hover, &:nth-child(even) {
            background: ${colors.baseL2};
            border-color: ${colors.baseL3};
        }
    `;
    return (
        <List>
            {items.map((item) => {
                return <Item onClick={() => onClick && onClick(item)}>{item.title}</Item>
            })}
        </List>
    );
};
