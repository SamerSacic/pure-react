import React, { useState } from "react";
import ReactDOM from "react-dom";

// class OneTimeButton extends React.Component {
//   state = {
//     clicked: false,
//   };

//   handleAction = () => {
//     this.props.onClick();
//     this.setState({ clicked: true });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleAction} disabled={this.state.clicked}>
//           You Can Only Click Me Once
//         </button>
//       </div>
//     );
//   }
// }

// Function Component with state

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleAction = () => {
    onClick();
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleAction} disabled={clicked}>
        You Can Only Click Me Once
      </button>
    </div>
  );
}

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps((steps) => steps + 1);
  }

  return (
    <div>
      <p>Today you've taken {steps} steps</p>
      <button onClick={increment}>I took another step</button>
    </div>
  );
}

function RandomList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

function MultiCounter() {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0,
  });

  const incA = () => {
    setCounts({
      ...counts,
      countA: counts.countA + 1,
    });
  };

  const incB = () => {
    setCounts({
      ...counts,
      countB: counts.countB + 1,
    });
  };

  const badIncA = () => {
    setCounts({
      countA: counts.countA + 1,
    });
  };

  return (
    <>
      <div> A: {counts.countA} </div>
      <div> B: {counts.countB} </div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>
      <button onClick={badIncA}>Increment A Badly</button>
    </>
  );
}

function App() {
  return (
    <div>
      <OneTimeButton onClick={() => alert("Hi")} />
      <hr />
      <StepTracker />
      <hr />
      <RandomList />
      <hr />
      <MultiCounter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
