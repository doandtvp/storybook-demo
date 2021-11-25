import { ComponentStory, ComponentMeta } from '@storybook/react';
import Subscription from './Subscription';

export default {
  title: 'DIYBA SG/Subscription',
  component: Subscription,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Subscription>;

const Template: ComponentStory<typeof Subscription> = () => <Subscription />;

export const Default = Template.bind({});
