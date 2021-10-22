const CreditCardNumber = ({ number }) => {
  return (
    <div className="credit-card-number">
      {number?.map((group, index) => (
        <span key={index}>{group}</span>
      ))}
    </div>
  );
};

export default CreditCardNumber;
