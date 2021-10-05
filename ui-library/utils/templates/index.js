const componentStories = require("./component.stories");
const componentTests = require("./component.test");
const componentStyles = require("./component.css");

const content = (componentName) => `import React from "react";
import PropTypes from "prop-types";
import "./${componentName}.css";

const ${componentName} = () => <>${componentName}</>;

${componentName}.propTypes = {};

${componentName}.defaultProps = {};

export default ${componentName};
`;

const component = (componentName) => ({
  content: content(componentName),
  name: "index",
  extension: ".js",
});

module.exports = [component, componentStories, componentTests, componentStyles];
