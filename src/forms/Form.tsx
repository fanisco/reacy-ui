import React from 'react';
import {Forms, Core} from '../core/interfaces';
// import {Field} from './Field';
import {Input} from './Input';
// import {Switch} from './Switch';
import {Textarea} from './Textarea';
// import {Toggle} from './Toggle';
// import Select from './Select';

export const Form: React.FC<Forms.IForm> = ({fields, onChange, wrap = false}) => {
return (
  <div>
    {fields.map((item, i) => {
      const properties = {
          key: i,
          ...item,
          onChange: (value: any) => {
              onChange(item.name, value);
          }
      };
      let elem;
      switch (item.type) {
          case 'string':
          case 'number':
              elem = <Input {...properties}/>;
              break;
          case 'textarea':
              elem = <Textarea {...properties}/>;
              break;
        // case 'switch':
        //     elem = <Switch {...properties}/>;
        //     break;
        // case 'select':
        //     elem = <Select {...properties}/>;
        //     break;
        // case 'toggle':
        //     elem = <Toggle {...properties}/>;
        //     break;
      }
      return /*wrap ? <Field key={i} {...item}>{elem}</Field> : */elem;
    })}
  </div>
);
};
