import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
// import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const UserName = Template.bind({});
UserName.args = {
  id: "username",
  name: "username",
  type: "text",
  placeholder: "Enter username",
};

export const Password = Template.bind({});
Password.args = {
  id: "password",
  name: "password",
  type: "password",
  placeholder: "Enter password",
};
