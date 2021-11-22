import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DIYBA SG/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const handleClick = () => {
  alert('3ka kun');
};

export const Default = Template.bind({});
Default.args = {
  label: 'SEARCH PROPERTIES',
  classType: 'default',
  onClick: (action('clicked'), handleClick),
};

export const SearchProperties = Template.bind({});
SearchProperties.args = {
  label: 'SEARCH PROPERTIES',
  classType: 'btn-search',
  onClick: (action('clicked'), handleClick),
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel',
  classType: 'btn-cancel',
  onClick: (action('clicked'), handleClick),
};

export const MAS = Template.bind({});
MAS.args = {
  label: 'Mark as sold',
  classType: 'btn-mas',
  onClick: (action('clicked'), handleClick),
};

export const Import = Template.bind({});
Import.args = {
  label: 'Import Property',
  classType: 'btn-import',
  onClick: (action('clicked'), handleClick),
};

export const CancelLB = Template.bind({});
CancelLB.args = {
  label: 'Cancel',
  classType: 'btn-cancel__lb',
  onClick: (action('clicked'), handleClick),
};

export const SaveLB = Template.bind({});
SaveLB.args = {
  label: 'Save',
  classType: 'btn-save__lb',
  onClick: (action('clicked'), handleClick),
};

export const HelpLB = Template.bind({});
HelpLB.args = {
  label: 'Get Help From DIYBA',
  classType: 'btn-help__lb',
  onClick: (action('clicked'), handleClick),
};
