import React, { useState, useEffect, useRef, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import ThemeContext from "./ThemeContext";

const initialCounters = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "green" },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);
  const [globalCount, setGlobalCount] = useState(counters.length * 10);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [counterColor, setCounterColor] = useState("purple");
  const input = useRef(null);

  useEffect(() => {
    console.log("USE EFFECT 1");
    document.title = `Global Count: ${globalCount}`;
  }, [globalCount]);

  useEffect(() => {
    input.current?.focus();
  }, []);

  useEffect(() => {
    // SERVER
    console.log("USE EFFECT 3", backgroundColor);
  }, [backgroundColor]);

  const handleSetGlobalCount = useCallback(() => {
    setGlobalCount(globalCount + 1);
  }, [globalCount]);

  const [globalColor, setGlobalColor] = useState("pink");

  return (
    <ThemeContext.Provider value={{ globalColor, setGlobalColor }}>
      <div style={{ backgroundColor }}>
        Button Color:
        <input
          ref={input}
          type="text"
          value={counterColor}
          onChange={(e) => setCounterColor(e.target.value)}
        />
        <br />
        <button
          onClick={() =>
            setCounters([{ id: 4, color: counterColor }, ...counters])
          }
        >
          Add Counter
        </button>
        <br />
        <br />
        <div>Global Count: {globalCount}</div>
        {counters.map(({ id, color }) => (
          <Counter
            key={id}
            color={color}
            setGlobalCount={handleSetGlobalCount}
          />
        ))}
        <br />
        <br />
        <button onClick={() => setCounters(counters.slice(1))}>
          Remove First Counter
        </button>
        <br />
        <br />
        <button onClick={() => setBackgroundColor("grey")}>Dark Bg</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
