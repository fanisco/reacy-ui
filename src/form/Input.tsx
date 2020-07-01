import React from 'react';
import styled from 'styled-components';
import {Form, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';
import {input} from '../core/mixins/input';

export const Input: React.FC<Form.IInput> = ({value, onChange, placeholder, mods, type = 'text'}) => {
    return (
        <_Input
            mods={modsFromArray(mods)}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

const _Input = styled.input<Core.IStyled>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  border: 1px solid;
  font-weight: 400;
  transition: all 0.15s ease-in-out;

  &:hover { transition: all 0.15s ease-in-out 0.15s; }
  &:focus { outline: 0 none; }

  ${props => input(props.mods)}
`;
