import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

/*
  Configured for Hot Module Replacement
*/

const root = document.getElementById("root");

let render = () => {
  const App = require("./App").default;
  ReactDOM.render(<App />, root);
};

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

render();
