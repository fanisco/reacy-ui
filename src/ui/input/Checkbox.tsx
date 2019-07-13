import React, { ReactNode } from 'react';
import Input, { IInputProps } from './Input';

export interface ICheckboxProps extends IInputProps {
  checked?: boolean
}

/**
 * Component for displaying checkbox.
 */
export default class Checkbox extends Input<ICheckboxProps> {

  /**
   * @return {ReactNode}
   */
  public render(): ReactNode {
    return <input
      type="checkbox"
      name={this.props.name}
      value={this.props.value}
      checked={this.props.checked}
      onChange={this.onChange}
    />
  }

  public static defaultProps = {
    type: 'text',
    checked: false
  }
}
