import React, { Component } from 'react';
import styled from 'styled-components';
import CommentList from './ui/comments/CommentList';
import Textarea from './ui/input/Textarea';
import Switch from './ui/input/Switch';
import data from './data/comments.json';
import DataSet from './core/source/DataSet';
import colors from './ui/colors';

const transition = 'transition: all 0.15s ease-in-out';

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

const Button = styled.button`
  ${transition};
  height: 35px;
  padding: 5px 20px;
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 10px ${colors.primary}30;

  &:hover {
    background-color: ${colors.primary};
  }
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
          <Textarea name="comment" value="" caption="Your comment goes here..."/>
          <Button>Submit</Button>
        </PostBlock>
      </LayoutBlock>
    );
  }
}
