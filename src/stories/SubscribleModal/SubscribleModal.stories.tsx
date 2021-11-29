import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubscribleModal from './SubscribleModal';

export default {
  title: 'DIYBA SG/SubscribleModal',
  component: SubscribleModal,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof SubscribleModal>;

const Template: ComponentStory<typeof SubscribleModal> = () => (
  <SubscribleModal />
);

export const Default = Template.bind({});
