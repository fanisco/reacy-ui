import {ReactElement} from 'react';
import {Core} from '../../common/interfaces';
import {HashMap} from '../../common/types';

export namespace Forms {
  export interface IForm extends Core.IComponent {
    data: HashMap<any>;
    fields: Array<FormItem>;
    wrap?: boolean;
    groups?: Array<IGroup>;
    buttons?: Array<ReactElement>;
    onSubmit?: () => void;
    onChange: (name: any, value: any) => void;
  }
  export interface IGroup extends Core.IComponent {
    name: string;
    title?: string;
  }
  export interface IBase extends Core.IComponent {
    name: string;
    type: string;
    value: any;
    title?: string;
    group?: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
  }
  export interface IInput extends IBase {
    placeholder?: string;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    onKeyPress?: (e: any) => void;
  }
  export interface ISwitch extends IBase {
    
  }
  export interface ISelect extends IBase {
    items: Array<Core.IListItem>;
  }
  export type FormItem = Partial<IInput | ISwitch | ISelect>;
}
