import { observable, computed } from 'mobx';
import { Item, FormItem } from './ui/types/Item';
import { Sizes, Styles } from './ui';

const buttonModes: Item[] = [
    { id: 'default', name: 'Default' },
    { id: 'link', name: 'Link' },
    { id: 'outline', name: 'Outline' }
];

const buttonSizes: Item[] = [
    { id: Sizes.xs, name: 'XS' },
    { id: Sizes.sm, name: 'SM' },
    { id: Sizes.md, name: 'MD' },
    { id: Sizes.lg, name: 'LG' },
    { id: Sizes.xl, name: 'XL' }
];

const buttonStyles: Item[] = [
    { id: Styles.default, name: 'Default' },
    { id: Styles.primary, name: 'Primary' },
    { id: Styles.secondary, name: 'Secondary' },
    { id: Styles.success, name: 'Success' },
    { id: Styles.warning, name: 'Warning' },
    { id: Styles.danger, name: 'Danger' }
];

const icons: Item[] = [
    { id: 'frog' }
];

export default class Store {
    @observable buttonProps: FormItem[] = [
        { id: 'mode', name: 'Mode', type: 'select', value: 'default', values: buttonModes },
        { id: 'size', name: 'Size', type: 'select', value: Sizes.md, values: buttonSizes },
        { id: 'style', name: 'Style', type: 'select', value: Styles.default, values: buttonStyles },
        { id: 'icon', name: 'Icon', type: 'select', values: icons },
    ];
    @computed get allItems(): FormItem[] {
        return this.buttonProps;
    }
    @computed get allProps(): any {
        const props: any = {};
        for (const prop of this.buttonProps) {
            props[prop.id] = prop.value;
        }
        return props;
    }
    getItemById(id: string) {
        for (const element of this.buttonProps) {
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
