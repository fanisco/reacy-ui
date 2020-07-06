import React, {useContext} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import {Context} from '../../state/Context';

export const CommentList: React.FC<{
  depth?: number;
  comments?: any;
}> = ({depth = 0, ...props}) => {
  let comments;
  const {state} = useContext(Context);
  if (depth) {
    comments = props.comments;
  } else {
    comments = state.comments.records;
  }
  return (
    <Wrapper depth={depth}>
      {comments && comments.map((comment: any, i: number) => {
        return (
          <Comment key={i}
                   depth={depth}
                   comment={comment}
                   compact={state.settings.compact}
                   stacked={state.settings.stacked}/>
        )
      })}
    </Wrapper>
  )
};

const Wrapper = styled.div<{depth: number;}>`
  padding: ${props => props.depth === 0 ? 10 : 0}px;
`;
