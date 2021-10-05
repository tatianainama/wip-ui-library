const content = (componentName) => `import React from "react";

import ${componentName} from ".";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
  argTypes: {},
};

const Template = (args) => <${componentName} {...args} />;

export const Story = Template.bind({});
Story.args = {};
`;

module.exports = (componentName) => ({
  content: content(componentName),
  extension: `.stories.js`,
});
