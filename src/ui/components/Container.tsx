import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {
    size?: Sizes
}

export const Container: React.FC<IProps> = ({ size = Sizes.md, children }) => {
    const sizes = Dims[size];
    const Container = styled.div`
        margin: 0 auto;
        width: 100%;
        max-width: ${sizes.containerWidth}px;
    `;
    return (
        <Container>{children}</Container>
    );
};
