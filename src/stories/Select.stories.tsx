import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Select, Interfaces} from '../components/forms';

export default {
  title: 'Forms/Select',
  component: Select
} as Meta;

const Template: Story<Interfaces.ISelect> = (args) => <Select {...args}/>;
const value = 1;
const items = [
  {id: 1, caption: 'React'},
  {id: 2, caption: 'Vue'},
  {id: 3, caption: 'Angular'},
  {id: 4, caption: 'Ember'},
  {id: 4, caption: 'Backbone'}
];

export const Default = Template.bind({});
Default.args = {
  mods: [],
  value,
  items
};

export const Large = Template.bind({});
Large.args = {
  mods: ['lg', 'bold'],
  value,
  items
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  mods: ['xs'],
  value,
  items
};
