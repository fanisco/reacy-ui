import React from 'react';
import { Sizes, Styles } from '../enums';
import { ListItem } from '../types/Item';
import './List.scss';

export const List: React.FC<IProps> = (props) => {
    const { items, onClick } = props;
    return (
        <ul className={getClass(props)}>
            {items ?
                items.map((item, i) =>
                    <li key={i} className="list__item" onClick={() => onClick && onClick(item)}>{
                        props.itemTemplate ? props.itemTemplate(item) : (item.name || item.id)
                    }</li>)
                : null
            }
        </ul>
    );
};

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes;
    items?: ListItem[];
    itemTemplate?: (props: ListItem) => React.ReactNode;
}

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
