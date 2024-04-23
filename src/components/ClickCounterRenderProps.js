import React, { Component } from "react";

class ClickCounterRenderProps extends Component {
  render() {
    const { incrementHandler, count } = this.props;
    return (
      <button onClick={incrementHandler}>
        {" "}
        Clicked {count} times with Render Props
      </button>
    );
  }
}

export default ClickCounterRenderProps;
