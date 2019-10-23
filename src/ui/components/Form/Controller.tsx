import React from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from './Input';
import { Switch } from './Switch';
import { FormItem } from '../Types/Item';
import { Textarea } from './Textarea';
import { Select } from './Select';

interface IProps {
    items: FormItem[];
    onChange: (name: any, value: any) => void
}

export const Controller: React.FC<IProps> = observer(({ ...props }) => {
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
                    case 'text':
                        return <Textarea {...properties}/>;
                    case 'boolean':
                        return <Switch {...properties}/>;
                    case 'select':
                        return <Select {...properties}/>;
                }
            })}
        </div>
    );
});
