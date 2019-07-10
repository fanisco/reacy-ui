import React, { Component } from 'react';
import styled from 'styled-components';
import IComment from '../../core/interface/IComment';
import Author from './Author';
import CommentList from './CommentList';

interface ICommentProps {
  comment: IComment
  depth?: number
}

const stackDepth = 4;

/**
 * Component for displaying particular comment and it contents.
 */
const Comment = ({ comment, depth = 0 }: ICommentProps) => {
  let author, children;
  if (comment.author) {
    author = <Author {...comment.author} time={comment.date} stacked={depth >= stackDepth}/>
  }
  if (comment.children && comment.children.length) {
    children = <Children><CommentList comments={comment.children} depth={depth + 1}/></Children>
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
