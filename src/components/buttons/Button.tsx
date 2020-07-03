import React from 'react';
import styled from 'styled-components';
import {Buttons, Core} from '../core/interfaces';
import {modsFromArray} from '../core/helpers';
import {button} from '../core/mixins/button';

export const Button: React.FC<Buttons.IButton> = ({onClick, href, children, mods, disabled = false}) => {
  if (href) {
    return <_Button as="a" onClick={onClick} href={href} mods={modsFromArray(mods)}>{children}</_Button>;
  } else {
    return <_Button onClick={onClick} mods={modsFromArray(mods)} disabled={disabled}>{children}</_Button>;
  }
};

const _Button = styled.button<Core.IStyled>`
  ${props => button(props.mods)}
`;
