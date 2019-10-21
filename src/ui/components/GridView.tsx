import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {

}

export const GridView: React.FC<IProps> = (props) => {
    const sizes = Dims[Sizes.md];
    return (
        <GridViewElement sizes={sizes}>
            {React.Children.map(props.children, (child) => {
                return <ItemElement sizes={sizes}>{child}</ItemElement>
            })}
        </GridViewElement>
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const GridViewElement = styled.div<StyledProps>`
    display: flex;
    margin: -${props => props.sizes.spacing}px;
`;
const ItemElement = styled.div<StyledProps>`
    padding: ${props => props.sizes.spacing}px;
`;
