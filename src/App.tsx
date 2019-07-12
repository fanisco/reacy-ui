import React, { Component } from 'react';
import styled from 'styled-components';
import CommentList from './ui/comments/CommentList';
import Form from './ui/comments/Form';
import Switch from './ui/input/Switch';
import data from './data/comments.json';
import DataSet from './core/source/DataSet';

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

const FormGrid = styled.div`
  display: flex;
  padding: 10px;
`;

/**
 *
 */
export default class App extends Component<{}, { compact: boolean, stacked: boolean }> {
  public data: DataSet;

  constructor(props: any) {
    super(props);
    this.state = {
      compact: false,
      stacked: false
    };
    this.data = new DataSet(data, 'comments');

    this.onSettingsChange = this.onSettingsChange.bind(this)
  }

  onSettingsChange(name: string, value: any) {
    this.setState({...this.state, [name]: value})
  }

  render() {
    return (
      <LayoutBlock>
        <FormGrid>
          <Switch name="compact" value={this.state.compact} caption="Compact" onChange={this.onSettingsChange}/>
          <Switch name="stacked" value={this.state.stacked} caption="Stacked" onChange={this.onSettingsChange}/>
        </FormGrid>
        <CommentsBlock>
          <CommentList comments={this.data.records} compact={this.state.compact} stacked={this.state.stacked}/>
        </CommentsBlock>
        <PostBlock>
          <Form/>
        </PostBlock>
      </LayoutBlock>
    );
  }
}
