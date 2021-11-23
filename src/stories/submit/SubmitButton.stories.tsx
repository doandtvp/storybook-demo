import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitButton from './SubmitButton';

export default {
  title: 'DIYBA SG/SubmitButton',
  component: SubmitButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const Submit = Template.bind({});
Submit.args = {
  label: 'Submit to DIYBA',
  classType: 'submit',
};
