import React from "react";
import PropTypes from "prop-types";

function Input({ secretWord }) {
  const [guessedWord, setGuessedWord] = React.useState("");

  const clickButton = (event) => {
    event.preventDefault;
  };

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter Guess"
        />
        <button
          className="btn btn-primary mb-2"
          data-test="submit-button"
          onclick={clickButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
