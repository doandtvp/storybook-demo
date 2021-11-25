import { ComponentStory, ComponentMeta } from '@storybook/react';
import Market from './Market';

export default {
  title: 'DIYBA SG/Market',
  component: Market,
} as ComponentMeta<typeof Market>;

const Template: ComponentStory<typeof Market> = () => <Market />;

export const Default = Template.bind({});
