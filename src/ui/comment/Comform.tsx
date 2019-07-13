import React, { Component, ReactNode } from 'react';
import Form, { IFieldProps } from '../input/Form';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Button from '../button/Button';
import styled from 'styled-components';

interface IComformProps {

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

  /**
   * */
  render(): ReactNode {
    return (
      <Wrapper>
        <FormWrapper>
          <Form fields={this.fields} data={this.data}/>
        </FormWrapper>
        <ButtonWrapper>
          <Button>Send</Button>
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
