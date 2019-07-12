import React, { Component } from 'react';
import styled from 'styled-components';
import Textarea from '../input/Textarea';
import Button from '../button/Button';
// import colors from '../colors';

// interface IProps {
//   children: string
// }

/**
 * Component for displaying button.
 */
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

const Wrapper = styled.div`
  position: relative;
`;

const TextareaWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
