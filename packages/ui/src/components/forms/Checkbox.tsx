import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

import {Forms} from './interfaces';
import {colors} from '../../styles/styles';
import {sizes} from '../../styles/sizes';
import {Icon} from '../misc';

const StyledRoot = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const StyledTrigger = styled.div<Forms.IStyledInput>`
  position: relative;
  border: 1px solid;

  ${({blockSize}: Forms.IStyledInput) => css`
    width: ${sizes.fontSize[blockSize]};
    height: ${sizes.fontSize[blockSize]};
    border-radius: ${sizes.borderRadiusSmall[blockSize]};
  `}

  ${({colorStyle}: Forms.IStyledInput) => css`
    background-color: ${colors[colorStyle].background};
    border-color: ${colors[colorStyle].border};

    &:hover {
      background-color: ${colors[colorStyle].backgroundHover};
      border-color: ${colors[colorStyle].borderHover};
    }
    &:active:focus {
      background-color: ${colors[colorStyle].backgroundActive};
      border-color: ${colors[colorStyle].borderActive};
    }
  `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledText = styled.span<{checked: boolean}>`
  ${({checked}) => checked && css`
    margin-left: 0.5em;
    pointer-events: none;
  `}
`;

export const Checkbox: React.FC<Forms.ICheckbox> = ({name, value, title, onChange, disabled = false, blockSize = 'md', colorStyle = 'gray', ...props}) => {
  return(
    <StyledRoot>
      <StyledTrigger
        blockSize={blockSize}
        colorStyle={colorStyle}
      >
        <StyledIcon name="check" align="top"/>
      </StyledTrigger>
      <StyledInput
        name={name}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledText checked={value}>{title}</StyledText>
    </StyledRoot>
  );
};
