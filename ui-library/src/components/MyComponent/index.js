import React from "react";
import Button from "../Button";
import "./mycomponent.css";

const MyComponent = ({ title, backgroundColor }) => {
  return (
    <div
      className="my-component"
      style={backgroundColor && { backgroundColor }}
    >
      <h1>{title}</h1>
      <Button label="Click me!!" />
    </div>
  );
};

export default MyComponent;
