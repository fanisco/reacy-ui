import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Input, Interfaces} from '../components/forms';

export default {
  title: 'Forms/Input',
  component: Input
} as Meta;

const Template: Story<Interfaces.IInput> = (args) => <Input {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  mods: ['primary'],
  placeholder: 'Input',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mods: ['secondary'],
  placeholder: 'Input',
};

export const Large = Template.bind({});
Large.args = {
  mods: ['lg'],
  placeholder: 'Input',
};

export const Small = Template.bind({});
Small.args = {
  mods: ['sm'],
  placeholder: 'Input',
};
