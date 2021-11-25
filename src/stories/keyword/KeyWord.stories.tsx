import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KeyWord from './KeyWord';

export default {
  title: 'DIYBA SG/KeyWord',
  component: KeyWord,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof KeyWord>;

const Template: ComponentStory<typeof KeyWord> = () => <KeyWord />;

export const UserName = Template.bind({});
