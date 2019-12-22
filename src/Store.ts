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
    { id: Styles.warning, name: 'Warning' }
];

const icons: Item[] = [
    { id: 'frog' },
    { id: 'wind' },
    { id: 'tree' },
    { id: 'home' },
    { id: 'bath' }
];

export default class Store {
    @observable buttonProps: FormItem[] = [
        { id: 'style', name: 'Style', type: 'select', value: Styles.default, values: buttonStyles },
        { id: 'caption', name: 'Caption', type: 'string', value: 'Hello!' },
        { id: 'bold', name: 'Bold', type: 'switch', value: false },
        { id: 'italic', name: 'Italic', type: 'switch', value: false },
        { id: 'rounded', name: 'Rounded', type: 'switch', value: false },
        { id: 'disabled', name: 'Disabled', type: 'switch', value: false },
        { id: 'mode', name: 'Mode', type: 'toggle', value: 'default', values: buttonModes },
        { id: 'size', name: 'Size', type: 'toggle', value: Sizes.md, values: buttonSizes },
        { id: 'icon', name: 'Icon', type: 'toggle', values: icons },
    ];
    @observable menu: Item[] = [
        { id: 0, name: 'Dashboard' },
        { id: 1, name: 'Users' },
        { id: 2, name: 'Devices' },
        { id: 3, name: 'Settings' },
    ];
    @computed get allItems(): FormItem[] {
        return this.buttonProps;
    }
    @computed get allProps(): any {
        const props: any = {};
        for (const prop of this.buttonProps) {
            if (prop.id !== 'disabled') {
                props[prop.id] = prop.value;
            } else {
                props.state = prop.value === true ? false : null;
            }
        }
        return props;
    }
    @computed get allMenu(): Item[] {
        return this.menu;
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
