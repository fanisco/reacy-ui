import React from 'react';
import styled from 'styled-components';
import IStyledProps from '../interface/IStyledProps';
import IInputProps from '../interface/IInputProps';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';
import { stylize } from './Input';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const Textarea: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'left', ...props }) => {
    const colors = Colors[style];
    const dims = Dims[size];
    return (
        <TextareaElement
            dims={dims}
            colors={colors}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value);
            }}
        />
    );
};

const TextareaElement = styled.textarea<IStyledProps>`
    ${stylize};
    display: block;
    height: ${props => props.dims.elementHeight * 3}px;
    resize: none;
`;
