import React, { Component } from 'react';
import Input, { IInputProps } from './Input';
import styled from 'styled-components';
import colors from '../colors';

interface ISwitchProps extends IInputProps {
  value: boolean
}

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
export default class Switch extends Component<ISwitchProps> {
  render() {
    return (
      <Wrapper>{this.props.caption}
        <Trigger active={this.props.value}/>
        <Hidden>
          <Input
            type="checkbox"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </Hidden>
      </Wrapper>
    )
  }
}

interface StyledProps {
  active: boolean
}

const Wrapper = styled.label`
  display: flex;
  
  & + & {
    margin-left: 10px;
  }
`;

const Trigger = styled.div<StyledProps>`
  position: relative;
  margin-left: 5px;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: ${props => props.active ? colors.successLight : colors.alumie};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transform: translateX(${props => props.active ? 20 : 0}px);
    box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.15);
    transition: transform 0.15s ease-in-out;
  }
`;

const Hidden = styled.div`
  margin: 0;
  position: absolute;
  visibility: hidden;
  opacity: 0;
`;
