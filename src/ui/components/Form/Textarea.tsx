import React from 'react';
import styled from 'styled-components';
import IInputProps from './IInputProps';
import { Colors, Fonts, Dims } from '../../constants';
import { Styles, Sizes } from '../../enums';

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

const TextareaElement = styled.textarea<StyledProps>`
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: ${props => props.sizes.elementHeight * 3}px;
    padding: ${props => props.sizes.spacings}px ${props => props.sizes.spacings}px;
    background: ${props => props.colors.baseL2};
    border: 1px solid ${props => props.colors.baseL0};
    border-radius: ${props => props.sizes.borderRadius}px;
    color: ${props => props.colors.text};
    text-align: ${props => props.sizes.textAlign};
    font: ${props => props.sizes.fontSize}px/${props => props.sizes.lineHeight} "${Fonts.ff}";
    font-weight: 400;
    resize: none;
    transition: all 0.15s ease-in-out;
    
    &:hover {
        background: ${props => props.colors.baseL3};
    }
    &:focus {
        background: ${props => props.colors.baseL3};
        outline: 0 none;
    }
`;
