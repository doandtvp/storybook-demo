import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tags } from "./Tags";

export default {
  title: "Example/Tags",
  component: Tags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Mine = Template.bind({});
Mine.args = {
  label: "Mine",
  backgroundColor: "red",
};

export const Dio = Template.bind({});
Dio.args = {
  label: "Mine",
  backgroundColor: "yellow",
};
