import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Textarea from '../input/Textarea';
import Button from '../button/Button';

interface IFormProps {
  text: string
}

/**
 * Component for displaying button.
 */
@observer
export default class Form extends Component {
  render() {
    return (
      <Wrapper>
        <TextareaWrapper>
          <Textarea name="comment" value="" caption="Your comment goes here..."/>
        </TextareaWrapper>
        <ButtonWrapper>
          <Button>Send</Button>
        </ButtonWrapper>
      </Wrapper>
    )
  }
};

const Wrapper = styled.form`
  position: relative;
`;

const TextareaWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
