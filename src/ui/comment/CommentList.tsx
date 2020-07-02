import React, {useContext} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import {Context} from '../../state/Context';

export const CommentList: React.FC<{
  compact?: boolean
  stacked?: boolean
  depth?: number
}> = ({depth = 0}) => {
  const {state} = useContext(Context);
  return (
    <Wrapper depth={depth}>
      {state.comments && state.comments.records.map((comment: any, i: number) => {
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
