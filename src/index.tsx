import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

/* Since typescript is not working with createRoot */
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
