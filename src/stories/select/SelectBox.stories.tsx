import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectBox from './SelectBox';

export default {
  title: 'DIYBA SG/SelectBox',
  component: SelectBox,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = () => <SelectBox />;

export const Default = Template.bind({});
