import React, { useState } from "react";

function Counter({ color }) {
  const [count, setCount] = useState(10);
  return (
    <div style={{ color }}>
      Count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
