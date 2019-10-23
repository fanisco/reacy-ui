import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { ListItem } from './Types/Item';

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes,
    items?: ListItem[]
}

export const List: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onClick}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: ${sizes.borderRadius}px;
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
            {items ? items.map((item, i) => {
                return <Item key={i} onClick={() => onClick && onClick(item)}>{item.name}</Item>
            }) : null}
        </List>
    );
};
