import React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import Input from './Input';

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
export default class Textarea extends Input {
  render() {
    return (
      <TextArea value={this.props.value} placeholder={this.props.caption}/>
    )
  }
}

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px 10px;
  border: 1px solid ${colors.pale};
  border-radius: 2px;
  resize: none;
  transition: all 0.15s ease-in-out;

  &:hover, &:focus {
    border-color: ${colors.primary}
  }
  &:focus {
    box-shadow: 0 5px 15px ${colors.primary}20;
  }
`;
