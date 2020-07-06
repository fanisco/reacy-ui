import React from 'react';
import styled from 'styled-components';
import IComment from '../../core/interface/IComment';
import IList from '../../core/interface/IList';
import Author from './Author';
import {CommentList} from './CommentList';

interface ICommentProps {
  comment: IComment;
  comments?: IList;
  compact?: boolean;
  stacked?: boolean;
  parentId?: number;
}

const Comment = ({comment, compact, stacked, comments, parentId = 0}: ICommentProps) => {
  let author, children;

  const nested = parentId !== 0;
  const styledProps = {
    compact: compact,
    stacked: stacked && nested
  };

  if (comment.author) {
    author = <Author {...comment.author} time={comment.date} compact={styledProps.compact || styledProps.stacked}/>
  }

  if (comments) {
    children = (
      <Children {...styledProps}>
        <CommentList parentId={comment.id}
                     comments={comments}/>
      </Children>
    )
  }

  return (
    <Wrapper>
      {author}
      <Content {...styledProps}>{comment.text}</Content>
      {children}
    </Wrapper>
  )
};

interface StyledProps {
  compact?: boolean
  stacked?: boolean
}

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div<StyledProps>`
  margin-bottom: 5px;
  font-size: ${props => props.stacked || props.compact ? 14 : 16}px;
`;

const Children = styled.div<StyledProps>`
  margin-top: 10px;
  padding-left: ${props => props.stacked ? 0 : props.compact ? 29 : 37}px;
  transition: padding-left 0.15s ease-in-out;
`;

export default Comment;
