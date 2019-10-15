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
        background: ${colors.baseL1};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
    `;
    const Item = styled.li`
        box-sizing: border-box;
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        border-top: 1px solid ${colors.baseL2};
        cursor: pointer;
        font: ${sizes.fontSize}px/${Fonts.mh} "${Fonts.ff}";
        
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
