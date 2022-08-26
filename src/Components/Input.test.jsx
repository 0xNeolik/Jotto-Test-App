import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import Input from "./Input.jsx";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { secretWord: "party" };

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Input {...setUpProps} />);
};

test("don´t throw a error with the props", () => {
  checkProps(Input, defaultProps);
});

test("Inpur renders without a error", () => {
    const wrapper = setUp()
    const InputComponent = findByTestAttribute(
      wrapper,
      "component-input"
    );
    expect(InputComponent.length).toBe(1);
  });
