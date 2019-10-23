export type Item = {
    id: number | string;
    name: string;
}
export type ListItem = Item & {

}
export type FormItem = Item & {
    type: string;
    value: any;
    values?: any[];
}
