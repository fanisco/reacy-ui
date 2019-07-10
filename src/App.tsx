import React, { ChangeEvent, Component, ReactNode } from 'react';
import styled from 'styled-components';
import CommentList from './ui/comments/CommentList';
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

// const Button = styled.button`
//   ${transition};
//   height: 35px;
//   padding: 5px 20px;
//   background-color: ${colors.primary};
//   border: 1px solid ${colors.primary};
//   border-radius: 40px;
//   cursor: pointer;
//   font-weight: 500;
//   box-shadow: 0 2px 10px ${colors.primaryDark}30;
//
//   &:hover {
//     background-color: ${colors.primaryLight};
//   }
// `;

// const Textarea = styled.textarea`
//   ${transition};
//   width: 100%;
//   height: 100px;
//   padding: 5px 10px;
//   border: 1px solid ${colors.border};
//   border-radius: 2px;
//   resize: vertical;
//
//   &:hover, &:focus {
//     border-color: ${colors.secondary}
//   }
//   &:focus {
//     box-shadow: 0 5px 15px ${colors.secondary}20;
//   }
// `;

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

    console.log('app init', this.data);
  }

  onSettingsChange(ev: ChangeEvent<HTMLInputElement>, name: string) {
    let newState = {...this.state};
    const value = ev.target.checked;

    switch (name) {
      case 'compact':
        newState.compact = value;
        break;
      case 'stacked':
        newState.stacked = value;
        break;
    }
    this.setState(newState)
  }

  render() {
    return (
      <LayoutBlock>
        <label>Compact
          <input type="checkbox" checked={this.state.compact} onChange={(ev: ChangeEvent<HTMLInputElement>) => this.onSettingsChange(ev, 'compact')}/>
        </label>
        <label>Stacked
          <input type="checkbox" checked={this.state.stacked} onChange={(ev: ChangeEvent<HTMLInputElement>) => this.onSettingsChange(ev, 'stacked')}/>
        </label>
        <CommentsBlock>
          <CommentList comments={this.data.records} compact={this.state.compact} stacked={this.state.stacked}/>
        </CommentsBlock>
        {/*<PostBlock>*/}
        {/*  <Textarea placeholder="Type comment here..."/>*/}
        {/*  <Button>Submit</Button>*/}
        {/*</PostBlock>*/}
      </LayoutBlock>
    );
  }
}
