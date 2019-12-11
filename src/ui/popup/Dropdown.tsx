import React from 'react';
import { Component } from '../base';
import styled from 'styled-components';
import Popup from './Popup';
import { List } from '../list/List';
import { ListItem } from '../types/Item';
import IComponentProps from '../interface/IComponentProps';

interface IProps extends IComponentProps {
    onClick?: (item: ListItem) => void;
    open?: boolean;
    position?: 'bl'
    items?: any[];
}

export default class Dropdown extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.onListClick = this.onListClick.bind(this);
    }
    onListClick(item: ListItem) {
        this.props.onClick && this.props.onClick(item);
    };
    render() {
        const { colors, dims, style, size } = this.getStyles();
        const position = this.props.position;
        const positions: IPositions = {};

        switch (position) {
            case 'bl':
                positions.top = '100%';
                positions.left = 0;
                break;
        }
        return (
            <Popup {...positions} visible={this.props.open} width="100%">
                <DropdownElement
                    id={`dropdown-${this.id}`}
                    background={colors.baseL3}
                    borderColor={colors.baseL0}
                    borderRadius={dims.borderRadius}
                    shadowColor={colors.baseL0}
                >
                    <List
                        style={style}
                        size={size}
                        items={this.props.items}
                        onClick={this.onListClick}
                    />
                </DropdownElement>
            </Popup>
        );
    }
}

interface IPositions {
    top?: number|string;
    left?: number|string;
    right?: number|string;
    bottom?: number|string;
}

interface IStyledProps {
    background: string;
    borderColor: string;
    borderRadius: number;
    shadowColor: string;
}

const DropdownElement = styled.div<IStyledProps>`
    box-sizing: border-box;
    background: ${props => props.background};
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props => props.borderRadius}px;
    box-shadow: 0 1px 5px ${props => props.shadowColor}50;
`;
