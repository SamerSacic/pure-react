import React from "react";
import ReactDOM from "react-dom";

function Samer() {
  const firstName = "Samer";
  const lastName = "Sacic";

  return React.createElement(Person, {
    age: 33,
    name: firstName + " " + lastName,
    className: "person",
  });
}

function Person({ age, name, className }) {
  return (
    <div className={className}>
      <ul>
        <li>Age: {age}</li>
        <li>Name: {name}</li>
      </ul>
      <div>
        <Hello name="David" />
      </div>
      <div>
        <HelloWithArrow name="John" />
      </div>
      <div>
        <HelloWithES6 name="Elma" />
      </div>
      <div>
        <HelloWithMultiple firstName="Elma" lastName="Mujic" />
      </div>
    </div>
  );
}

function Hello(props) {
  return <span>Hello, {props.name}</span>;
}

const HelloWithArrow = (props) => {
  return <strong>Hello with Arrow, {props.name}</strong>;
};

const HelloWithES6 = ({ name }) => {
  return <p>Hello with ES6, {name}</p>;
};

const HelloWithMultiple = ({ firstName, lastName }) => {
  const name = firstName + " " + lastName;

  return <p>Hello with Multiple, {name}</p>;
};

ReactDOM.render(<Samer />, document.getElementById("root"));
