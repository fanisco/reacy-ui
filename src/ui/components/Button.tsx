import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';

interface IProps {
    onClick?: Function;
    disabled?: boolean;
    style?: Styles;
    size?: Sizes;
    textAlign?: 'left' | 'center' | 'right'
    fullWidth?: boolean;
    bottomOpen?: boolean;
}

export const Button: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'center', ...props }) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Button = styled.button`
        height: ${sizes.elementHeight}px;
        padding: 0 ${sizes.elementPadding}px;
        background: ${colors.baseL1} linear-gradient(to bottom, rgba(255, 255, 255, ${style === Styles.default ? 0.03 : 0.15}), rgba(255, 255, 255, 0));
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
        color: ${colors.text};
        cursor: pointer;
        text-align: ${textAlign};
        font: ${sizes.font}px/1 "${Fonts.ff}";
        font-weight: 600;
        
        &:hover {
            background: ${colors.baseL2};
        }
        &:focus {
            outline: 0 none;
        }
        &:active:focus {
            background-color: ${colors.baseL3};
        }
        &:disabled {
            color: ${colors.baseL3};
            cursor: default;
            
            &, &:hover {
                background: ${colors.baseL1};
            }
        }
        
        ${props.bottomOpen && `
            border-bottom: 0 none;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `}
        ${props.fullWidth && `
            width: 100%;
        `}
    `;

    return (
        <Button onClick={() => props.onClick && props.onClick()} disabled={props.disabled}>{props.children}</Button>
    );
};
