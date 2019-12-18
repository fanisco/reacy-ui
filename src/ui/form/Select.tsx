import React from 'react';
import { Component } from '../base';
import { Button } from '../buttons';
import { Dropdown } from '../popup';
import { ListItem } from '../types/Item';
import IInputProps from '../interface/IInputProps';
import './Select.scss';

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
        const { dims } = this.getStyles();
        return (
            <div id={`select-${this.id}`} className={getClass(this.props)}>
                <Button
                    style={this.props.style}
                    size={this.props.size}
                    fullWidth={true}
                    textAlign="left"
                    icon="angle-down"
                    iconPosition="end"
                >
                    {this.getCaption(this.props.values, this.props.value)}
                </Button>
                <Dropdown
                    style={this.props.style}
                    size={this.props.size}
                    items={this.props.values}
                    topShift={dims.elementHeight}
                    onClick={this.onDropdownClick}
                />
            </div>
        );
    }
}

const getClass = (props: IProps) => {
    const base = 'select';
    const classes: string[] = [base];
    if (props.size && props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    return classes.join(' ');
};
