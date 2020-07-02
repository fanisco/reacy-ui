export const t = 123;
// import React, { Component, ReactNode } from 'react';
// import styled from 'styled-components';
// import {Form, Button, Icon} from 'reacy-ui';
// import IDataSet from '../../core/interface/IDataSet';
//
// interface IComformProps {
//   data: IDataSet
// }

// /**
//  * Component for displaying comment form.
//  */
// @observer
// export default class Comform extends Component<IComformProps> {
//   @observable protected data = {
//     comment: ''
//   };
//   protected fields: any[] = [{name: 'comment', type: 'textarea', placeholder: 'Type your comment here...'}];
//
//   constructor(props: IComformProps) {
//     super(props);
//     this.onButtonClick = this.onButtonClick.bind(this);
//   }
//
//   protected onButtonClick() {
//     // Create a new comment
//     this.props.data.records.create({
//       text: this.data.comment,
//       author_id: 1,
//       comment_id: 0,
//       date: (new Date()).getTime()
//     });
//
//     // Empty the textbox
//     this.data.comment = '';
//   }
//
//   public render(): ReactNode {
//     return (
//       <Wrapper>
//         <FormWrapper>
//           <Form fields={this.fields}
//                 data={this.data}
//                 onChange={(name: string, value: string) => this.data.comment = value}/>
//         </FormWrapper>
//         <ButtonWrapper>
//           <Button onClick={this.onButtonClick}
//                   mods={['outline', 'rounded', 'primary', 'bold']}
//                   disabled={!this.data.comment.length}
//           ><Icon name="reply"/>Send</Button>
//         </ButtonWrapper>
//       </Wrapper>
//     )
//   }
// };
//
// const Wrapper = styled.div`
//   position: relative;
//   padding: 10px;
// `;
//
// const FormWrapper = styled.div`
//
// `;
//
// const ButtonWrapper = styled.div`
//   position: absolute;
//   right: 20px;
//   bottom: 20px;
// `;
