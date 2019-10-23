import { FormItem } from '../Types/Item';

export default interface IInputProps {
    id: FormItem['id'];
    name: FormItem['name'];
    value: FormItem['value'];
    onChange: (value: any) => void;
    disabled?: boolean;
}
