import React from 'react';
import IComponentProps from '../interface/IComponentProps';
import './Cell.scss';

export const Cell: React.FC<IProps> = (props) => {
    return (
        <div className={`cell cell_col${props.cols}`}>{props.children}</div>
    );
};

interface IProps extends IComponentProps {
    cols: number;
}
