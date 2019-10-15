import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors, Dims } from '../constants';
import { Sizes, Styles } from '../enums';
import { Images } from '../images';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { ListItem } from './List';

interface IProps {
    onChange?: (value: number) => void;
    style?: Styles;
    size?: Sizes,
    value?: any;
    items: any[]
}

export const Select: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, ...props}) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Select = styled.div`
        position: relative;
        width: ${sizes.elementWidth}px;
        height: ${sizes.elementHeight}px;
    `;

    const arrowImage = Images.arrowDown;

    const Arrow = styled.div`
        position: absolute;
        top: 50%;
        right: ${sizes.spacing}px;
        width: ${arrowImage.width}px;
        height: ${arrowImage.height}px;
        margin-top: -${arrowImage.height / 2}px;
        background: url("${arrowImage.src}") center no-repeat;
    `;

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(props.value);

    const onButtonClick = () => {
        setIsOpen(!isOpen);
    };
    const onDropdownClick = (item: ListItem) => {
        setIsOpen(!isOpen);
        setValue(item.id);
    };

    useEffect(() => {
        if (value !== props.value) {
            props.onChange && props.onChange(value);
        }
    });

    return (
        <Select>

            <Button
                style={style}
                size={size}
                fullWidth={true}
                textAlign="left" onClick={onButtonClick}
            >
                {getCaption(props.items, value)}<Arrow/>
            </Button>
            <Dropdown
                style={style}
                size={size}
                items={props.items}
                isOpen={isOpen}
                onClick={onDropdownClick}
            />
        </Select>
    );
};

function getCaption(items: ListItem[], value: number): string {
    for (const item of items) {
        if (item.id === value) {
            return item.title;
        }
    }
    return '';
}
