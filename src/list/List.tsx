import React from 'react';
import styled from 'styled-components';
import { Fonts, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { ListItem } from '../types/Item';
import { getColors } from '../helpers';

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes,
    items?: ListItem[]
}

export const List: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, items, onClick}) => {
    const colors = getColors(style);
    const dims = Dims[size];
    const List = styled.ul`
        background: ${colors.idleColor};
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: ${dims.borderRadius}px;
        color: ${colors.textColor}
    `;
    const Item = styled.li`
        box-sizing: border-box;
        height: ${dims.elementHeight - dims.spacing / 2}px;
        padding: ${dims.spacing / 2}px ${dims.spacing}px;
        cursor: pointer;
        font: ${dims.fontSize}px/${dims.lineHeight} "${Fonts.ff}";
        border-top: 1px solid ${colors.borderLight};

        &:first-child {
            border-top: 0 none;
        }
        &:last-child {
            border-bottom-left-radius: ${dims.borderRadius}px;
            border-bottom-right-radius: ${dims.borderRadius}px;
        }
        &:hover {
            background: ${colors.hoverColor};
        }
    `;
    return (
        <List>
            {items ? items.map((item, i) => {
                return <Item key={i} onClick={() => onClick && onClick(item)}>{item.name || item.id}</Item>
            }) : null}
        </List>
    );
};
