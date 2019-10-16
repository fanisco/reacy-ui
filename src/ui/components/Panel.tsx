import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';

interface IProps {

}

export const Panel: React.FC<IProps> = (props) => {
    const colors = Colors[Styles.default];
    const sizes = Dims[Sizes.md];
    const Panel = styled.div`
        margin: ${sizes.spacing}px;
        padding: ${sizes.elementPadding}px;
        border: 1px solid ${colors.baseL3};
        border-radius: ${sizes.borderRadius}px;
        color: ${colors.text};
        font: ${sizes.fontSize}px/${Fonts.lh} '${Fonts.ff}';
    `;
    return (
        <Panel>{props.children}</Panel>
    );
};
