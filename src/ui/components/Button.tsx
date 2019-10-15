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
}

export const Button: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, textAlign = 'center', ...props }) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Button = styled.button`
        height: ${sizes.elementHeight}px;
        padding: ${sizes.spacings}px ${sizes.elementPadding}px;
        background: ${colors.baseL1} ${gradient(style === 'default')};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
        color: ${colors.text};
        cursor: pointer;
        text-align: ${textAlign};
        font: ${sizes.fontSize}px/${sizes.lineHeight}px "${Fonts.ff}";
        font-weight: 600;
        
        &:hover {
            background: ${colors.baseL2} ${gradient()};
        }
        &:focus {
            outline: 0 none;
        }
        &:active:focus {
            background: ${colors.baseL3};
        }
        &:disabled {
            color: ${colors.baseL3};
            cursor: default;
            
            &, &:hover {
                background: ${colors.baseL1};
            }
        }
        
        ${props.fullWidth && `
            width: 100%;
        `}
    `;

    return (
        <Button onClick={() => props.onClick && props.onClick()} disabled={props.disabled}>{props.children}</Button>
    );
};

const gradient = (lighter: boolean = false) => {
    return `linear-gradient(to bottom, rgba(255, 255, 255, ${lighter ? 0.75 : 0.25}), rgba(255, 255, 255, 0))`;
};
