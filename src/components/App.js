import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [state, changestate] = useState(false);
  const parashow = () => {
    changestate(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={parashow}>
        Click Me To Show Para
      </button>
      <div>
        {state ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
