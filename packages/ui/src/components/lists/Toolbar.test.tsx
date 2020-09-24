import React from 'react';
import {shallow, mount} from 'enzyme';

import {Toolbar} from './Toolbar';

describe('<Toolbar>', () => {
  const defaultProps = {
    items: [
      {caption: 'Button 1'}
    ]
  };
  it('should render without problems', () => {
    const toolbar = shallow(<Toolbar {...defaultProps}/>);
    expect(toolbar).toMatchSnapshot();
  });
  it('should apply modifiers', () => {
    const toolbar = mount(<Toolbar mods={['primary']} {...defaultProps}/>);
    expect(toolbar.getDOMNode().className).toContain('primary');
  });
  it('should call `onClick` callback after one of buttons was clicked', () => {
    const onClick = jest.fn();
    const toolbar = mount(<Toolbar items={[{caption: 'Clickable button', onClick}]}/>);
          toolbar.find('button').first().simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
