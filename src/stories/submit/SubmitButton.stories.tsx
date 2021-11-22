import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitButton from './SubmitButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DIYBA SG/SubmitButton',
  component: SubmitButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

const handleClick = () => {
  alert('3ka kun');
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'Submit to DIYBA',
  classType: 'submit',
  onClick: (action('clicked'), handleClick),
};
