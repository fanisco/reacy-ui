import React, { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react";
import colors from '../colors';
import Input, { IInputProps } from './Input';

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
@observer
export default class Textarea extends Input<IInputProps> {

  /**
   * @return {ReactNode}
   */
  public render(): ReactNode {
    return (
      <TextArea
        name={this.props.name}
        value={this.props.value}
        onChange={this.onChange}
        placeholder={this.props.caption}
      />
    )
  }
}

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 10px 10px;
  border: 1px solid ${colors.silver};
  border-radius: 2px;
  resize: none;
  transition: all 0.15s ease-in-out;

  &:hover, &:focus {
    border-color: ${colors.ferrum}
  }
  &:focus {
    box-shadow: 0 5px 15px ${colors.primary}20;
  }
`;
