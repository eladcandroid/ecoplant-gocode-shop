import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

import Counter from "./components/Counter";
import { observer } from "mobx-react";
import { useStores } from "./hooks/use-stores";

const initialCounters = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "green" },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);
  const [globalCount, setGlobalCount] = useState(counters.length * 10);
  const input = useRef(null);

  const {
    themeStore: { themeName, toggleTheme },
  } = useStores();

  useEffect(() => {
    console.log("USE EFFECT 1");
    document.title = `Global Count: ${globalCount}`;
  }, [globalCount]);

  useEffect(() => {
    input.current?.focus();
  }, []);

  const handleSetGlobalCount = useCallback(() => {
    setGlobalCount(globalCount + 1);
  }, [globalCount]);

  return (
    <div>
      <button
        onClick={() => setCounters([{ id: counters.length + 1 }, ...counters])}
      >
        Add Counter
      </button>
      <br />
      <br />
      <div>Global Count: {globalCount}</div>
      {counters.map(({ id, color }) => (
        <Counter key={id} color={color} setGlobalCount={handleSetGlobalCount} />
      ))}
      <br />
      <br />
      <button onClick={() => setCounters(counters.slice(1))}>
        Remove First Counter
      </button>
      <button onClick={toggleTheme}>Current theme: {themeName}</button>
    </div>
  );
}

export default observer(App);
