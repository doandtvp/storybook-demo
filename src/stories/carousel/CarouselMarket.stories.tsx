import { ComponentStory, ComponentMeta } from '@storybook/react';
import CarouselMarket from './CarouselMarket';

export default {
  title: 'DIYBA SG/CarouselMarket',
  component: CarouselMarket,
} as ComponentMeta<typeof CarouselMarket>;

const Template: ComponentStory<typeof CarouselMarket> = () => (
  <CarouselMarket />
);

export const Default = Template.bind({});
