import React from 'react';
import { Component } from '../base';
import styled from 'styled-components';
import Popup from './Popup';
import IComponentProps from '../interface/IComponentProps';

export default class Dropdown extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        const { colors, dims } = this.getStyles();
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
                    background={colors.idleColor}
                    borderColor={colors.borderColor}
                    borderRadius={dims.borderRadius}
                    shadowColor={colors.shadowColor}
                    topShift={this.props.topShift||0}
                >{this.props.children}</DropdownElement>
            </Popup>
        );
    }
}

interface IProps extends IComponentProps {
    topShift?: number;
    open?: boolean;
    position?: 'bl';
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
    topShift: number;
}

const DropdownElement = styled.div<IStyledProps>`
    padding-top: ${props => props.topShift - 1}px;
    margin-top: -${props => props.topShift}px;
    box-sizing: border-box;
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props => props.borderRadius}px;
    box-shadow: 0 1px 17px ${props => props.shadowColor}22;
`;
