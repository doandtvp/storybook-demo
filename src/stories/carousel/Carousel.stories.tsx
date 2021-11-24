import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from './Carousel';

export default {
  title: 'DIYBA SG/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = () => <Carousel />;

export const Default = Template.bind({});
