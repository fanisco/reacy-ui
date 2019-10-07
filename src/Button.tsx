import React from 'react';
import styled from 'styled-components';

interface IProps {
    onClick: Function
}


export const Button: React.FC<IProps> = (props: IProps) => {
    const Button = styled.button``;
    return (
        <Button onClick={() => props.onClick()}>Button</Button>
    );
};
