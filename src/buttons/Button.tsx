import React from 'react';
import styled from 'styled-components';
import {Buttons, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';
import {button} from '../core/mixins/button';

export const Button: React.FC<Buttons.IButton> = ({onClick, href, children, mods}) => {
  if (href) {
    return <_Button as="a" onClick={onClick} href={href} mods={modsFromArray(mods)}>{children}</_Button>;
  } else {
    return <_Button onClick={onClick} mods={modsFromArray(mods)}>{children}</_Button>;
  }
};

const _Button = styled.button<Core.IStyled>`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  font-weight: 400;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  border: 1px solid;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  :hover { transition: all 0.15s ease-in-out; }
  :focus { outline: 0 none; }

  ${props => button(props.mods)}
`;
