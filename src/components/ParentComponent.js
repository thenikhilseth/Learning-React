import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComponent from "./MemoComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nikhil",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Nikhil",
      });
    }, 2000);
  }
  render() {
    console.log("Rendering Parent Component");
    return (
      <div>
        ParentComponent
        <MemoComponent name={this.state.name} />
        {/* <RegularComponent name={this.props.name} />
        <PureComp name={this.props.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;
