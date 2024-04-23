import React, { Component } from "react";

const HighOrderCounterComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementHandler={this.incrementHandler}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default HighOrderCounterComponent;
