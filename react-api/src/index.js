import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";

const App = () => {
  // Fetch Data with axios
  // axios is a library
  axios
    .get(`http://www.reddit.com/r/reactjs.json`)
    .then((response) => {
      const posts = response.data.data.children.map((obj) => obj.data);

      console.log(posts);
    })
    .catch((error) => {
      console.log(error);
    });

  // Fetch data with built-in * fetch() * JavaScript Function
  // fetch(`http://www.reddit.com/r/reactjs.json`)
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     }

  //     throw new Error("Request Failed!!!!");
  //   })
  //   .then((json) => {
  //     const posts = json.data.data.children.map((obj) => obj.data);
  //     console.log(posts);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return <div>Hello</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
