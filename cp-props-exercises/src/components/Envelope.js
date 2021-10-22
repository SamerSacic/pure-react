import PropTypes from "prop-types";

import AddressLabel from "./AddressLabel";
import Stamp from "./Stamp";

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

export default Envelope;
