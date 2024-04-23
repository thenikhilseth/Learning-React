import React, { Component } from "react";

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "react",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`Submit working`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Username </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react"> React </option>
            <option value="angular"> Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default form;
