import React from 'react';
import styled from 'styled-components';
import { Sizes } from '../enums';
import { Dims, Fonts } from '../constants';
import IComponentProps from '../interface/IComponentProps';

export const H3: React.FC<IComponentProps> = ({ size = Sizes.md, children }) => {
    const dims = Dims[size];
    const H = styled.div`
        margin-bottom: ${dims.spacing}px;
        font: ${dims.fontSize}px/${Fonts.lh} "${Fonts.ff}";
        font-weight: 700;
        color: #1f3240;
    `;
    return <H>{children}</H>;
};
