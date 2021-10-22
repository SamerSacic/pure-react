import PropTypes from "prop-types";

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

export default AddressLabel;
