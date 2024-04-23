import React, { Component } from "react";

class CounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState((prevState) => {
      return { count: prevState + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementHandler)}</div> //Passing count and increment handler as props to App.js file
    );
  }
}

export default CounterRenderProps;
