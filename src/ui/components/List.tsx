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
        background: ${colors.baseL0};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
        box-shadow: 0 1px 5px ${colors.baseL2};
    `;
    const Item = styled.li`
        box-sizing: border-box;
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        border-top: 1px solid ${colors.baseL2};
        cursor: pointer;
        font: ${sizes.fontSize}px/${Fonts.mh} "${Fonts.ff}";
        
        &:first-child {
            border-top-left-radius: ${sizes.borderRadius}px;
            border-top-right-radius: ${sizes.borderRadius}px;
            border-top: 0 none;
        }
        &:last-child {
            border-bottom-left-radius: ${sizes.borderRadius}px;
            border-bottom-right-radius: ${sizes.borderRadius}px;
        }
        &:hover, &:nth-child(even) {
            background: ${colors.baseL1};
            border-color: ${colors.baseL2};
        }
        &:hover {
            background: #fff;
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
