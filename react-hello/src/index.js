import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return (
    <div>
      <Hello /> <World />!
    </div>
  );
}

function Hello() {
  return <span>Hello</span>;
}

function World() {
  return <span>World</span>;
}

// How React render JSX syntax
function HelloWithCreateElement() {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, "Child1"),
    React.createElement(
      "div",
      {},
      "Child2",
      React.createElement("div", {}, "Child2_child")
    )
  );
}

// How React render components with props
function SongName(props) {
  // return <span className="song-name">{props.song.name}</span>
  // compiled TO:
  return React.createElement(
    "span",
    { className: "song-name" },
    props.song.name
  );
}

// How to avoid that components must return enclosing tag
// To avoid that you use React.Fragment
// Or with JSX <> </> empty JSX tags
function NameCells() {
  // Each component must return elements in a single enclosing tag
  // User React.Fragment to avoid that
  //   return (
  //     <React.Fragment>
  //       <td>Some Column 1 </td>
  //       <td>Some Column 2</td>
  //     </React.Fragment>
  //   );

  // React.Fragment in JSX syntax looks like this:
  return (
    <>
      <td>Some Column 1</td>
      <td>Some Column 2</td>
    </>
  );
}

// How to insert pure JS wth JSX components
// Since this will be compiled to JS, the JS inside the braces must return the expression
// An expression produce a value
// These are expressions:
// 1 + 2
// buttonLabel
// aFunctionCall()
// aFunctionName

// Statement do not produce the value and cannot be used in JSX
// Here an example of statements:
// const a = 5
// if(true) { 17; }
// while(1 < 7) { i++ }
function SubmitButton() {
  const buttonLabel = "Submit";
  return <button>{buttonLabel}</button>;
}

// How to use the conditional logic if we cannot use if in JSX?
// There a couple of ways:
function ValidateIndicator() {
  const isValid = true;

  // Ternary operator
  // return <span>{isValid ? "valid" : "not-valid"}</span>;

  // Boolean operators
  return (
    <span>
      {isValid && "valid"}
      {!isValid && "not-valid"}
    </span>
  );
}

// JSX require to close every tag
// DO THIS:
// return <br />;
// return <input type="text" ... />
// return <li>text</li>

// DO NOT DO THIS:
// return <br>;
// return <input type="text" ...>
// return <li>text

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
