import React from 'react';
import styled from 'styled-components';
import { Dims } from './constants';
import { Sizes } from './enums';

interface IProps {
    size?: Sizes
}

export const Presentation: React.FC<IProps> = ({ size = Sizes.md, children }) => {
    const sizes = Dims[size];
    const Presentation = styled.div`
        
    `;
    return (
        <Presentation>{children}</Presentation>
    );
};
