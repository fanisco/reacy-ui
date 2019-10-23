import React from 'react';
import styled from 'styled-components';
import IInputProps from '../IInputProps';
import { Colors, Fonts, Dims } from '../../constants';
import { Styles, Sizes } from '../../enums';
import { stylize } from './Input';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    value: any;
    style?: Styles;
    size?: Sizes;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const Textarea: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'left', ...props }) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    return (
        <TextareaElement
            sizes={sizes}
            colors={colors}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value);
            }}
        />
    );
};

interface IStyledProps {
    sizes?: any
    colors?: any
}

const TextareaElement = styled.textarea<IStyledProps>`
    ${stylize};
    display: block;
    width: 100%;
    height: ${props => props.sizes.elementHeight * 3}px;
    resize: none;
`;
