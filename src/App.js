import logo from "./logo.svg";
import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from React</h1>
        <Weather city="" />
      </header>
    </div>
  );
}

export default App;
