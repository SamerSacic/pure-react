import React from "react";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((response) => {
        this.setState({ isLoading: true });
        const posts = response.data.data.children.map((obj) => obj.data);
        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  render() {
    const { posts, error, isLoading } = this.state;

    return (
      <div>
        {error !== null ? `Something went wrong: ${error}` : null}
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {!isLoading ? "Loading...." : null}
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reddit;
