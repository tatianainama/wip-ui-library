/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Button from ".";

describe("Button component", () => {
  const renderComponent = () => render(<Button label="testing!!!!" />);

  it("renders", () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it("creates button", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("has classnames", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("button")).toHaveClass("storybook-button");
  });
});
