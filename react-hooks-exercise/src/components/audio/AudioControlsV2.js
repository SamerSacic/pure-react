import React, { useState } from "react";
import IncDecButton from "./IncDecButton";

const AudioControlsV2 = () => {
  const [controls, setControls] = useState({
    volume: 23,
    treble: 45,
    mid: 65,
    bass: 12,
  });

  const incDecVolume = (value) => {
    setControls({
      ...controls,
      volume: value,
    });
  };

  const incDecTreble = (value) => {
    setControls({
      ...controls,
      treble: value,
    });
  };

  const incDecMid = (value) => {
    setControls({
      ...controls,
      mid: value,
    });
  };

  const incDecBass = (value) => {
    setControls({
      ...controls,
      bass: value,
    });
  };

  return (
    <div>
      <h4>Audio Controls V2</h4>
      <IncDecButton
        onAction={incDecVolume}
        value={controls.volume}
        label="Volume"
      />
      <IncDecButton
        onAction={incDecTreble}
        value={controls.treble}
        label="Treble"
      />
      <IncDecButton onAction={incDecMid} value={controls.mid} label="Mid" />
      <IncDecButton onAction={incDecBass} value={controls.bass} label="Bass" />
    </div>
  );
};

export default AudioControlsV2;
