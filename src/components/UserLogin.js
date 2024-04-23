import React, { Component } from "react";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    //Ternary Conditional Operator
    return this.state.isLogin ? <div>Hey Nikhil</div> : <div>Hey Guest</div>;

    //element variable
    // let message;
    // if (this.state.isLogin) {
    //   message = <div>Hey Nikhil</div>;
    // } else {
    //   message = <div>Hey Guest</div>;
    // }

    // return <div>{message}</div>;

    //If/else
    // if (this.state.isLogin) {
    //   return <div>Hey Nikhil</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }
  }
}

export default UserLogin;
