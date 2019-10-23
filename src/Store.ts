import { observable, computed } from 'mobx';
import { FormItem } from './ui/components/Types/Item';

export default class Store {
    @observable items: FormItem[] = [
        { id: 'color', name: 'Color', type: 'string', value: '', placeholder: 'Green...' },
        { id: 'bold', name: 'Bold', type: 'boolean', value: true },
        { id: 'descr', name: 'Description', type: 'text', value: '', placeholder: 'Description...' },
        { id: 'type', name: 'Type', type: 'select', value: 0, values: [{ id: 0, name: 'Simple' }] },
    ];
    @computed get allItems(): FormItem[] {
        return this.items;
    }
    getItemById(id: string) {
        for (const element of this.items) {
            if (element.id === id) {
                return element;
            }
        }
    }
    setItem(id: string, value: any) {
        let elem = this.getItemById(id);
        if (elem) {
            elem.value = value;
        }
    }
}
