import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';

export default {
  title: 'DIYBA SG/ToggleButton',
  component: ToggleButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = () => <ToggleButton />;

export const Default = Template.bind({});
