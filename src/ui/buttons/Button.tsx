import React from 'react';
import styled from 'styled-components';
import { Colors, Dims, Fonts } from '../constants';
import { Sizes, Styles } from '../enums';
import { getColors } from '../helpers';
import { Icon } from '../icons';

interface IProps {
    onClick?: Function;
    style?: Styles;
    size?: Sizes;
    mode?: 'default' | 'link' | 'outline';
    textAlign?: 'left' | 'center' | 'right';
    rounded?: boolean;
    fullWidth?: boolean;
    state?: boolean | null;
    side?: boolean | null;
    icon?: string;
}

export const Button: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, mode = 'default', textAlign = 'center', ...props }) => {
    const colors = getColors(style);
    const dims = Dims[size];
    return (
        <ButtonElement
            dims={dims}
            colors={colors}
            mode={mode}
            textAlign={textAlign}
            rounded={props.rounded}
            fullWidth={props.fullWidth}
            disabled={props.state === false}
            state={props.state}
            side={props.side}
            onClick={() => props.onClick && props.onClick()}
        >{props.icon ? <ButtonIcon name={props.icon}/> : null}{props.children}</ButtonElement>
    );
};

const ButtonElement = styled.button<IStyledProps>`
    position: relative;
    box-sizing: border-box;
    height: ${props => props.dims.elementHeight}px;
    padding: ${props => props.dims.spacings}px ${props => props.dims.spacing}px;
    background: ${props => props.colors.idleColor} linear-gradient(to bottom, ${props => props.colors.bottomColor}00, ${props => props.colors.bottomColor});
    border: 1px solid ${props => props.colors.borderColor};
    border-radius: ${props => props.rounded ? 50 : props.dims.borderRadius}px;
    color: ${props => props.colors.textColor};
    text-align: ${props => props.textAlign};
    font: ${props => props.dims.fontSize}px/${props => props.dims.lineHeight} "${Fonts.ff}";
    font-weight: 400;
    cursor: pointer;
    
    &:hover {
        border-color: ${props => props.colors.borderHover};
        background-color: ${props => props.colors.hoverColor};
    }
    &:focus {
        outline: 0 none;
    }
    &:active:focus {
        ${props => getActive(props)}
    }
    
    ${props => props.state && getActive(props)}
    
    ${props => props.fullWidth && `
        width: 100%;
    `}
    
    ${props => props.side !== undefined && getBorderSides(props)}
    ${props => props.side !== undefined && props.state && `z-index: 1;`}
    
    ${props => props.mode === 'link' ? `
        height: auto;
        padding: 0;
        background: none;
        border: 0 none;
        font-weight: 400;
        color: ${props.colors.linkColor};

        &:hover {
            background: none;
            color: ${props.colors.linkColor};
            text-decoration: underline;
        }
        &:active:focus {
            background: none;
            box-shadow: none;
            color: ${props.colors.linkColor};
        }
    ` : props.mode === 'outline' && `
        background: none;
        color: ${props.colors.linkColor};
        border: 1px solid ${props.colors.borderColor};

        &:hover {
            background: ${props.colors.hoverColor};
            border-color: ${props.colors.borderHover};
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

const ButtonIcon = styled(Icon)`
    margin-right: 12px;
`;

interface IStyledProps {
    dims?: any;
    colors?: any;
    mode?: string;
    rounded?: boolean;
    textAlign?: string;
    fullWidth?: boolean;
    state?: boolean | null;
    side?: boolean | null;
}

const getActive = (props: IStyledProps) => {
    return `
        background: ${props.colors.activeColor};
        border-color: ${props.colors.borderActive};
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15),
                    inset 0 0 10px ${props.colors.shadowColor}50;
    `;
};

const getBorderSides = (props: IStyledProps) => {
    switch (props.side) {
        case true:
            return `
                margin-right: -1px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            `;
        case false:
            return `
                margin-right: -1px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            `;
        default:
            return `
                margin-right: -1px;
                border-radius: 0;
            `;
    }
};
