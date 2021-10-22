import React from "react";
import ReactDOM from "react-dom";

import Envelope from "./components/Envelope";
import CreditCard from "./components/credit-card/CreditCard";

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

  const cardInfo = {
    holderName: "Samer Sacic",
    cardNumber: 1234567887654321,
    cardExDate: "08/24",
    bankName: "Big Bank, Inc.",
  };

  return (
    <div className="content">
      <Envelope toPerson={toPerson} fromPerson={fromPerson} />
      <div className="card-content">
        <CreditCard cardInfo={cardInfo} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
