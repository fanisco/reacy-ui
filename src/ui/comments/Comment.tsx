import React, { Component } from 'react';
import styled from 'styled-components';
import { default as Model } from '../../core/entity/Comment';

interface ICommentProps {
  comment: Model
}

/**
 * Component for displaying particular comment and it contents.
 */
export default class Comment extends Component<ICommentProps> {
  render() {

    const
      { comment } = this.props,
      { author } = comment;

    if (author) {
      return (
        <div>
          <div>
            <div>photo</div>
            <div>
              <h5>{author.name}</h5>
              <time>time</time>
            </div>
          </div>
          <div>{comment.text}</div>
        </div>
      )
    }
  }
}
