const content = (componentName) => `/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from ".";

describe("${componentName}", () => {
  const renderComponent = () => render(<${componentName} />);

  // Not a valid test
  it("renders", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });
});
`;

module.exports = (componentName) => ({
  content: content(componentName),
  extension: `.test.js`,
});
