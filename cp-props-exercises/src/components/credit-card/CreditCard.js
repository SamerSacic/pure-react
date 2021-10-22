import { useEffect, useState } from "react";

import CreditCardBankName from "./CreditCardBankName";
import CreditCardNumber from "./CreditCardNumber";
import CreditCardHolder from "./CreditCardHolder";

const CreditCard = ({ cardInfo }) => {
  const [creditCardNumber, setCreditCardNumber] = useState();

  useEffect(() => {
    const number = groupNumberInFourParts(cardInfo.cardNumber);
    setCreditCardNumber(number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="credit-card-wrapper">
      <div className="credit-card-header">
        <CreditCardBankName name={cardInfo.bankName} />
      </div>
      <div className="credit-card-body">
        <CreditCardNumber number={creditCardNumber} />
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

function groupNumberInFourParts(number) {
  return number.toString().match(/\d{1,4}/g);
}

export default CreditCard;
