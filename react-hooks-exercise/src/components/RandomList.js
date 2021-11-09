import React, { useState } from "react";

const RandomList = () => {
  const [items, setItems] = useState([]);

  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * items.length,
      },
    ]);
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={addNumber}>
        Add Random Number
      </button>
      <ul>
        {items?.map((number) => (
          <li key={number.id}>{number.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomList;
