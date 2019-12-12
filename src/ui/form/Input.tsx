import React from 'react';
import styled from 'styled-components';
import IStyledProps from '../interface/IStyledProps';
import IInputProps from '../interface/IInputProps';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';
import { getColors } from '../helpers';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const Input: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'left', ...props }) => {
    const colors = getColors(style, Colors[style]);
    const dims = Dims[size];
    console.log(colors);
    return (
        <InputElement
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

export const stylize = (props: IStyledProps) => `
    box-sizing: border-box;
    width: 100%;
    padding: ${props.dims.spacings}px ${props.dims.spacing}px;
    background: ${props.colors.baseL3};
    color: ${props.colors.textColor};
    border: 1px solid ${props.colors.borderColor};
    border-radius: ${props.dims.borderRadius}px;
    text-align: ${props.dims.textAlign};
    font: ${props.dims.fontSize}px/${props.dims.lineHeight} "${Fonts.ff}";
    font-weight: 400;
    transition: all 0.15s ease-in-out;
    
    &:hover {
        background: #fff;
        transition: all 0.15s ease-in-out 0.15s;
    }
    &:focus {
        background: #fff;
        outline: 0 none;
        border-color: ${Colors[Styles.secondary].baseL3};        
        box-shadow: 0 5px 15px ${Colors[Styles.secondary].baseL3}10;
    }
`;

const InputElement = styled.input<IStyledProps>`
    ${stylize};
    height: ${props => props.dims.elementHeight}px;
`;
