import React from 'react';
import { Component } from '../base';
import styled from 'styled-components';
import Manager from './Manager';
import IComponentProps from '../interface/IComponentProps';

/**
 * Container for popup content.
 */
export default class Popup extends Component<IProps, IState> {
    node: Node = escapeDiv;
    constructor(props: IProps) {
        super(props);
        this.state = { visible: !!this.props.visible };
        this.setRefNodes = this.setRefNodes.bind(this);
    }
    componentWillMount(): void {
        const manager = Manager.getInstance();
        manager.register(this);
    }
    componentWillUnmount(): void {
        const manager = Manager.getInstance();
        manager.unregister(this);
    }

    show(): void {
        this.setState({ visible: true });
    }
    hide(): void {
        this.setState({ visible: false });
    }
    toggle(): void {
        this.state.visible ? this.hide() : this.show();
    }
    setRefNodes(node: HTMLDivElement): void {
        if (node) {
            this.node = node;
        }
    }
    render() {
        return (
            <PopupElement
                id={`popup-${this.id}`}
                ref={this.setRefNodes}
                position={this.props.position || 'absolute'}
                top={this.props.top}
                left={this.props.left}
                right={this.props.right}
                bottom={this.props.bottom}
                zIndex={Manager.getInstance().index}
                width={this.props.width}
                visible={this.state.visible}
            >{this.props.children}</PopupElement>
        );
    }
}

interface IStyledProps {
    position?: string;
    top?: number|string;
    left?: number|string;
    right?: number|string;
    bottom?: number|string;
    zIndex?: number|string;
    width?: number|string;
    visible?: boolean;
}

const PopupElement = styled.div<IStyledProps>`
    position: ${props => props.position};
    ${props => props.top !== undefined ? `top: ${props.top}` : ''}
    ${props => props.left !== undefined ? `left: ${props.left}` : ''}
    ${props => props.right !== undefined ? `right: ${props.right}` : ''}
    ${props => props.bottom !== undefined ? `bottom: ${props.bottom}` : ''}
    ${props => props.zIndex !== undefined ? `z-index: ${props.zIndex}` : ''}
    ${props => props.width !== undefined ? `width: ${props.width}` : ''}
    display: ${props => props.visible ? 'block' : 'none'};
`;

interface IProps extends IComponentProps, IStyledProps {

}

interface IState {
    visible: boolean;
}

const escapeDiv = document.createElement('div');
