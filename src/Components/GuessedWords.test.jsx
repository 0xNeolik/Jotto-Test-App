import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords.jsx";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = [{ guessedWords: "train", counterOfWordsMatches: 3 }];

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("don´t throw a error with the props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are not word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("renders without a error", () => {
    const component = findByTestAttribute(
      wrapper,
      "component-instruccions-father"
    );
    expect(component.length).toBe(1);
  });
  test("render instruccions to guess a word", () => {
    const instruccions = findByTestAttribute(
      wrapper,
      "component-instruccions-children"
    );
    expect(instruccions.text().length).not.toBe(0);
  });
});
