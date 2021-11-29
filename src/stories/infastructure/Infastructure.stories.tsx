import { ComponentStory, ComponentMeta } from '@storybook/react';
import Infastructure from './Infastructure';

export default {
  title: 'DIYBA SG/Infastructure',
  component: Infastructure,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Infastructure>;

const Template: ComponentStory<typeof Infastructure> = () => <Infastructure />;

export const Default = Template.bind({});
