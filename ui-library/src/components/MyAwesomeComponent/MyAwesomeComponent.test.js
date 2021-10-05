/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

import MyAwesomeComponent from ".";

describe("MyAwesomeComponent", () => {
  const renderComponent = () => render(<MyAwesomeComponent />);

  // Not a valid test
  it("renders", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });
});
