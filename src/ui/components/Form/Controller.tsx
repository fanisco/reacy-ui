import React from 'react';
import {Input} from "./Input";
import {Switch} from "./Switch";

interface IProps {
    items: FormElement[];
    onChange: (name: string, value: any) => void
}

export const Controller: React.FC<IProps> = ({ ...props }) => {
    return (
        <div>
            {props.items.map((item, i) => {
                const properties = {
                    key: i,
                    ...item,
                    onChange: (value: any) => {
                        props.onChange(item.name, value);
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

export type FormElement = {
    name: string;
    type: string;
    value: any;
    values?: any[];
    caption?: string;
}
