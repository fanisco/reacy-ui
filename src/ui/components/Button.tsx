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
    const sizes = Dims[size];
    let Button = styled.button`
        box-sizing: border-box;
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        background: ${colors.idleColor} ${gradient(style === 'default')};
        border: 1px solid ${colors.borderColor};
        border-radius: ${sizes.borderRadius}px;
        color: ${colors.textColor};
        text-align: ${textAlign};
        font: ${sizes.fontSize}px/${sizes.lineHeight} "${Fonts.ff}";
        font-weight: 500;
        cursor: pointer;
        
        &:hover {
            border-color: ${colors.borderHoverColor};
            background: ${colors.hoverColor} ${gradient()};
        }
        &:focus {
            outline: 0 none;
        }
        &:active:focus {
            background: ${colors.activeColor};
            border-color: ${colors.borderColor};
            box-shadow: inset 0 0 10px ${colors.shadowColor};
        }
    `;

    if (mode === 'link') {
        Button = styled(Button)`
            height: auto;
            padding: 0;
            background: none;
            border: 0 none;
            font-weight: 400;
            color: ${colors.idleColor};

            &:hover {
                background: none;
                color: ${colors.hoverColor};
                text-decoration: underline;
            }
            &:active:focus {
                background: none;
                box-shadow: none;
                color: ${colors.activeColor};
            }
        `;
    }

    if (mode === 'outline') {
        Button = styled(Button)`
            background: none;
            border-radius: 50px;
            color: ${colors.idleColor};

            &:hover {
                background: ${colors.hoverColor};
                border-color: ${colors.borderHoverColor};
                color: ${colors.textColor};
            }
            &:active:focus {
                background: ${colors.activeColor};
                border-color: ${colors.borderColor};
                color: ${colors.textColor};
            }
        `;
    }

    if (props.disabled) {
        Button = styled(Button)`
            &:disabled, &:disabled:hover, &:disabled:active:focus {
                background: none;
                border-color: ${Colors[Styles.default].baseL0};
                color: ${Colors[Styles.default].baseL0};
                cursor: default;
            }
        `;
    }

    if (props.fullWidth) {
        Button = styled(Button)`
            width: 100%;
        `;
    }

    return (
        <Button onClick={() => props.onClick && props.onClick()} disabled={props.disabled}>{props.children}</Button>
    );
};

const gradient = (lighter: boolean = false) => {
    return `linear-gradient(to bottom, rgba(255, 255, 255, ${lighter ? 0.45 : 0.15}), rgba(255, 255, 255, 0))`;
};

const getColors = (style: string, colors: any): Scheme => {
    if (style !== 'default') {
        return {
            textColor: colors.text,
            idleColor: colors.baseL2,
            hoverColor: colors.baseL3,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL2,
            shadowColor: colors.baseL0
        };
    } else {
        return {
            textColor: colors.text,
            idleColor: colors.baseL2,
            hoverColor: colors.baseL3,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL0,
            shadowColor: colors.baseL0
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
}
