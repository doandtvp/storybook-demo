import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResetPassword from "./ResetPassword";

export default {
  title: "DIYBA SG/ResetPassword",
  component: ResetPassword,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof ResetPassword>;

const Template: ComponentStory<typeof ResetPassword> = () => <ResetPassword />;

export const Password = Template.bind({});
