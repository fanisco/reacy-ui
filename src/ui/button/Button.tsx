import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import colors from '../colors';

interface IProps {
  children: string,
  onClick?: () => void
}

/**
 * Component for displaying button.
 */
const Button = (props: IProps) => {
  const onClick = (ev: MouseEvent) => {
    ev.preventDefault();
    props.onClick && props.onClick()
  };
  return <Bootton onClick={onClick}>{props.children}</Bootton>
};

const Bootton = styled.button`
  height: 35px;
  padding: 5px 20px;
  background-color: ${colors.alumie};
  border: 1px solid ${colors.silver};
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 10px ${colors.alumie}30;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${colors.platin};
  }
  &:active:focus {
    padding-top: 6px;
  }
`;

export default Button;
