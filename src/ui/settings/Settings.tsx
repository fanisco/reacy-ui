import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import {Form} from 'reacy-ui';

interface ISettingsProps {
  data: {
    [x: string]: any
  }
}

/**
 * Component for displaying form.
 */
export default class Settings extends Component<ISettingsProps> {
  protected fields: any[] = [
    {name: 'compact', title: 'Compact', type: 'switch'},
    {name: 'stacked', title: 'Stacked', type: 'switch'}
  ];

  constructor(props: ISettingsProps) {
    super(props);
    this.fields.map(field => field.value = this.props.data[field.name])
  }

  /**
   * */
  render(): ReactNode {
    return (
      <Wrapper>
        <Form fields={this.fields}
              data={this.props.data}
              onChange={(name, value) => console.log(name, value)}/>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  padding: 10px;
`;
