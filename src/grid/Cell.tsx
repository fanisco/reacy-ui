import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {

}

export const Cell: React.FC<IProps> = (props) => {
    const sizes = Dims[Sizes.md];
    return (
        <CellElement sizes={sizes}>{props.children}</CellElement>
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const CellElement = styled.div<StyledProps>`
    
`;
