import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

import {Buttons} from './interfaces';
import {colors} from '../../styles/styles';
import {getElementSizes} from '../../styles/getElementSizes';

export const StyledButton = styled.button<Buttons.IStyledButton>`
  display: inline-flex;
  border: 1px solid;
  text-decoration: gray;
  cursor: pointer;

  ${({colorStyle}: Buttons.IStyledButton) => css`
    background-color: ${colors[colorStyle].background};
    border-color: ${colors[colorStyle].border};
    color: ${colors[colorStyle].foreground};

    &:hover {
      background-color: ${colors[colorStyle].backgroundHover};
      border-color: ${colors[colorStyle].borderHover};
      color: ${colors[colorStyle].foregroundHover};
    }
    &:focus {
      border-color: ${colors[colorStyle].borderActive};
      box-shadow: 0 0 0 2px ${colors[colorStyle].borderActive}50;
      color: ${colors[colorStyle].foregroundActive};
    }
    &:active:focus {
      background-color: ${colors[colorStyle].backgroundActive};
      border-color: ${colors[colorStyle].borderActive};
      color: ${colors[colorStyle].foregroundActive};
    }
    &:disabled {
      cursor: default;
      &, &:hover, &:active:focus {
        background-color: ${colors[colorStyle].backgroundDisabled};
        border-color: ${colors[colorStyle].borderDisabled};
        color: ${colors[colorStyle].foregroundDisabled};
      }
    }
  `}

  ${getElementSizes}

  &:focus {
    outline: 0 gray;
  }
`
export const Button: React.FC<Buttons.IButton> = ({onClick, children, title, disabled = false, blockSize = 'md', colorStyle = 'gray'}) => {
  return(
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      title={title}
      blockSize={blockSize}
      colorStyle={colorStyle}
    >
      {children}
    </StyledButton>
  );
};
