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
        margin: ${sizes.spacing};
        padding: ${sizes.elementPadding};
        border: 1px solid ${colors.baseL1};
        border-radius: ${sizes.borderRadius};
        color: ${colors.text};
        font: ${sizes.font}/${Fonts.lh} '${Fonts.ff}';
    `;
    return (
        <Panel>{props.children}</Panel>
    );
};
