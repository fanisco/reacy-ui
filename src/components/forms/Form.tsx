import React from 'react';
import {Forms} from './interfaces';
import {Group} from './Group';
import {Field} from './Field';
import {Input} from './Input';
import {Checkbox} from './Checkbox';
import {Textarea} from './Textarea';
import {Select} from './Select';
import {useForm} from '../../hooks/useForm';

export const Form: React.FC<Forms.IForm> = ({fields, buttons, groups = [], ...props}) => {
  const {onChange, onSubmit, values, errors} = useForm(
    fields.map(field => field.name),
    props.onChange,
    props.onSubmit,
    props.validators
  );

  const fieldRender = (item: Forms.FormItem) => {
    const props = {
      ...item,
      onChange
    };
    let elem: React.ReactNode;
    switch (item.type) {
        case 'string':
        case 'number':
        case 'password':
        case 'email':
          elem = <Input key={item.name} {...(props as Forms.IInput)}/>;
          break;
        case 'textarea':
          elem = <Textarea key={item.name} {...(props as Forms.IInput)}/>;
          break;
        case 'checkbox':
          elem = <Checkbox key={item.name} {...(props as Forms.ISwitch)}/>;
          break;
      case 'select':
          elem = <Select key={item.name} {...(props as Forms.ISelect)}/>;
          break;
    }
    return (
      <Field
        key={item.name}
        type={item.type}
        title={item.title}
        errors={errors[item.name]}
      >{elem}</Field>
    );
  };
  return (
    <form className="rcy-form" onSubmit={onSubmit}>
      {groups.length ?
        groups.map(group => (
          <Group {...group} key={group.name}>{fields.filter(field => field.group === group.name).map(fieldRender)}</Group>
        )) :
        fields.map(fieldRender)
      }
      {buttons}
    </form>
  );
}
