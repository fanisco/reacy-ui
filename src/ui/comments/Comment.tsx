import React, { Component } from 'react';
import styled from 'styled-components';
import IComment from '../../core/interface/IComment';
import Author from './Author';
import CommentList from './CommentList';

interface ICommentProps {
  comment: IComment
}

/**
 * Component for displaying particular comment and it contents.
 */
const Comment = ({ comment }: ICommentProps) => {
  let author, children;
  if (comment.author) {
    author = <Author {...comment.author} time={comment.date && comment.date.toString()}/>
  }
  if (comment.children) {
    children = <Children><CommentList comments={comment.children}/></Children>
  }

  return (
    <Wrapper>
      {author}
      <Content>{comment.text}</Content>
      {children}
    </Wrapper>
  )
  // }
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div`
  margin-bottom: 5px;
`;

const Children = styled.div`
  margin-top: 10px;
  padding-left: 32px;
`;

export default Comment;
