import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "Data Retrieval Unsuccessful",
        });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <div>
        PostList
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title} </div>)
          : null}
        {error.length ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
