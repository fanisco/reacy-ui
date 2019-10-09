import React from 'react';
import styled from 'styled-components';
import { Dims } from '../constants';
import { Sizes } from '../enums';

interface IProps {

}

export const GridView: React.FC<IProps> = (props) => {
    const sizes = Dims[Sizes.md];
    const GridView = styled.div`
        display: flex;
        margin: -${sizes.spacing}px;
    `;
    const Item = styled.div`
        padding: ${sizes.spacing}px;
    `;
    return (
        <GridView>
            {React.Children.map(props.children, (child) => {
                return <Item>{child}</Item>
            })}
        </GridView>
    );
};
