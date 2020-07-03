import React from 'react';
import styled from 'styled-components';
import {Forms, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';

export const Switch: React.FC<Forms.ISwitch> = ({value, onChange, mods, name, disabled = false}) => {
  return (
    <Wrapper>
      <Trigger mods={modsFromArray(mods)}/>
      <Hidden>
        <input type="checkbox"
               name={name}
               checked={value}
               onChange={() => {
                 if (onChange) {
                   onChange(!value)
                 }
               }}
        />
      </Hidden>
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  
  & + & {
    margin-left: 10px;
  }
`;

const Trigger = styled.div<Core.IStyled>`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  
  &:hover {
    transition: all 0.15s ease-in-out 0.15s;
  }
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.15s ease-in-out;
  }
`;

const Hidden = styled.div`
  margin: 0;
  position: absolute;
  visibility: hidden;
  opacity: 0;
`;
