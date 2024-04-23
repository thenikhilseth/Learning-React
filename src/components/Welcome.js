import React, { Component } from "react";

// Class component

class Welcome extends Component {
  render() {
    return (
      <h1>
        {" "}
        Welcome class compoents to react. This lecture is recorded by{" "}
        {this.props.name}
      </h1>
    );
  }
}

export default Welcome;
