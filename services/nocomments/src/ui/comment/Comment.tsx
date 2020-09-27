import React, {useContext} from 'react';
import styled from 'styled-components';
import {Buttons} from 'reacy-ui';
import {Context} from '../../state/Context';
import {setContextComment} from '../../state/actions';
import {Author} from '../persons/Author';
import {CommentList} from './CommentList';
import IComment from '../../core/interface/IComment';
import IPerson from '../../core/interface/IPerson';

interface IProps {
  comment: IComment;
  compact?: boolean;
  stacked?: boolean;
}

const Comment: React.FC<IProps> = ({comment, compact, stacked}) => {
  const {state, dispatch} = useContext(Context);
  const comments: IComment[] = state.comments.list;
  const authors: IPerson[] = state.comments.meta.authors;
  const nested = comment.parentId !== 0;
  const styledProps = {
    compact: compact,
    stacked: stacked && nested
  };

  const children = comments.filter(c => c.parentId === comment.id);
  const author = authors.find(a => a.id === comment.authorId);
  const authorCompact = styledProps.compact || styledProps.stacked;

  const onReplyClick = () => setContextComment({dispatch, id: comment.id});

  return (
    <Wrapper>
      {author ? <Author {...author} time={comment.date} compact={authorCompact}/> : ''}
      <Content {...styledProps}>{comment.text}</Content>
      <Buttons.Button onClick={onReplyClick}
              mods={['inline', 'bold', styledProps.compact ? 'xs' : 'sm']}>Reply</Buttons.Button>
      {children ? <Children {...styledProps}>
        <CommentList parentId={comment.id}/>
      </Children> : ''}
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
  margin-bottom: 2px;
  font-size: ${props => props.stacked || props.compact ? 14 : 16}px;
`;

const Children = styled.div<StyledProps>`
  margin-top: 10px;
  padding-left: ${props => props.stacked ? 0 : props.compact ? 29 : 37}px;
  transition: padding-left 0.15s ease-in-out;
`;

export default Comment;
