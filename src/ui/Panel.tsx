import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from './constants';
import { Styles, Sizes } from './enums';

interface IProps {
    caption?: string;
}

export const Panel: React.FC<IProps> = (props) => {
    const colors = Colors[Styles.default];
    const sizes = Dims[Sizes.md];
    const Panel = styled.div`
        padding: ${sizes.elementPadding};
        border: 1px solid ${colors.baseL1};
        border-radius: ${sizes.borderRadius};
        color: ${colors.text};
        font: ${Fonts.fs}/${Fonts.lh} '${Fonts.ff}';
    `;
    const Caption = styled.div`
        margin-bottom: ${sizes.spacing};
    `;
    return (
        <Panel>{props.caption ? <Caption>{props.caption}</Caption> : null}{props.children}</Panel>
    );
};
