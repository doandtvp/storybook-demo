import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './Tabs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DIYBA SG/Tabs',
  component: Tabs,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => <Tabs />;

export const Default = Template.bind({});
