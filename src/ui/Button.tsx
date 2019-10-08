import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from './constants';
import { Styles, Sizes } from './enums';

interface IProps {
    onClick?: Function;
    disabled?: boolean;
    style?: Styles;
    size?: Sizes;
}

export const Button: React.FC<IProps> = ({ style = Styles.default, size = Sizes.md, onClick, disabled, children }) => {
    const colors = Colors[style];
    const sizes = Dims[size];
    const Button = styled.button`
        height: ${sizes.elementHeight};
        padding: 0 ${sizes.elementPadding};
        background: ${colors.baseL1};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius};
        color: ${colors.text};
        cursor: pointer;
        font: ${sizes.font}/1 "${Fonts.ff}";
        font-weight: 600;
        
        &:hover {
            background: ${colors.baseL2};
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
        }
        &:disabled:hover {
            background: ${colors.baseL1}
        }
    `;
    return (
        <Button onClick={() => onClick && onClick()} disabled={disabled}>{children}</Button>
    );
};
