import React from 'react';
import styled from 'styled-components';
import {Forms, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';

export const Field: React.FC<Forms.IFormItem> = ({title, type, mods, children}) => {
  return (
    <FieldElement mods={modsFromArray(mods)}>
      <Caption mods={modsFromArray(mods)}>{title + (type !== 'switch' ? ':' : '')}</Caption>
      {children}
    </FieldElement>
  );
};

const FieldElement = styled.div<Core.IStyled>`
  margin-bottom: 12px;
`;

const Caption = styled.span<Core.IStyled>`
`;
