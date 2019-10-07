import React from 'react';
import styled from 'styled-components';
import constants from './constants';

interface IProps {
    onClick: Function
}

export const Button: React.FC<IProps> = (props: IProps) => {
    const Button = styled.button`
        background: ${constants.baseL0};
        border: 1px solid ${constants.baseL3}
    `;
    return (
        <Button onClick={() => props.onClick()}>Button</Button>
    );
};
