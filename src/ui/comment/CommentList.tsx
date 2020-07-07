import React, {useContext} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import {Context} from '../../state/Context';

export const CommentList: React.FC<{
  parentId?: number;
}> = ({parentId = 0, ...props}) => {
  const {state} = useContext(Context);
  const comments = state.comments.list;
  const authors = state.comments.meta.authors;
  return (
    <Wrapper parentId={parentId}>
      {comments && comments.filter(comment => comment.parentId === parentId).map((comment: any, i: number) => {
        return (
          <Comment key={i}
                   comment={comment}
                   compact={state.settings.compact}
                   stacked={state.settings.stacked}/>
        )
      })}
    </Wrapper>
  )
};

const Wrapper = styled.div<{parentId: number;}>`
  padding: ${props => props.parentId === 0 ? 10 : 0}px;
`;
