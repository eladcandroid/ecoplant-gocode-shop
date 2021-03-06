import { action, computed, makeObservable, observable, reaction } from "mobx";

import COLORS from "./COLORS";

export class ThemeStore {
  @observable
  isDark = false;

  @action
  toggleTheme = () => {
    this.isDark = !this.isDark;
  };

  @computed get colors() {
    return this.isDark ? COLORS.dark : COLORS.light;
  }

  @computed get themeName() {
    return this.isDark ? "DARK" : "LIGHT";
  }

  constructor() {
    makeObservable(this);

    reaction(
      () => this.isDark,
      () => console.log("IS DARK", this.isDark)
    );
  }
}

export default new ThemeStore();
