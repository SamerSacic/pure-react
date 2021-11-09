import React, { useState } from "react";
import Volume from "./Volume";

const AudioControls = () => {
  const [volume, setVolume] = useState(0);
  const [treble, setTreble] = useState(12);
  const [mid, setMid] = useState(34);
  const [bass, setBass] = useState(10);

  return (
    <div>
      <h4>Audio Controls</h4>
      <Volume onAction={setVolume} value={volume} label="Volume" step="4" />
      <Volume onAction={setTreble} value={treble} label="Treble" />
      <Volume onAction={setMid} value={mid} label="Mid" />
      <Volume onAction={setBass} value={bass} label="Bass" />
    </div>
  );
};

export default AudioControls;
