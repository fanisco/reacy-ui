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
   * Handle input's change.
   */
  constructor(props: T) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  /**
   * Handle input's change.
   */
  public onChange(ev: ChangeEvent<any>) {
    const isBoolean = this.props.type === 'checkbox';
    this.props.onChange && this.props.onChange(this.props.name, isBoolean ? ev.target.checked : ev.target.value)
  }

  /**
   * @return {ReactNode}
   */
  public render(): ReactNode {
    return <div>{typeof this.props.value}<input
      type={this.props.type}
      name={this.props.name}
      value={this.props.value}
      onChange={this.onChange}
    /></div>
  }

  public static defaultProps = {
    type: 'text'
  }
}
