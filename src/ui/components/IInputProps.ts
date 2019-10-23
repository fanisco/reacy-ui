import IComponentProps from './IComponentProps';
import { FormItem } from './Types/Item';

export default interface IInputProps extends IComponentProps {
    id: FormItem['id'];
    name: FormItem['name'];
    value: FormItem['value'];
    onChange: (value: any) => void;
    placeholder?: string;
    disabled?: boolean;
}
