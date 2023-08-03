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
//eslint-disable-next-line
import Subscribe from "./components/Subscribe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Nikhil" framework="React 16">
          {" "}
          <button> Action </button>{" "}
        </Greet>
        <Greet name="John" framework="React 18">
          {" "}
          This is Children Props, just example{" "}
        </Greet>
        <Welcome name="Nikhil" />
        <Subscribe />
        {/* <Old /> */}
      </div>
    );
  }
}

export default App;
