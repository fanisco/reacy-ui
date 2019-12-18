import React from 'react';
import { observer } from 'mobx-react-lite';
import { Field } from './Field';
import { Input } from './Input';
import { Switch } from './Switch';
import { FormItem } from '../types/Item';
import { Textarea } from './Textarea';
import { Toggle } from './Toggle';
import Select from './Select';
import IComponentProps from '../interface/IComponentProps';

interface IProps extends IComponentProps {
    wrap?: boolean;
    items: FormItem[];
    onChange: (name: any, value: any) => void;
    buttons?: any[];
}

export const Controller: React.FC<IProps> = observer((props) => {
    return (
        <div>
            {props.items.map((item, i) => {
                const properties = {
                    key: i,
                    style: props.style,
                    size: props.size,
                    ...item,
                    onChange: (value: any) => {
                        props.onChange(item.id, value);
                    }
                };
                let elem;
                switch (item.type) {
                    case 'string':
                    case 'number':
                        elem = <Input {...properties}/>;
                        break;
                    case 'text':
                        elem = <Textarea {...properties}/>;
                        break;
                    case 'switch':
                        elem = <Switch {...properties}/>;
                        break;
                    case 'select':
                        elem = <Select {...properties}/>;
                        break;
                    case 'toggle':
                        elem = <Toggle {...properties}/>;
                        break;
                }
                return props.wrap ? <Field key={i} {...item}>{elem}</Field> : elem;
            })}
        </div>
    );
});
