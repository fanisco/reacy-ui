import React from 'react';
import { Input } from './Input';
import { Switch } from './Switch';
import { FormItem } from '../Types/Item';

interface IProps {
    items: FormItem[];
    onChange: (name: any, value: any) => void
}

export const Controller: React.FC<IProps> = ({ ...props }) => {
    return (
        <div>
            {props.items.map((item, i) => {
                const properties = {
                    key: i,
                    ...item,
                    onChange: (value: any) => {
                        props.onChange(item.id, value);
                    }
                };
                switch (item.type) {
                    case 'string':
                        return <Input {...properties}/>;
                    case 'boolean':
                        return <Switch {...properties}/>;
                }
            })}
        </div>
    );
};
