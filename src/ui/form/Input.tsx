import React from 'react';
import IStyledProps from '../interface/IStyledProps';
import IInputProps from '../interface/IInputProps';
import './Input.scss';

export const Input: React.FC<IProps> = (props) => {
    return (
        <input
            className={getClass(props)}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value);
            }}
        />
    );
};

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const getClass = (props: IProps) => {
    const base = 'input';
    const classes: string[] = [base];
    if (props.style !== 'default') {
        classes.push(`${base}_${props.style}`);
    }
    if (props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    return classes.join(' ');
};

export const stylize = (props: IStyledProps) => `
    
`;
