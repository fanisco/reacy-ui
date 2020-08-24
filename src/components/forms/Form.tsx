import React from 'react';
import {Forms} from '../../common/interfaces';
import {Group} from './Group';
import {Field} from './Field';
import {Input} from './Input';
import {Checkbox} from './Checkbox';
import {Textarea} from './Textarea';
// import {Toggle} from './Toggle';
// import Select from './Select';

export class Form extends React.Component<Forms.IForm> {
  constructor(p: Forms.IForm) {
    super(p);
    this.fieldRender = this.fieldRender.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();
  }
  
  render() {
    const {groups, fields, data, onChange, wrap = false} = this.props;
    if (groups && groups.length) {
      return (
        <form onSubmit={this.onSubmit}>
          {groups.map(group => (
            <Group {...group}>{fields.filter(field => field.group === group.name).map(this.fieldRender)}</Group>
          ))}
        </form>
      );
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          {fields.map(this.fieldRender)}
        </form>
      );
    }
  }

  fieldRender(item: Forms.IFormItem) {
    const props = {
        ...item,
        mods: item.mods,
        onChange: (value: any) => {
          if (this.props.onChange) {
            this.props.onChange(item.name, value);
          }
        }
    };
    let elem: React.ReactNode;
    switch (item.type) {
        case 'string':
        case 'number':
          elem = <Input key={item.name} value={this.props.data[item.name]} {...props}/>;
          break;
        case 'textarea':
          elem = <Textarea key={item.name} value={this.props.data[item.name]} {...props}/>;
          break;
        case 'checkbox':
          elem = <Checkbox key={item.name} value={this.props.data[item.name]} {...props}/>;
          break;
      // case 'select':
      //     elem = <Select {...properties}/>;
      //     break;
      // case 'toggle':
      //     elem = <Toggle {...properties}/>;
      //     break;
    }
    return this.props.wrap ? <Field key={item.name} {...item}>{elem}</Field> : elem;
  }
}
