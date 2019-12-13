import { Component as ReactComponent } from 'react';
import { Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import IComponentProps from '../interface/IComponentProps';
import { getColors } from '../helpers';

export default class Component<P extends IComponentProps, S = {}> extends ReactComponent<P, S> {
    id: number;
    constructor(props: P) {
        super(props);
        this.id = Math.ceil(Math.random() * 10000);
    }
    protected getStyles(): { colors: any, dims: any, style: any, size: any } {
        const { style, size } = { style: Styles.default, size: Sizes.md, ...this.props };
        const colors = getColors(style);
        const dims = Dims[size];
        return {
            colors, dims,
            style, size
        };
    }
}
