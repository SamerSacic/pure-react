import React, { useState } from "react";
import IncDecButton from "./IncDecButton";

const AudioControls = () => {
  const [volume, setVolume] = useState(0);
  const [treble, setTreble] = useState(12);
  const [mid, setMid] = useState(34);
  const [bass, setBass] = useState(10);

  return (
    <div>
      <h4>Audio Controls</h4>
      <IncDecButton
        onAction={setVolume}
        value={volume}
        label="Volume"
        step="4"
      />
      <IncDecButton onAction={setTreble} value={treble} label="Treble" />
      <IncDecButton onAction={setMid} value={mid} label="Mid" />
      <IncDecButton onAction={setBass} value={bass} label="Bass" />
    </div>
  );
};

export default AudioControls;
