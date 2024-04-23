import React, { Component } from "react";
import HighOrderCounterComponent from "./HighOrderCounterComponent";

class HoverCounter extends Component {
  render() {
    const { incrementHandler, count } = this.props;
    return <h2 onMouseOver={incrementHandler}> Hovered {count} times </h2>;
  }
}

export default HighOrderCounterComponent(HoverCounter, 3);
