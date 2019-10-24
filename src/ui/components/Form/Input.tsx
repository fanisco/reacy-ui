import React from 'react';
import styled from 'styled-components';
import IInputProps from '../IInputProps';
import { Colors, Fonts, Dims } from '../../constants';
import { Styles, Sizes } from '../../enums';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
}

export const Input: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'left', ...props }) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    return (
        <InputElement
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

export const stylize = (props: IStyledProps) => `
    box-sizing: border-box;
    padding: ${props.sizes.spacings}px ${props.sizes.spacings}px;
    background: ${props.colors.baseL3};
    color: ${props.colors.text};
    border: 1px solid ${props.colors.baseL0};
    border-radius: ${props.sizes.borderRadius}px;
    text-align: ${props.sizes.textAlign};
    font: ${props.sizes.fontSize}px/${props.sizes.lineHeight} "${Fonts.ff}";
    font-weight: 400;
    transition: all 0.15s ease-in-out;
    
    &:hover {
        background: #fff;
        border-color: ${Colors[Styles.secondary].baseL0};
        transition: all 0.15s ease-in-out 0.15s;
    }
    &:focus {
        background: #fff;
        outline: 0 none;
        border-color: ${Colors[Styles.secondary].baseL0};        
        box-shadow: 0 5px 15px ${Colors[Styles.default].baseL0}20;
    }
`;

const InputElement = styled.input<IStyledProps>`
    ${stylize};
    height: ${props => props.sizes.elementHeight}px;
`;
