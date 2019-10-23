import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { Images } from '../images';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { ListItem } from './Types/Item';

interface IProps {
    onChange?: (value: number) => void;
    style?: Styles;
    size?: Sizes;
    value?: any;
    items: any[]
}

type State = {
    open: boolean;
    value?: number;
}

type Action =
 | {type: 'open', value: any}
 | {type: 'value', value: any}

function init({ open = false, ...init }): State {
    return {
        open: open,
        value: init.value
    }
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'open':
            return {...state, open: action.value};
        case 'value':
            return {...state, value: action.value};
    }
}

/**
 * Component for displaying select dropdown.
 */
export const Select: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, ...props}) => {
    const [state, dispatch] = useReducer(reducer, {open: false, value: props.value}, init);
    const onButtonClick = () => {
        dispatch({
            type: 'open',
            value: !state.open
        });
    };
    const onDropdownClick = (item: ListItem) => {
        dispatch({
            type: 'open',
            value: false
        });
        dispatch({
            type: 'value',
            value: item.id
        });
    };

    const arrowImage = Images.arrowDown;
    const colors = Colors[style];
    const sizes = Dims[size];
    const Select = styled.div`
        position: relative;
        width: ${sizes.elementWidth}px;
        height: ${sizes.elementHeight}px;
    `;
    const Arrow = styled.div`
        position: absolute;
        top: 50%;
        right: ${sizes.spacing}px;
        width: ${arrowImage.width}px;
        height: ${arrowImage.height}px;
        margin-top: -${arrowImage.height / 2}px;
        background: url("${arrowImage.src}") center no-repeat;
        transform: rotate(${state.open ? '180deg' : '0deg'});
    `;

    // const [isOpen, setIsOpen] = useState(false);
    // const [value, setValue] = useState(props.value);
    //

    useEffect(() => {
        if (state.value && state.value !== props.value) {
            props.onChange && props.onChange(state.value);
        }
    });

    return (
        <Select>
            <Button
                style={style}
                size={size}
                fullWidth={true}
                textAlign="left"
                onClick={onButtonClick}
            >
                {getCaption(props.items, state.value)}<Arrow/>
            </Button>
            <Dropdown
                style={style}
                size={size}
                items={props.items}
                open={state.open}
                onClick={onDropdownClick}
            />
        </Select>
    );
};

function getCaption(items: ListItem[], value?: number): string {
    for (const item of items) {
        if (item.id === value) {
            return item.name;
        }
    }
    return '';
}
