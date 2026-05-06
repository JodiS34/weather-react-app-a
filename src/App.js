import logo from "./logo.svg";
import React from "react";
import Weather from "./Weather";
import Searchengine from "./Searchengine";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather city="" />
      </header>
    </div>
  );
}

export default App;
