import React from 'react';
import { Sizes, Styles } from '../enums';
import { ListItem } from '../types/Item';
import './List.scss';

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes,
    items?: ListItem[]
}

export const List: React.FC<IProps> = (props) => {
    const { items, onClick } = props;
    return (
        <ul className={getClass(props)}>
            {items ? items.map((item, i) => {
                return <li key={i} className="list__item" onClick={() => onClick && onClick(item)}>{item.name || item.id}</li>
            }) : null}
        </ul>
    );
};

const getClass = (props: IProps) => {
    const base = 'list';
    const classes: string[] = [base];
    if (props.size && props.style !== 'default') {
        classes.push(`${base}_${props.style}`);
    }
    if (props.size && props.size !== 'md') {
        classes.push(`${base}_${props.size}`);
    }
    return classes.join(' ');
};
