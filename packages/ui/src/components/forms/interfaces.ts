import {ReactElement} from 'react';
import {Core} from '../../common/interfaces';
import {HashMap, Validator, ValidationResult} from '../../common/types';

export namespace Forms {
  export type FormItem = Partial<IInput | ICheckbox | ISelect>;
  export interface IForm extends Core.IComponent {
    fields: Array<FormItem>;
    groups?: Array<IGroup>;
    buttons?: Array<ReactElement>;
    validators?: HashMap<Validator[]>;
    onSubmit?: () => void;
    onChange?: (data: HashMap<any>) => void;
  }
  export interface IGroup extends Core.IComponent {
    name: string;
    title?: string;
  }
  export interface IBase extends Core.IComponent, Core.IStyled {
    name: string;
    type: string;
    value: any;
    title?: string;
    group?: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
  }
  export interface IField extends Core.IComponent {
    item: FormItem;
    errors?: ValidationResult[];
  }
  export interface IStyledInput extends Core.IStyled {
    focused?: boolean;
  }
  export interface IInput extends IBase {
    placeholder?: string;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    onKeyPress?: (e: any) => void;
  }
  export interface IStyledInput extends Core.IStyled {
    focused?: boolean;
  }
  export interface ICheckbox extends IBase {
    
  }
  export interface ISelect extends IBase {
    items: Array<Core.IListItem>;
  }
}
