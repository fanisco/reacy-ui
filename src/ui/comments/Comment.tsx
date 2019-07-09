import React, { Component } from 'react';
import styled from 'styled-components';
import { default as Model } from '../../core/entity/Comment';
import Author from './Author';

interface ICommentProps {
  comment: Model
}

/**
 * Component for displaying particular comment and it contents.
 */
export default class Comment extends Component<ICommentProps> {
  render() {

    const
      { comment } = this.props,
      { author } = comment,
      date = comment.date && comment.date.toString();

    if (author) {
      return (
        <Wrapper>
          <Author {...author} time={date}/>
          <Content>{comment.text}</Content>
        </Wrapper>
      )
    }
  }
}

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div`
  margin-bottom: 5px;
`;
