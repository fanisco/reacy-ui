import React from 'react';
import styled from 'styled-components';
import { sizes } from './constants';

interface IProps {

}

export const GridView: React.FC<IProps> = (props) => {
    const GridView = styled.div`
        display: flex;
        margin: -${sizes.spacing};
    `;
    const Item = styled.div`
        padding: ${sizes.spacing};
    `;
    return (
        <GridView>
            {React.Children.map(props.children, (child) => {
                return <Item>{child}</Item>
            })}
        </GridView>
    );
};
