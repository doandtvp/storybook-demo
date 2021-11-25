import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchSlider from './SearchSlider';

export default {
  title: 'DIYBA SG/SearchSlider',
  component: SearchSlider,
} as ComponentMeta<typeof SearchSlider>;

const Template: ComponentStory<typeof SearchSlider> = () => <SearchSlider />;

export const Default = Template.bind({});
