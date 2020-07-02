import React from 'react';
import styled from 'styled-components';
import {Forms, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';
import {input} from '../core/mixins/input';

export const Textarea: React.FC<Forms.IInput> = ({value, onChange, placeholder, mods}) => {
    return (
        <_Textarea
            mods={modsFromArray(mods)}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

const _Textarea = styled.textarea<Core.IStyled>`
  ${props => input(props.mods)};
  height: auto;
  resize: vertical;
`;
