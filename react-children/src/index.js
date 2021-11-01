import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const IconButton = ({ children }) => {
  return (
    <button className="btn btn-light">
      <i className="fas fa-bullseye me-1 text-danger"></i>
      {children}
    </button>
  );
};

const Nav = ({ children }) => {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
    );
  }

  return <ul className="nav">{items}</ul>;
};

const NavItem = ({ url, children }) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

const Menu = () => {
  return (
    <>
      <Nav>
        <NavItem url="/"> Home </NavItem>
        <NavItem url="/about"> About </NavItem>
        <NavItem url="/contact"> Contact </NavItem>
      </Nav>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById("root")
);
