import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselContent from './CarouselContent';

export default {
  title: 'DIYBA SG/CarouselContent',
  component: CarouselContent,
} as ComponentMeta<typeof CarouselContent>;

const Template: ComponentStory<typeof CarouselContent> = (args) => (
  <CarouselContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: '',
};

export const NonRadius = Template.bind({});
NonRadius.args = {
  type: 'property',
};
