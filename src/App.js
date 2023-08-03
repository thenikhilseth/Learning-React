// eslint-disable-next-line
import React, { Component } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line
import Greet from "./components/Greet";
// eslint-disable-next-line
import Welcome from "./components/Welcome";
//eslint-disable-next-line
import Old from "./components/Old";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Old />
      </div>
    );
  }
}

export default App;
