import React from 'react';
import {shallow, mount} from 'enzyme';

import {Button} from './Button';

describe('<Button>', () => {
  it('should render without problems', () => {
    const button = shallow(<Button>Button-example</Button>);
    expect(button).toMatchSnapshot();
  });
  it('should apply modifiers', () => {
    const button = mount(<Button mods={['primary']}/>);
    expect(button.getDOMNode().className).toContain('primary');
  });
  it('should call `onClick` callback after button was clicked', () => {
    const onClick = jest.fn();
    const button = mount(<Button onClick={onClick}/>);
          button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
