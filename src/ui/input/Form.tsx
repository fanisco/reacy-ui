import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Switch from './Switch';
import Input, { IInputProps } from './Input';
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
@observer
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
        case 'text':
        default:
          return <Input {...props}/>
      }
    })
  }
};

const Wrapper = styled.form`
  display: flex;
`;
