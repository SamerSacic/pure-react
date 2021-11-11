import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const InputExample = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <br />
      <label htmlFor="inputExample">Input Example</label>
      <br />
      <input
        id="inputExample"
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

const TrickInput = () => {
  const [text, setText] = useState("try typing something");

  const handleChange = (event) => {
    setText("haha nopeee!!!");
  };

  return (
    <div>
      <br />
      <label htmlFor="trickInput">Trick Input</label>
      <br />
      <input id="trickInput" type="text" value={text} onChange={handleChange} />
    </div>
  );
};

const NoNumbersInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    let text = event.target.value;

    setText(text.replace(/[0-9]/g, ""));
  };

  console.log(text);

  return (
    <div>
      <br />
      <label htmlFor="noNumberInput">No Number Input</label>
      <br />
      <input
        id="noNumberInput"
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

const EasyInput = () => {
  return <input type="text" />;
};

const RefInput = () => {
  const input = useRef();

  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  };

  return (
    <div>
      <br />
      <label htmlFor="inputRef">Ref Input</label>
      <br />
      <input id="inputRef" type="text" ref={input} />
      <br />
      <br />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ maxWidth: "300px" }}>
      <h4>Controlled Inputs</h4>
      <InputExample />
      <TrickInput />
      <NoNumbersInput />
      <hr />
      <h4>Uncontrolled Inputs</h4>
      <EasyInput />
      <h4>Input with Refs</h4>
      <RefInput />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
