import React, { useEffect, useState } from "react";
import { useStores } from "../hooks/use-stores";

function Counter({ setGlobalCount }) {
  const {
    themeStore: { colors },
  } = useStores();

  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("BORN");
    return () => {
      console.log("DIED");
    };
  }, []);

  return (
    <div
      style={{ color: colors.foreground, backgroundColor: colors.background }}
    >
      Count: {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
          setGlobalCount();
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
