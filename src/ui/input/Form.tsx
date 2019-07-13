import React, { Component, ReactNode } from 'react';
import Input, { IInputProps } from './Input';
import Switch from './Switch';
import Textarea from './Textarea';
import styled from 'styled-components';

interface IFormProps {
  fields: Array<any>
  data: any
}

export interface IFieldProps extends IInputProps {

}

/**
 * Component for displaying form.
 */
export default class Form extends Component<IFormProps> {

  constructor(props: IFormProps) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this)
  }

  /**
   * */
  public updateProperty (key: string, value: any) {
    this.props.data[key] = value
  }

  /**
   * */
  render(): ReactNode {
    return (
      <Wrapper>
        {this.renderFields()}
      </Wrapper>
    )
  }

  /**
   * */
  renderFields(): ReactNode[] {
    return this.props.fields.map((field, i) => {
      const props = {...field, key: i, value: this.props.data[field.name]};

      switch (field.type) {
        case 'switch':
          return <Switch {...props} onChange={this.updateProperty}/>;
        case 'textarea':
          return <Textarea {...props} onChange={this.updateProperty}/>;
        case 'text':
        default:
          return <Input {...props} onChange={this.updateProperty}/>
      }
    })
  }
};

const Wrapper = styled.form`
  display: flex;
`;
