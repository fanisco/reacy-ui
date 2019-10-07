import React from 'react';
import styled from 'styled-components';
import { colors, fonts, sizes } from './constants';

interface IProps {
    onClick?: Function
}

export const Button: React.FC<IProps> = (props: IProps) => {
    const Button = styled.button`
        height: ${sizes.buttonHeight};
        padding: 0 ${sizes.buttonPadding};
        font: ${fonts.fs}/1 "${fonts.ff}";
        background: ${colors.baseL1};
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius};
        color: #fff;
        cursor: pointer;
        
        &:hover { background: ${colors.baseL2}; }
        &:focus { outline: 0 none; }
        &:active:focus { background: ${colors.baseL3}; }
    `;
    return (
        <Button onClick={() => props.onClick && props.onClick()}>Button</Button>
    );
};
