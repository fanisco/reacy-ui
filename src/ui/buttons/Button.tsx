import React from 'react';
import { Sizes, Styles } from '../enums';
import { Icon } from '../icons';
import './Button.scss';

export const Button: React.FC<IProps> = (props) => {
    return (
        <button
            className={getClass(props)}
            disabled={props.state === false}
            onClick={() => props.onClick && props.onClick()}
        >{props.icon ? <Icon name={props.icon}/> : null}{props.children}</button>
    );
};

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes;
    mode?: 'default' | 'link' | 'outline';
    textAlign?: 'left' | 'center' | 'right';
    bold?: boolean;
    italic?: boolean;
    rounded?: boolean;
    fullWidth?: boolean;
    state?: boolean | null;
    side?: boolean | null;
    icon?: string;
}

const getClass = (props: IProps) => {
    const base = 'btn';
    const classes: string[] = [base];
    if (props.style !== 'default') {
        classes.push(`${base}_${props.style}`);
    }
    if (props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    if (props.state !== null) {
        classes.push(`${base}_${props.state ? 'active' : 'disabled'}`);
    }
    if (props.bold) {
        classes.push(`${base}_bold`);
    }
    if (props.italic) {
        classes.push(`${base}_italic`);
    }
    if (props.rounded) {
        classes.push(`${base}_rounded`);
    }
    if (props.fullWidth) {
        classes.push(`${base}_fullWidth`);
    }
    if (props.mode !== 'default') {
        classes.push(`${base}_${props.mode}`);
    }
    if (props.side !== undefined) {
        classes.push(`${base}_${props.side ? 'first' : props.side === false ? 'last' : 'mid'}`);
    }
    return classes.join(' ');
};
