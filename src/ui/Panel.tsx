import React from 'react';
import styled from 'styled-components';
import { colors, fonts, sizes } from './constants';

interface IProps {
    caption?: string;
}

export const Panel: React.FC<IProps> = (props) => {
    const Panel = styled.div`
        padding: ${sizes.panelPadding};
        border: 1px solid ${colors.default.baseL1};
        border-radius: ${sizes.borderRadius};
        color: ${colors.default.text};
        font: ${fonts.fs}/${fonts.lh} '${fonts.ff}';
    `;
    const Caption = styled.div`
        margin-bottom: ${sizes.ySpacing};
    `;
    return (
        <Panel>{props.caption ? <Caption>{props.caption}</Caption> : null}{props.children}</Panel>
    );
};
