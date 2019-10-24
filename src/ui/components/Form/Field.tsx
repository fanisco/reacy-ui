import React from 'react';
import styled from 'styled-components';
import { IFieldProps } from '../Interfaces/IInputProps';
import IStyledProps from '../Interfaces/IStyledProps';
import { Colors, Dims, Fonts } from '../../constants';
import { Sizes, Styles } from '../../enums';

export const Field: React.FC<IFieldProps> = ({ size = Sizes.md, ...props }) => {
    const dims = Dims[size];
    return (
        <FieldElement dims={dims} type={props.type}>
            <Caption dims={dims} type={props.type}>{props.name}{props.type !== 'switch' ? ':' : ''}</Caption>{props.children}</FieldElement>
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
    
    ${props => props.type === 'switch' && `
        
    `}
`;
