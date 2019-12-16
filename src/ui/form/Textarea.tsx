import React from 'react';
import IInputProps from '../interface/IInputProps';
import { getClass } from './Input';
import './Input.scss';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const Textarea: React.FC<IProps> = (props) => {
    return (
        <textarea
            className={getClass(props)}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value);
            }}
        />
    );
};
