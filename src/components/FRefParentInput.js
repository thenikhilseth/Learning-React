import React, { Component } from "react";
import FRefInput from "./FRefInput";

class FRefParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRefParentInput;

//1) We made a ref in parent.
//2) Then we pass it to child component.
