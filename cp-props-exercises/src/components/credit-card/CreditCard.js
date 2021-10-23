import { useEffect, useState } from "react";

import CreditCardBankName from "./CreditCardBankName";
import CreditCardNumber from "./CreditCardNumber";
import CreditCardHolder from "./CreditCardHolder";

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="credit-card-wrapper">
      <div className="credit-card-header">
        <CreditCardBankName name={cardInfo.bankName} />
      </div>
      <div className="credit-card-body">
        <CreditCardNumber number={cardInfo.cardNumber} />
        <div className="credit-card-ccv">
          <span>1234</span>
        </div>
        <div className="credit-card-ex-date">
          <div className="ex-date-text">
            <span>Valid</span>
            <span>Thru</span>
          </div>
          <div className="ex-date">{cardInfo.cardExDate}</div>
        </div>
      </div>
      <div className="credit-card-footer">
        <CreditCardHolder name={cardInfo.holderName} />
      </div>
    </div>
  );
};

export default CreditCard;
