import { action, computed, makeObservable, observable, reaction } from "mobx";

const COLORS = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

class ThemeStore {
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
