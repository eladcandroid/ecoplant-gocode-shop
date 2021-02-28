import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";

const initialCounters = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "green" },
];
function App() {
  const [counters, setCounters] = useState(initialCounters);
  return (
    <div>
      {counters.map(({ id, color }) => (
        <Counter key={id} color={color} />
      ))}
      <button
        onClick={() => setCounters([{ id: 4, color: "purple" }, ...counters])}
      >
        Add Counter
      </button>
    </div>
  );
}

export default App;
