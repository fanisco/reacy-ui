import IComponentProps from './IComponentProps';
import { FormItem } from '../types/Item';

export interface IItemProps {
    id: FormItem['id'];
    type: FormItem['type'];
    name?: FormItem['name'];
    value?: FormItem['value'];
    placeholder?: FormItem['placeholder'];
}

export default interface IInputProps extends IComponentProps, IItemProps {
    onChange: (value: any) => void;
    disabled?: boolean;
}

export interface IFieldProps extends IComponentProps, IItemProps {

}
