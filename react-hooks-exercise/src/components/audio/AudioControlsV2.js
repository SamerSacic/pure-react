import React, { useState } from "react";
import Volume from "./Volume";

const AudioControlsV2 = () => {
  const [controls, setControls] = useState({
    volume: 23,
    treble: 45,
    mid: 65,
    bass: 12,
  });

  const handleVolume = (value) => {
    setControls({
      ...controls,
      volume: value,
    });
  };

  const handleTrebleVolume = (value) => {
    setControls({
      ...controls,
      treble: value,
    });
  };

  const handleMidVolume = (value) => {
    setControls({
      ...controls,
      mid: value,
    });
  };

  const handleBassVolume = (value) => {
    setControls({
      ...controls,
      bass: value,
    });
  };

  return (
    <div>
      <h4>Audio Controls V2</h4>
      <Volume onAction={handleVolume} value={controls.volume} label="Volume" />
      <Volume
        onAction={handleTrebleVolume}
        value={controls.treble}
        label="Treble"
      />
      <Volume onAction={handleMidVolume} value={controls.mid} label="Mid" />
      <Volume onAction={handleBassVolume} value={controls.bass} label="Bass" />
    </div>
  );
};

export default AudioControlsV2;
