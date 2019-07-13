import React, { Component, ReactNode } from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import styled from 'styled-components';

import Form, { IFieldProps } from '../input/Form';
import Button from '../button/Button';

import IDataSet from '../../core/interface/IDataSet';

interface IComformProps {
  data: IDataSet
}

/**
 * Component for displaying comment form.
 */
@observer
export default class Comform extends Component<IComformProps> {
  @observable protected data = {
    comment: ''
  };
  protected fields: IFieldProps[] = [
    { name: 'comment', caption: 'Comment', type: 'textarea' }
  ];

  constructor(props: IComformProps) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  protected onButtonClick() {
    this.props.data.records.create({
      text: this.data.comment,
      author_id: 1,
      comment_id: 0,
      date: (new Date()).getTime()
    });
    console.log(this.props.data.records, this.props.data.records.length());
  }

  /**
   * */
  public render(): ReactNode {
    return (
      <Wrapper>
        <FormWrapper>
          <Form fields={this.fields} data={this.data}/>
        </FormWrapper>
        <ButtonWrapper>
          <Button onClick={this.onButtonClick}>Send</Button>
        </ButtonWrapper>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  position: relative;
  padding: 10px;
`;

const FormWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
