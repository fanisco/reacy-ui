import React from 'react';
import {shallow, mount} from 'enzyme';

import {Input} from './Input';

describe('<Input>', () => {
  const defaultProps = {
    value: '',
    type: 'text',
    name: 'test'
  };
  it('should render without problems', () => {
    const input = shallow(<Input {...defaultProps}/>);
    expect(input).toMatchSnapshot();
  });
  it('should apply modifiers', () => {
    const input = mount(<Input mods={['primary']} {...defaultProps}/>);
    expect(input.getDOMNode().className).toContain('primary');
  });
  it('should call `onChange` callback after input was changed', () => {
    const onChange = jest.fn();
    const input = mount(<Input {...defaultProps} onChange={onChange}/>);
          input.simulate('change');
    expect(onChange).toBeCalledTimes(1);
  });
});
