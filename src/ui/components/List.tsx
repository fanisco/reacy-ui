import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Sizes, Styles } from '../enums';

export const List: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onClick}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${colors.baseL3};
        border: 1px solid ${colors.baseL0};
        border-radius: ${sizes.borderRadius}px;
        box-shadow: 0 1px 5px ${colors.baseL0};
    `;
    const Item = styled.li`
        box-sizing: border-box;
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        cursor: pointer;
        font: ${sizes.fontSize}px/${Fonts.mh} "${Fonts.ff}";
        
        &:first-child {
            border-top-left-radius: ${sizes.borderRadius}px;
            border-top-right-radius: ${sizes.borderRadius}px;
        }
        &:last-child {
            border-bottom-left-radius: ${sizes.borderRadius}px;
            border-bottom-right-radius: ${sizes.borderRadius}px;
        }
        &:hover {
            background: ${colors.baseL1};
            border-color: ${colors.baseL1};
        }
    `;
    return (
        <List>
            {items.map((item, i) => {
                return <Item key={i} onClick={() => onClick && onClick(item)}>{item.title}</Item>
            })}
        </List>
    );
};

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes,
    items: ListItem[]
}

export type ListItem = {
    id: number;
    title: string;
}
