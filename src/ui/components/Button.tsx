import React from 'react';
import styled from 'styled-components';
import { Colors, Dims, Fonts } from '../constants';
import { Sizes, Styles } from '../enums';

interface IProps {
    onClick?: Function;
    disabled?: boolean;
    style?: Styles;
    size?: Sizes;
    mode?: 'default' | 'link' | 'outline';
    textAlign?: 'left' | 'center' | 'right';
    fullWidth?: boolean;
}

export const Button: React.FC<IProps> =
    ({ style = Styles.default, size = Sizes.md, mode = 'default', textAlign = 'center', ...props }) => {
    const colors = getColors(style, Colors[style]);
    const dims = Dims[size];
    return (
        <ButtonElement
            dims={dims}
            colors={colors}
            mode={mode}
            textAlign={textAlign}
            fullWidth={props.fullWidth}
            onClick={() => props.onClick && props.onClick()}
            disabled={props.disabled}
        >{props.children}</ButtonElement>
    );
};

interface StyledProps {
    dims?: any;
    colors?: any;
    mode?: string;
    textAlign?: string;
    fullWidth?: boolean;
}

const ButtonElement = styled.button<StyledProps>`
    box-sizing: border-box;
    height: ${props => props.dims.elementHeight}px;
    padding: ${props => props.dims.spacings}px ${props => props.dims.spacing}px;
    background: ${props => props.colors.idleColor} linear-gradient(to bottom, rgba(255, 255, 255, ${props => props.colors.gradient}), rgba(255, 255, 255, 0));
    border: 1px solid ${props => props.colors.borderColor};
    border-radius: ${props => props.dims.borderRadius}px;
    color: ${props => props.colors.textColor};
    text-align: ${props => props.textAlign};
    font: ${props => props.dims.fontSize}px/${props => props.dims.lineHeight} "${Fonts.ff}";
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
        border-color: ${props => props.colors.borderHoverColor};
        background-color: ${props => props.colors.hoverColor};
    }
    &:focus {
        outline: 0 none;
    }
    &:active:focus {
        background: ${props => props.colors.activeColor};
        border-color: ${props => props.colors.borderColor};
        box-shadow: inset 0 0 10px ${props => props.colors.shadowColor}50;
    }
    
    ${props => props.fullWidth && `
        width: 100%;
    `}
    
    ${props => props.mode === 'link' ? `
        height: auto;
        padding: 0;
        background: none;
        border: 0 none;
        font-weight: 400;
        color: ${props.colors.idleColor};

        &:hover {
            background: none;
            color: ${props.colors.hoverColor};
            text-decoration: underline;
        }
        &:active:focus {
            background: none;
            box-shadow: none;
            color: ${props.colors.activeColor};
        }
    ` : props.mode === 'outline' && `
        background: none;
        border-radius: 50px;
        color: ${props.colors.idleColor};

        &:hover {
            background: ${props.colors.hoverColor};
            border-color: ${props.colors.borderHoverColor};
            color: ${props.colors.textColor};
        }
        &:active:focus {
            background: ${props.colors.activeColor};
            border-color: ${props.colors.borderColor};
            color: ${props.colors.textColor};
            }
    `}
    
    &:disabled, &:disabled:hover, &:disabled:active:focus {
        background: none;
        border-color: ${Colors[Styles.default].baseL0};
        color: ${Colors[Styles.default].baseL0};
        cursor: default;
    }
`;

const getColors = (style: string, colors: any): Scheme => {
    if (style !== 'default') {
        return {
            textColor: colors.text,
            idleColor: colors.baseL2,
            hoverColor: colors.baseL3,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL2,
            shadowColor: colors.baseL0,
            gradient: 0.15
        };
    } else {
        return {
            textColor: colors.text,
            idleColor: colors.baseL2,
            hoverColor: colors.baseL3,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL0,
            shadowColor: colors.baseL0,
            gradient: 0.75
        };
    }
};

type Scheme = {
    textColor: string;
    idleColor: string;
    hoverColor: string;
    activeColor: string;
    borderColor: string;
    borderHoverColor: string;
    shadowColor: string;
    gradient: number;
}
