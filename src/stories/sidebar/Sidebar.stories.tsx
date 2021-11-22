import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from "./Sidebar";

export default {
  title: "DIYBA SG/Sidebar",
  component: Sidebar,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

const webAppList = [
  {
    icons: "view-dashboard",
    name: "Dashboard",
    notification: "",
  },
  {
    icons: "view-dashboard",
    name: "My portfolio",
    notification: "",
  },
  {
    icons: "view-dashboard",
    name: "Pending properties",
    notification: "",
  },
  {
    icons: "view-dashboard",
    name: "Search",
    notification: "",
  },
  {
    icons: "view-dashboard",
    name: "Notification",
    notification: "1",
  },
  {
    icons: "view-dashboard",
    name: "Wishlist",
    notification: "34",
  },
  {
    icons: "view-dashboard",
    name: "Contact",
    notification: "",
  },
  {
    icons: "view-dashboard",
    name: "Account",
    notification: "",
  },
];

export const WebApp = Template.bind({});
WebApp.args = {
  menu: webAppList,
};
