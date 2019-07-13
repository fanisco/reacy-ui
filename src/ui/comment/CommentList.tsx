import React, { Component, ReactNode } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import Comment from "./Comment";
import IList from "../../core/interface/IList";

interface ICommentListProps {
  comments: IList
  compact?: boolean
  stacked?: boolean
  depth?: number
}

/**
 * Component for displaying list of comments.
 */
@observer
export default class CommentList extends Component<ICommentListProps> {
  render() {
    const { comments, compact, stacked, depth = 0 } = this.props;
    return (
      <Wrapper depth={depth}>
        {comments.map<ReactNode>((comment, i) => {
          return <Comment key={i} comment={comment} compact={compact} stacked={stacked} depth={depth}/>
        })}
      </Wrapper>
    )
  }
};

interface StyledProps {
  depth: number
}

const Wrapper = styled.div<StyledProps>`
  padding: ${props => props.depth === 0 ? 10 : 0}px;
`;
