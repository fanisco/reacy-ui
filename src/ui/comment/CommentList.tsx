import React, {useContext} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import {Context} from '../../state/Context';
import IList from '../../core/interface/IList';

export const CommentList: React.FC<{
  parentId?: number;
  comments?: IList;
}> = ({parentId = 0, ...props}) => {
  let comments: IList;
  const {state} = useContext(Context);
  if (parentId && props.comments) {
    comments = props.comments;
  } else {
    comments = state.comments.records;
  }
  return (
    <Wrapper parentId={parentId}>
      {comments && comments.filter(comment => comment.parentId === parentId).map((comment: any, i: number) => {
        return (
          <Comment key={i}
                   parentId={parentId}
                   comment={comment}
                   comments={comments}
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
