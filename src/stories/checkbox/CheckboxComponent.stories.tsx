import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxComponent from './CheckboxComponent';

export default {
  title: 'DIYBA SG/CheckboxComponent',
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = () => (
  <CheckboxComponent />
);

export const Default = Template.bind({});
