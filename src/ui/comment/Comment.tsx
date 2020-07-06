import React from 'react';
import styled from 'styled-components';
import IComment from '../../core/interface/IComment';
import Author from './Author';
import {CommentList} from './CommentList';

interface ICommentProps {
  comment: IComment
  compact?: boolean
  stacked?: boolean
  depth?: number
}

const Comment = ({comment, compact, stacked, depth = 0}: ICommentProps) => {
  let author, children;

  const styledProps = {
    compact: compact && depth >= 1,
    stacked: stacked
  };

  if (comment.author) {
    author = <Author {...comment.author} time={comment.date} stacked={stacked || compact && depth >= 1}/>
  }

  if (comment.children && comment.children.length) {
    children = (
      <Children {...styledProps}>
        {/*<CommentList depth={depth + 1}*/}
        {/*             comments={comment.children}*/}
        {/*             compact={compact}*/}
        {/*             stacked={stacked}/>*/}
      </Children>
    )
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

interface StyledProps {
  compact?: boolean
  stacked?: boolean
}

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Content = styled.div`
  margin-bottom: 5px;
`;

const Children = styled.div<StyledProps>`
  margin-top: 10px;
  padding-left: ${props => props.compact ? 0 : props.stacked ? 29 : 37}px;
  transition: padding-left 0.15s ease-in-out;
`;

export default Comment;
