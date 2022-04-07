import React from "react";
import "./App.scss";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="app">
      <span className="title">Custom Hooks</span>
      <span>{`useWindowSize: ${width} / ${height} [px]`}</span>
    </div>
  );
}

export default App;
