import React from 'react';
import IInputProps from '../interface/IInputProps';
import './Switch.scss';

interface IProps extends IInputProps {
    onChange: (value: boolean) => void;
}

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
export const Switch: React.FC<IProps> = (props) => {
    return (
        <label className={getClass(props)}>
            <div className="switch__trigger"/>
            <div className="switch__hidden">
                <input
                    type="checkbox"
                    name={props.id + ''}
                    checked={props.value}
                    onChange={() => {
                        props.onChange && props.onChange(!props.value);
                    }}
                />
            </div>
        </label>
    )
};

const getClass = (props: IProps) => {
    const base = 'switch';
    const classes: string[] = [base];
    if (props.style && props.style !== 'success') {
        classes.push(`${base}_${props.style}`);
    }
    if (props.size && props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    if (props.value) {
        classes.push(`${base}_active`);
    }
    return classes.join(' ');
};
