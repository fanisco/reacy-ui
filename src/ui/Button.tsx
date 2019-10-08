import React from 'react';
import styled from 'styled-components';
import { colors, fonts, sizes } from './constants';

enum Styles {
    default = 'default'
}

interface IProps {
    onClick?: Function;
    disabled?: boolean;
    style?: string;
}

export const Button: React.FC<IProps> = ({ style = Styles.default, onClick, disabled, children }) => {
    const styleColors = colors[style];
    const Button = styled.button`
        height: ${sizes.buttonHeight};
        padding: 0 ${sizes.buttonPadding};
        background: ${styleColors.baseL1};
        border: 1px solid ${styleColors.baseL3};
        border-radius: ${sizes.borderRadius};
        color: ${styleColors.text};
        cursor: pointer;
        font: ${fonts.fs}/1 "${fonts.ff}";
        font-weight: 600;
        
        &:hover {
            background: ${styleColors.baseL2};
        }
        &:focus {
            outline: 0 none;
        }
        &:active:focus {
            background: ${styleColors.baseL3};
        }
        &:disabled {
            color: ${styleColors.baseL3};
            cursor: default;
        }
        &:disabled:hover {
            background: ${styleColors.baseL1}
        }
    `;
    return (
        <Button onClick={() => onClick && onClick()} disabled={disabled}>{children}</Button>
    );
};
