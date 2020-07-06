import React from 'react';
import {Forms} from '../../common/interfaces';
import {Field} from './Field';
import {Input} from './Input';
import {Checkbox} from './Checkbox';
import {Textarea} from './Textarea';
// import {Toggle} from './Toggle';
// import Select from './Select';

export const Form: React.FC<Forms.IForm> = ({fields, data, onChange, wrap = false, ...props}) => {
  return (
    <div>
      {fields.map((item, i) => {
        const properties: Forms.IFormItem = {
            ...item,
            mods: item.mods,
            onChange: (value: any) => {
                onChange(item.name, value);
            }
        };
        let elem;
        switch (item.type) {
            case 'string':
            case 'number':
              elem = <Input key={i} value={data[item.name]} {...properties}/>;
              break;
            case 'textarea':
              elem = <Textarea key={i} value={data[item.name]} {...properties}/>;
              break;
            case 'checkbox':
              elem = <Checkbox key={i} value={data[item.name]} {...properties}/>;
              break;
          // case 'select':
          //     elem = <Select {...properties}/>;
          //     break;
          // case 'toggle':
          //     elem = <Toggle {...properties}/>;
          //     break;
        }
        return wrap ? <Field key={i} {...item}>{elem}</Field> : elem;
      })}
    </div>
);
};
