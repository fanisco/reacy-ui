export default interface IInputProps {
    name: string;
    value: any;
    onChange: (value: any) => void;
    disabled?: boolean;
}
