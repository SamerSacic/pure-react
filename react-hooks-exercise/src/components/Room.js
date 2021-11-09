import React, { useState } from "react";

const Room = () => {
  const [lightswitch, setLightswitch] = useState(false);

  const handleLightswitch = () => {
    setLightswitch(!lightswitch);
  };

  return (
    <div>
      <button
        className={`btn ${lightswitch ? "btn-warning" : "btn-secondary"}`}
        onClick={handleLightswitch}
      >
        {lightswitch ? "The room is lit" : "The Room is dark"}
      </button>
    </div>
  );
};

export default Room;
