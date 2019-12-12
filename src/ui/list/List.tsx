import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { ListItem } from '../types/Item';

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
        background: ${colors.lights};
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: ${sizes.borderRadius}px;
    `;
    const Item = styled.li`
        box-sizing: border-box;
        height: ${sizes.elementHeight - sizes.spacing / 2}px;
        padding: ${sizes.spacing / 2}px ${sizes.spacing}px;
        cursor: pointer;
        font: ${sizes.fontSize}px/${Fonts.mh} "${Fonts.ff}";
        border-top: 1px solid ${colors.baseL1};
        
        &:first-child {
            border-top: 0 none;
        }
        &:last-child {
            border-bottom-left-radius: ${sizes.borderRadius}px;
            border-bottom-right-radius: ${sizes.borderRadius}px;
        }
        &:hover {
            background: ${colors.baseL2};
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
