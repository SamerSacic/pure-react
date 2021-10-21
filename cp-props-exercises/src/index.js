import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";

const App = () => {
  const fromPerson = {
    name: "John Doe",
    address: {
      street: "222 Harvard St.",
      zip: "MA 02139",
      city: "Boston",
      country: "USA",
    },
  };

  const toPerson = {
    name: "Jane Williams",
    address: {
      street: "123 Columbia St.",
      zip: "CA 94101",
      city: "San Francisco",
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

Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired,
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

AddressLabel.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

const Stamp = () => {
  return (
    <div className="stamp">
      <span className="rotate">STAMP</span>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
