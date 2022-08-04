import "./App.css";
import React, { useState } from "react";
import Congrats from "./Components/Congrats";

function App() {
  const [success, setSuccess] = useState(false);

  setTimeout(() => {
    setSuccess(true);
  }, 2000);

  return (
    <div className="App">
      React App
      <Congrats success={success} />
    </div>
  );
}

export default App;
