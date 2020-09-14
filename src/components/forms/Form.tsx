import React from 'react';
import {Forms} from './interfaces';
import {Group} from './Group';
import {Field} from './Field';
import {useForm} from '../../hooks/useForm';

export const Form: React.FC<Forms.IForm> = ({fields, buttons, groups = [], ...props}) => {
  const {onChange, onSubmit, values, errors} = useForm(
    fields.map(field => field.name),
    props.onChange,
    props.onSubmit,
    props.validators
  );
  return (
    <form className="rcy-form" onSubmit={onSubmit}>
      {groups.length ?
        groups.map(group => (
          <Group {...group} key={group.name}>
            {fields.filter(field => field.group === group.name).map(item => (
              <Field
                key={item.name}
                item={{...item, onChange}}
                errors={errors[item.name]}
              />
            ))}
          </Group>
        )) :
        fields.map(item => (
          <Field
            key={item.name}
            item={{...item, onChange}}
            errors={errors[item.name]}
          />
        ))
      }
      {buttons}
    </form>
  );
}
