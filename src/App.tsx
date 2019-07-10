import React, { Component, ReactNode } from 'react';
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
export default class App extends Component {
  public data: DataSet;

  constructor(props: any) {
    super(props);
    this.data = new DataSet(data, 'comments');

    console.log('app init', this.data);
  }

  render() {
    return (
      <LayoutBlock>
        <CommentsBlock>
          <CommentList comments={this.data.records}/>
        </CommentsBlock>
        {/*<PostBlock>*/}
        {/*  <Textarea placeholder="Type comment here..."/>*/}
        {/*  <Button>Submit</Button>*/}
        {/*</PostBlock>*/}
      </LayoutBlock>
    );
  }
}
