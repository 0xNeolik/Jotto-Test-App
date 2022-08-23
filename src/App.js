import "./App.css";
import React, { useState } from "react";
import Congrats from "./Components/Congrats";
import GuessedWords from "./Components/GuessedWords";

function App() {
  const [success, setSuccess] = useState(false);
  let guessedWords = [];
  const [counterOfWordsMatches, setCounterOfWordsMatches] = useState();

  setTimeout(() => {
    guessedWords.push("train");
    setCounterOfWordsMatches(1);
    setSuccess(true);
  }, 2000);

  return (
    <div className="App">
      React App
      <GuessedWords
        guessedWords={guessedWords}
        counterOfWordsMatches={counterOfWordsMatches}
      />
      <Congrats success={success} />
    </div>
  );
}

export default App;
