import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import ICommentList from '../../core/interface/ICommentList';

interface ICommentListProps {
  comments: ICommentList
  depth?: number
}

/**
 * Component for displaying list of comments.
 */
const CommentList = ({ comments, depth = 0 }: ICommentListProps) => {
  return (
    <Wrapper>
      {comments.map<ReactNode>((comment, i) => {
        return <Comment key={i} comment={comment} depth={depth}/>
      })}
    </Wrapper>
  )
};

export default CommentList;

const Wrapper = styled.div`
  
`;
