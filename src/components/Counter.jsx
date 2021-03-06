import React, { useEffect, useState } from "react";
import { useStores } from "../hooks/use-stores";
import { observer } from "mobx-react";

function Counter({ setGlobalCount }) {
  const {
    themeStore: { colors },
  } = useStores();

  const [count, setCount] = useState(10);

  return (
    <div
      data-testid="container"
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

export default observer(Counter);
