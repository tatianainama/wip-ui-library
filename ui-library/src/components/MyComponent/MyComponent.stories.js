import React from "react";

import MyComponent from ".";

export default {
  title: "MyComponent",
  component: MyComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Hey this is my custom component",
};
