import Room from "./components/Room";
import RandomList from "./components/RandomList";
import AudioControls from "./components/audio/AudioControls";
import AudioControlsV2 from "./components/audio/AudioControlsV2";

const App = () => {
  return (
    <div className="container mt-5">
      <Room />
      <hr />
      <RandomList />
      <hr />
      <AudioControls />
      <hr />
      <AudioControlsV2 />
    </div>
  );
};

export default App;
