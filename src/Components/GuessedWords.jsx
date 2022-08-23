import React from "react";
import propTypes from "prop-types";

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWords: propTypes.string.isRequired,
      counterOfWordsMatches: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default function GuessedWords({ guessedWords, counterOfWordsMatches }) {
  let instruccions;
  if (guessedWords.length === 0) {
    instruccions = (
      <div data-test="component-instruccions-children">
        Try to find the correct word
      </div>
    );
  }
  return <div data-test="component-instruccions-father">{instruccions}</div>;
}
