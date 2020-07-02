import React from 'react';
import styled from 'styled-components';
import {Forms, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';
import {input} from '../core/mixins/input';

export const Input: React.FC<Forms.IInput> = ({value, onChange, placeholder, mods, type = 'text', disabled = false}) => {
  return (
    <_Input mods={modsFromArray(mods)}
            type={type}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={e => {
              if (onChange) {
                onChange(e.target.value)
              }
            }}
    />
  );
};

const _Input = styled.input<Core.IStyled>`
  ${props => input(props.mods)}
`;
