import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {

}

export const Row: React.FC<IProps> = (props) => {
    const sizes = Dims[Sizes.md];
    return (
        <RowElement sizes={sizes}>{props.children}</RowElement>
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const RowElement = styled.div<StyledProps>`
    display: flex;
`;
