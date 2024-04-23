import React, { Component } from "react";
import HighOrderCounterComponent from "./HighOrderCounterComponent";

class ClickCounter extends Component {
  render() {
    const { incrementHandler, count } = this.props;
    return (
      <button onClick={incrementHandler}>
        {" "}
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default HighOrderCounterComponent(ClickCounter, 2);
