import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {
    size?: Sizes
}

export const Container: React.FC<IProps> = ({ size = Sizes.md, children }) => {
    const sizes = Dims[size];
    return (
        <ContainerElement sizes={sizes}>{children}</ContainerElement>
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const ContainerElement = styled.div<StyledProps>`
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.sizes.containerWidth}px;
`;
