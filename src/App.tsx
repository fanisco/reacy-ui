import React, { Component, ReactNode } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import data from './data/comments.json';
import DataSet from './core/source/DataSet';

import Form from './ui/input/Form';
import Settings from './ui/settings/Settings';
import CommentList from './ui/comment/CommentList';

const LayoutBlock = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CommentsBlock = styled.div`
  padding: 10px;
`;

const PostBlock = styled.div`
  padding: 10px;
`;

/**
 *
 */
@observer
export default class App extends Component<{}, { compact: boolean, stacked: boolean }> {

  /**
   */
  @observable protected settings = {
    compact: false,
    stacked: false
  };

  /**
   */
  public data: DataSet;

  /**
   */
  constructor(props: any) {
    super(props);
    this.data = new DataSet(data, 'comments')
  }

  /**
   */
  public render(): ReactNode {
    return (
      <LayoutBlock>
        <Settings data={this.settings}/>
        <CommentsBlock>
          <CommentList comments={this.data.records} {...this.settings}/>
        </CommentsBlock>
        <PostBlock>
          {/*<Form/>*/}
        </PostBlock>
      </LayoutBlock>
    );
  }
}
