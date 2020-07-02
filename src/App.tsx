import React, { Component, ReactNode } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import data from './data/comments.json';
import DataSet from './core/source/DataSet';

import Comform from './ui/comment/Comform';
import Settings from './ui/settings/Settings';
import CommentList from './ui/comment/CommentList';

const LayoutBlock = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

/**
 *
 */
@observer
export default class App extends Component<{}, { compact: boolean, stacked: boolean }> {

  /**
   * Display mode configurations.
   */
  @observable protected settings = {
    compact: false,
    stacked: false
  };

  /**
   * Data that contains commentary list with their meta data.
   */
  protected data = new DataSet(data, 'comments');

  /**
   * @return {ReactNode}
   */
  public render(): ReactNode {
    return (
      <LayoutBlock>
        <Settings data={this.settings}/>
        <CommentList comments={this.data.records} {...this.settings}/>
        <Comform data={this.data}/>
      </LayoutBlock>
    );
  }
}
