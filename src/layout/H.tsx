import React from 'react';
import styled from 'styled-components';
import { Dims, Fonts } from '../constants';
import IComponentProps from '../interface/IComponentProps';

export const H3: React.FC<IComponentProps> = ({ children }) => {
    const dims = Dims.md;
    const H = styled.div`
        margin-bottom: ${dims.spacing}px;
        font: ${dims.heading}px/${dims.lineHeight} "${Fonts.ff}";
        font-weight: 700;
        color: #1f3240;
    `;
    return <H>{children}</H>;
};
