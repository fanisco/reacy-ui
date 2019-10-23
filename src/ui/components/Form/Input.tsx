import React from 'react';
import styled from 'styled-components';
import IInputProps from './IInputProps';
import { Colors, Fonts, Dims } from '../../constants';
import { Styles, Sizes } from '../../enums';

interface IProps extends IInputProps {
    onChange: (value: string) => void;
    style?: Styles;
    size?: Sizes;
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
            onChange={(e) => {
                props.onChange && props.onChange(e.target.value);
            }}
        />
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const InputElement = styled.input<StyledProps>`
    box-sizing: border-box;
    height: ${props => props.sizes.elementHeight}px;
    padding: ${props => props.sizes.spacings}px ${props => props.sizes.spacings}px;
    background: ${props => props.colors.baseL2};
    border: 1px solid ${props => props.colors.baseL0};
    border-radius: ${props => props.sizes.borderRadius}px;
    color: ${props => props.colors.text};
    text-align: ${props => props.sizes.textAlign};
    font: ${props => props.sizes.fontSize}px/${props => props.sizes.lineHeight} "${Fonts.ff}";
    font-weight: 400;
    
    &:hover {
        background: ${props => props.colors.baseL3};
    }
    &:focus {
        border-color: ${Colors[Styles.secondary].baseL0};
        background: ${props => props.colors.baseL3};
        outline: 0 none;
    }
`;
