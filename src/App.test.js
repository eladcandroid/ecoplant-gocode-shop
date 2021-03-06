import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "mobx-react";
import { ThemeStore } from "./store/ThemeStore";
import { cleanup } from "@testing-library/react";
import Counter from "./components/Counter";
import COLORS from "./store/COLORS";

let themeStore, component;
describe("Counter Component with theme", () => {
  beforeEach(() => {
    themeStore = new ThemeStore();
    component = render(
      <Provider themeStore={themeStore}>
        <Counter>Check</Counter>
      </Provider>
    );
  });
  afterEach(cleanup);

  test("renders light theme", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: COLORS.light.foreground });
  });

  test("toggle theme 1 time", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: COLORS.light.foreground });

    themeStore.toggleTheme();
    expect(container).toHaveStyle({ color: COLORS.dark.foreground });
  });

  test("toggle theme 2 times", () => {
    const container = component.getByTestId("container");
    expect(container).toHaveStyle({ color: COLORS.light.foreground });

    themeStore.toggleTheme();
    expect(container).toHaveStyle({ color: COLORS.dark.foreground });
  });
});
