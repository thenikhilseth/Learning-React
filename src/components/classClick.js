import React, { Component } from "react";

export default class classClick extends Component {
  clickResponder = () => {
    console.log("testing class click responder");
  };
  render() {
    return (
      <div>
        <button onClick={this.clickResponder}>Class Click </button>
      </div>
    );
  }
}
