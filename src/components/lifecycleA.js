import React, { Component } from "react";

class lifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nikhil",
    };
    console.log("LifecycleA constructor");
  }

  changeState = () => {
    this.setState({
      name: "Seth",
    });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("static method");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnpashotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>changeState</button>
      </div>
    );
  }
}

export default lifecycleA;
