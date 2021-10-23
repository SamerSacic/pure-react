import CreditCardBankName from "./CreditCardBankName";
import CreditCardNumber from "./CreditCardNumber";
import CreditCardHolder from "./CreditCardHolder";
import CreditCardCCV from "./CreditCardCCV";

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="credit-card-wrapper">
      <div className="credit-card-header">
        <CreditCardBankName name={cardInfo.bankName} />
      </div>
      <div className="credit-card-body">
        <CreditCardNumber number={cardInfo.cardNumber} />
        <CreditCardCCV number={cardInfo.cardCCV} />
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
