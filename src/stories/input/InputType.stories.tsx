import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputType from './InputType';

export default {
  title: 'DIYBA SG/InputType',
  component: InputType,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof InputType>;

const Template: ComponentStory<typeof InputType> = (args) => (
  <InputType {...args} />
);

export const UserName = Template.bind({});
UserName.args = {
  name: 'User Name',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  name: 'Password',
  type: 'password',
};

export const Number = Template.bind({});
Number.args = {
  name: 'Number',
  type: 'number',
};
