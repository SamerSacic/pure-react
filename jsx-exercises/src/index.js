import React from "react";
import ReactDom from "react-dom";

function Book() {
  return (
    <div>
      <div className="book">
        <div className="title">The Title</div>
        <Author />
      </div>
      {/* HTML: Leafing and trailing spaces are removed, and so are newlines */}
      {/* <div>Newline Test</div> */}
    </div>
  );
}

function Author() {
  return (
    <>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-345678-910</li>
      </ul>
    </>
  );
}

function BookWithCreateElement() {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "div",
      { className: "book" },
      React.createElement("div", { className: "title" }, "The Title"),
      <AuthorWithCreateElement />
    )
  );
}

function AuthorWithCreateElement() {
  return React.createElement(
    "div",
    {},
    React.createElement("div", { className: "author" }, "The Author"),
    React.createElement(
      "ul",
      { className: "stats" },
      React.createElement("li", { className: "rating" }, "5 starts"),
      React.createElement("li", { className: "isbn" }, "12-345678-910")
    )
  );
}

function Greetings() {
  let username = "root";
  //   let username = undefined;
  //   let username = null;
  //   let username = false;

  return (
    <div>
      {typeof username === "string" ? "Hello username" : "Not logged in"}
    </div>
  );
}

/**
 * ERRORS
 */

// Never name component with first small letter
// Component naming must be PascalCase
function testComponent() {
  return <div>Test</div>;
}

// You cannot return two elements in one component
/*
function TwoElements() {
  return (<div>Element One</div> <div>Element Two</div>);
}
*/

// Program will work but it has an warning:
// Each child in a list should have a unique "key" prop
function TwoElementsWithArray() {
  return [<div>Element One</div>, <div>Element Two</div>];
}

// You cannot have two expression in a single braces
/*
function ExpressionInSingleBraces() {
  const x = 7;
  return (
    x && 5
    x && 7
    );
}
*/

// You cannot use return in the expression
/*
function ReturnInExpression() {
    const hasTitle = true;

    {hasTitle && return (<div>Title</div>)}
}
*/

// It will run the function
// But function must render some elements
// In this case it will throw an error after function call is end
function Alert() {
  return alert("Some Alert");
}

function Table() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Data />
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Data() {
  return (
    <>
      <td>Samer</td>
      <td>Sacic</td>
      <td>Web Developer</td>
    </>
  );
}

ReactDom.render(<Table />, document.querySelector("#root"));
