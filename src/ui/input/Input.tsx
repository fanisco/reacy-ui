import React, { Component, ChangeEvent, ReactNode } from 'react';
import { observer } from 'mobx-react';

export interface IInputProps {
  name: string
  type?: string
  value?: any
  caption?: string
  onChange?: (name: string, value: any) => void
}

/**
 * Component for displaying simple input.
 */
@observer
export default class Input<T extends IInputProps> extends Component<T> {

  /**
   */
  constructor(props: T) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  /**
   */
  public onChange(ev: ChangeEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange(this.props.name, ev.target.checked)
  }

  /**
   * @return {ReactNode}
   */
  public render(): ReactNode {
    return <input
      type={this.props.type}
      name={this.props.name}
      value={this.props.value}
      onChange={this.onChange}
    />
  }

  public static defaultProps = {
    type: 'text'
  }
}
