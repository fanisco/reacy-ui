import { Component, ChangeEvent } from 'react';

export interface IInputProps {
  name: string
  value: any
  caption: string
  onChange?: (name: string, value: any) => void
}

/**
 * Abstract class for satisfying needs on common input events and props.
 */
export default abstract class Input extends Component<IInputProps> {

  /**
   */
  protected constructor(props: IInputProps) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  /**
   */
  onChange(ev: ChangeEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange(this.props.name, ev.target.checked)
  }
}
