import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Button, Interfaces} from '../components/buttons';

export default {
  title: 'ReacyUI/Button',
  component: Button
} as Meta;

const Template: Story<Interfaces.IButton> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  mods: ['primary'],
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mods: ['secondary'],
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  mods: ['lg'],
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  mods: ['sm'],
  children: 'Button',
};
