import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts, Dims } from '../constants';
import { Styles, Sizes } from '../enums';

interface IProps {

}

export const Panel: React.FC<IProps> = (props) => {
    const colors = Colors[Styles.default];
    const sizes = Dims[Sizes.md];
    return (
        <PanelElement colors={colors} sizes={sizes}>{props.children}</PanelElement>
    );
};

interface StyledProps {
    sizes?: any
    colors?: any
}

const PanelElement = styled.div<StyledProps>`
    margin: ${props => props.sizes.spacing}px;
    padding: ${props => props.sizes.elementPadding}px;
    background-color: ${props => props.colors.baseL2};
    border-radius: ${props => props.sizes.borderRadius}px;
    color: ${props => props.colors.text};
    font: ${props => props.sizes.fontSize}px/${Fonts.lh} '${Fonts.ff}';
`;
