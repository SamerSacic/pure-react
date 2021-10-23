const CreditCardNumber = ({ number }) => {
  const parts = number.toString().match(/\d{1,4}/g);

  return (
    <div className="credit-card-number">
      {parts.map((group, index) => (
        <span key={index}>{group}</span>
      ))}
    </div>
  );
};

export default CreditCardNumber;
