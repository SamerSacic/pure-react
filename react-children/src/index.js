import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const IconButton = ({ children }) => {
  return (
    <button>
      <i className="fa fa-bullseye"></i>
      {children}
    </button>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <IconButton>Do The Thing</IconButton>
  </React.StrictMode>,
  document.getElementById("root")
);
