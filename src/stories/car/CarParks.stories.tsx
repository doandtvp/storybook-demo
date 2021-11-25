import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarParks from './CarParks';

export default {
  title: 'DIYBA SG/CarParks',
  component: CarParks,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof CarParks>;

const Template: ComponentStory<typeof CarParks> = () => <CarParks />;

export const UserName = Template.bind({});
