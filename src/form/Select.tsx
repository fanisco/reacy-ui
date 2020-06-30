import React from 'react';
import { Component } from '../base';
import styled from 'styled-components';
import { Images } from '../images';
import { Button } from '../buttons';
import { Dropdown } from '../popup';
import { ListItem } from '../types/Item';
import IInputProps from '../interface/IInputProps';

interface IProps extends IInputProps {
    values?: any[];
}

/**
 * Component for displaying select dropdown.
 */
export default class Select extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.onDropdownClick = this.onDropdownClick.bind(this);
    }
    onDropdownClick(item: ListItem) {
        this.props.onChange && this.props.onChange(item.id);
    };
    getCaption(items?: ListItem[], value?: number): string {
        if (items) {
            for (const item of items) {
                if (item.id === value) {
                    return `${item.name || item.id}`;
                }
            }
        }
        return '';
    }
    render() {
        const { dims, style, size } = this.getStyles();
        return (
            <SelectElement
                id={`select-${this.id}`}
                width={dims.elementWidth}
                height={dims.elementHeight}
            >
                <Button
                    style={style}
                    size={size}
                    fullWidth={true}
                    textAlign="left"
                >
                    {this.getCaption(this.props.values, this.props.value)}
                    <ArrowElement open={false} right={dims.spacing}/>
                </Button>
                <Dropdown
                    style={style}
                    size={size}
                    items={this.props.values}
                    topShift={dims.elementHeight}
                    onClick={this.onDropdownClick}
                />
            </SelectElement>
        );
    }
}

interface IStyledProps {
    width: number;
    height: number;
}

const SelectElement = styled.div<IStyledProps>`
    position: relative;
    width: 100%;
    min-width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

interface IStyledArrowProps {
    open: boolean;
    right: number;
}

const arrowImage = Images.arrowDown;
const ArrowElement = styled.div<IStyledArrowProps>`
    position: absolute;
    top: 50%;
    right: ${props => props.right}px;
    width: ${arrowImage.width}px;
    height: ${arrowImage.height}px;
    margin-top: -${arrowImage.height / 2}px;
    background: url("${arrowImage.src}") center no-repeat;
    transform: rotate(${props => props.open ? '180deg' : '0deg'});
`;
