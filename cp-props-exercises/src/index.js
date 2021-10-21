import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";

const App = () => {
  const fromPerson = {
    name: "John Done",
    address: {
      street: "222 Harvard St.",
      zip: "MA 02139",
      city: "Boston",
      country: "USA",
    },
  };

  const toPerson = {
    name: "John Done",
    address: {
      street: "222 Harvard St.",
      zip: "MA 02139",
      city: "Boston",
      country: "USA",
    },
  };

  return (
    <div className="content">
      <Envelope toPerson={toPerson} fromPerson={fromPerson} />
    </div>
  );
};

const Envelope = ({ toPerson, fromPerson }) => {
  return (
    <div className="envelope-wrapper">
      <div className="envelope-header">
        <div className="envelope-sender">
          <AddressLabel person={toPerson} />
        </div>
        <Stamp />
      </div>
      <div className="envelope-body">
        <div className="envelope-receiver">
          <AddressLabel person={fromPerson} />
        </div>
      </div>
    </div>
  );
};

const AddressLabel = ({ person }) => {
  const { street, zip, city, country } = person.address;

  return (
    <div className="address-wrapper">
      <div className="address-details">
        <p>{person.name}</p>
        <ul>
          <li>
            <p>{street}</p>
          </li>
          <li>
            <p>
              {city}, {zip}, {country}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Stamp = () => {
  return (
    <div className="stamp">
      <span className="rotate">STAMP</span>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
