import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../ThemeContext";

function Counter({ color, setGlobalCount }) {
  const { globalColor, setGlobalColor } = useContext(ThemeContext);
  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log("BORN");
    return () => {
      console.log("DIED");
    };
  }, []);

  return (
    <div style={{ color, backgroundColor: globalColor }}>
      Count: {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
          setGlobalCount();
          setGlobalColor(color);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
