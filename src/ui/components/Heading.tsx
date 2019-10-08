import React from 'react';
import styled from 'styled-components';
import { Dims, Fonts } from '../constants';
import { Sizes } from '../enums';

interface IProps {
    size?: Sizes
}

export const Heading: React.FC<IProps> = ({ size = Sizes.md, children }) => {
    const sizes = Dims[size];
    const Heading = styled.div`
        margin-bottom: ${sizes.spacing};
        font: ${sizes.font}/${Fonts.lh} "${Fonts.ff}";
        font-weight: 300;
    `;
    return (
        <Heading>{children}</Heading>
    );
};
