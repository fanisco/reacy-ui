import React from 'react';
import IComponentProps from '../interface/IComponentProps';
import './Card.scss';

export const Card: React.FC<IComponentProps> = (props) => {
    return (
        <div className={getClass(props)}>{props.children}</div>
    );
};

const getClass = (props: IComponentProps) => {
    const base = 'card';
    const classes: string[] = [base];
    if (props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    return classes.join(' ');
};
