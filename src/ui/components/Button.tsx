import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';

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
    const colors = Colors[style];
    const sizes = Dims[size];
    let Button = styled.button`
        box-sizing: border-box;
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        background: ${colors.baseL0} ${gradient(style === 'default')};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
        color: ${colors.text};
        text-align: ${textAlign};
        font: ${sizes.fontSize}px/${sizes.lineHeight} "${Fonts.ff}";
        font-weight: 500;
        cursor: pointer;
        
        &:hover {
            background: ${colors.baseL1} ${gradient()};
        }
        &:focus {
            outline: 0 none;
        }
        &:active:focus {
            background: ${colors.baseL1};
            box-shadow: inset 0 0 10px ${colors.baseL3};
        }
        &:disabled {
            color: ${colors.baseL3};
            cursor: default;
            
            &, &:hover {
                background: ${colors.baseL0};
            }
        }
        
        ${props.fullWidth && `
            width: 100%;
        `}
    `;

    if (mode === 'link') {
        Button = styled(Button)`
            height: auto;
            padding: 0;
            background: none;
            border: 0 none;
            font-weight: 400;
            
            &:hover {
                background: none;
                color: ${colors.baseL1};
                text-decoration: underline;
            }
            &:active:focus {
                background: none;
                box-shadow: none;
                color: ${colors.baseL3};
            }
        `;
    }

    if (mode === 'outline') {
        Button = styled(Button)`
            background: none;
            border-radius: 50px;
            color: ${colors.baseL0};
            
            &:hover {
                border-color: ${colors.baseL1};
                color: ${colors.text};
            }
        `;
    }

    return (
        <Button onClick={() => props.onClick && props.onClick()} disabled={props.disabled}>{props.children}</Button>
    );
};

const gradient = (lighter: boolean = false) => {
    return `linear-gradient(to bottom, rgba(255, 255, 255, ${lighter ? 0.45 : 0.15}), rgba(255, 255, 255, 0))`;
};
