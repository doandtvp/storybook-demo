import { ComponentStory, ComponentMeta } from '@storybook/react';
import Video from './Video';

export default {
  title: 'DIYBA SG/Video',
  component: Video,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = () => <Video />;

export const VideoDefault = Template.bind({});
