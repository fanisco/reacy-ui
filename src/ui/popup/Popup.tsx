import React, { Component } from 'react';
import styled from 'styled-components';
import Manager from './Manager';

export default class Popup<T extends IProps> extends Component<T> {
    constructor(props: T) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <PopupElement
                top={this.props.top}
                left={this.props.left}
                right={this.props.right}
                bottom={this.props.bottom}
                zIndex={Manager.getInstance().index}
                width={this.props.width}
                visible={this.props.visible}
            >{this.props.children}</PopupElement>
        );
    }
}

interface StyledProps {
    top?: number|string;
    left?: number|string;
    right?: number|string;
    bottom?: number|string;
    zIndex?: number|string;
    width?: number|string;
    visible?: boolean;
}

const PopupElement = styled.div<StyledProps>`
    position: absolute;
    ${props => props.top !== undefined ? `top: ${props.top}` : ''}
    ${props => props.left !== undefined ? `left: ${props.left}` : ''}
    ${props => props.right !== undefined ? `right: ${props.right}` : ''}
    ${props => props.bottom !== undefined ? `bottom: ${props.bottom}` : ''}
    ${props => props.zIndex !== undefined ? `z-index: ${props.zIndex}` : ''}
    ${props => props.width !== undefined ? `width: ${props.width}` : ''}
    display: ${props => props.visible ? 'block' : 'none'};
`;

interface IProps {
    top?: number|string;
    left?: number|string;
    right?: number|string;
    bottom?: number|string;
    zIndex?: number|string;
    width?: number|string;
    visible?: boolean;
}
