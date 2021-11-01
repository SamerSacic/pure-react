import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import FileList from "./components/file-list/FileList";

const files = [
  {
    name: "build",
    type: "folder",
    commit: {
      message: "Close #1687, Replace es3ify with Babel ES3 transforms (#1688)",
    },
    time: "2021-10-30 10:24:45",
  },
  {
    name: "docs",
    type: "folder",
    commit: {
      message: "Mention that we're Observable in the API.",
    },
    time: "2021-08-10 15:43:45",
  },
  {
    name: "examples",
    type: "folder",
    commit: {
      message: "Update doc to use test with Enzyme (#1692)",
    },
    time: "2021-09-16 13:15:45",
  },
  {
    name: "logo",
    type: "folder",
    commit: {
      message: "Use Redux logo as favicon on GitBook docs (#1761)",
    },
    time: "2021-08-13 11:36:45",
  },
  {
    name: "src",
    type: "folder",
    commit: {
      message: "Only warn for unexpected key once per key (#1818)",
    },
    time: "2021-10-28 09:12:45",
  },
  {
    name: "test",
    type: "folder",
    commit: {
      message: "Only warn for unexpected key once per key (#1818)",
    },
    time: "2021-10-28 09:12:45",
  },
  {
    name: ".babel",
    type: "file",
    commit: {
      message: "Close #1687, Replace es3ify with Babel ES3 transforms (#1688)",
    },
    time: "2021-10-30 10:24:45",
  },
  {
    name: ".editorconfig",
    type: "file",
    commit: {
      message:
        "editorconfig: do not trim trailing whitespace in Markdown files",
    },
    time: "2021-07-08 15:33:45",
  },
  {
    name: ".eslintignore",
    type: "file",
    commit: {
      message: "Really ignore all node_modules and dist in eslint",
    },
    time: "2021-11-01 10:12:45",
  },
  {
    name: ".flowconfig",
    type: "file",
    commit: {
      message: "Add flow type annotations",
    },
    time: "2021-08-08 11:11:45",
  },
];

const Layout = ({ children }) => {
  return <div className="container mt-3">{children}</div>;
};

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <FileList files={files} />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
