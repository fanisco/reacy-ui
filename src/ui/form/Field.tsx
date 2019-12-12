import React from 'react';
import styled from 'styled-components';
import { IFieldProps } from '../interface/IInputProps';
import IStyledProps from '../interface/IStyledProps';
import { Colors, Dims, Fonts } from '../constants';
import { Sizes, Styles } from '../enums';

export const Field: React.FC<IFieldProps> = ({ style = Styles.default, size = Sizes.md, ...props }) => {
    const colors = Colors[style];
    const dims = Dims[size];
    return (
        <FieldElement dims={dims} type={props.type}>
            <Caption dims={dims} colors={colors} type={props.type}>{props.name}{props.type !== 'switch' ? ':' : ''}</Caption>{props.children}</FieldElement>
    );
};

interface IFieldStyledProps extends IStyledProps {
    type: string;
}

const FieldElement = styled.div<IFieldStyledProps>`
    margin-bottom: ${props => props.dims.spacing}px;
    
    ${props => props.type === 'switch' && `
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`;

const Caption = styled.span<IFieldStyledProps>`
    font: ${props => props.dims.fontSize}px/${props => props.dims.lineHeight} "${Fonts.ff}";
    font-weight: 700;
    color: ${props => props.colors.text};
    
    ${props => props.type === 'switch' && `
        
    `}
`;
