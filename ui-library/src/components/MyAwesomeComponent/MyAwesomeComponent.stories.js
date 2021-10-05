import React from "react";

import MyAwesomeComponent from ".";

export default {
  title: "Components/MyAwesomeComponent",
  component: MyAwesomeComponent,
  argTypes: {},
};

const Template = (args) => <MyAwesomeComponent {...args} />;

export const Story = Template.bind({});
Story.args = {};
