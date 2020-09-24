import React, {useState} from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

import {Forms} from './interfaces';
import {colors} from '../../styles/styles';
import {getElementSizes} from '../../styles/getElementSizes';


export const StyledInput = styled.input<Forms.IStyledInput>`
  display: inline-flex;
  width: 100%;
  border: 1px solid;
  box-shadow: none;

  &:focus {
    outline: 0 none;
  }

  ${({colorStyle}: Forms.IStyledInput) => css`
    background-color: ${colors[colorStyle].background};
    border-color: ${colors[colorStyle].border};
    color: ${colors[colorStyle].foreground};

    &::placeholder {
      color: ${colors[colorStyle].border};
    }
    &:hover {
      background-color: ${colors[colorStyle].background};
      border-color: ${colors[colorStyle].borderHover};
      color: ${colors[colorStyle].foregroundHover};
    }
    &:focus {
      border-color: ${colors[colorStyle].borderActive};
      box-shadow: 0 0 0 2px ${colors[colorStyle].borderActive}50;
      color: ${colors[colorStyle].foregroundActive};
    }

    &:disabled {
      cursor: default;

      &, &:hover, &:focus {
        background-color: ${colors[colorStyle].backgroundDisabled};
        border-color: ${colors[colorStyle].borderDisabled};
        color: ${colors[colorStyle].foregroundDisabled};
      }
    }
  `}

  ${getElementSizes}
`;
export const Input: React.FC<Forms.IInput> = ({value, name, placeholder, type = 'text', disabled = false, blockSize = 'md', colorStyle = 'gray', ...props}) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      focused={focused}
      disabled={disabled}
      blockSize={blockSize}
      colorStyle={colorStyle}
      placeholder={placeholder}
      onFocus={e => {
        setFocused(true);
        if (props.onFocus) {
          props.onFocus(e);
        }
      }}
      onBlur={e => {
        setFocused(false);
        if (props.onBlur) {
          props.onBlur(e);
        }
      }}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
    />
  );
};
