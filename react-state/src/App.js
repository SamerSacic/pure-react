import CountingParent from "./components/CountingParent";
import StateVersions from "./components/StateVersions";

const App = () => {
  return (
    <div>
      <CountingParent />
      <hr />
      <CountingParent />
      <hr />
      <CountingParent />
      <hr />
      <br />
      <StateVersions />
    </div>
  );
};

export default App;
