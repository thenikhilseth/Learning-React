import React, { Component } from "react";

class HoverCounterRenderProps extends Component {
  render() {
    const { incrementHandler, count } = this.props; //these props are coming from the render function inside App.js file
    return (
      <h2 onMouseOver={incrementHandler}>
        {" "}
        Hovered {count} times with Render Props{" "}
      </h2>
    );
  }
}

export default HoverCounterRenderProps;
