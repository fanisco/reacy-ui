export type Item = {
    id: number | string;
    name: string;
}
export type ListItem = Item & {

}
export type FormItem = Item & {
    type: 'number' | 'string' | 'text' | 'boolean' | 'select'
    value: any;
    values?: any[];
    placeholder?: string;
}
