import React from 'react';
import styled from 'styled-components';
import { colors, fonts, sizes } from './constants';

interface IProps {
    onClick?: Function
}

export const Panel: React.FC<IProps> = (props) => {
    const Panel = styled.div`
        padding: ${sizes.panelPadding};
        border: 1px solid ${colors.baseL1};
        border-radius: ${sizes.borderRadius};
    `;
    return (
        <Panel>{props.children}</Panel>
    );
};
