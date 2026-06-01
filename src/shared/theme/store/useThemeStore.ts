import { create } from "zustand";
import themes from "../../theme/constants";

type ThemeName = keyof typeof themes;

interface ThemeState {
  theme: ThemeName;
  COLORS: (typeof themes)[ThemeName]["COLORS"];
  TYPOGRAPHY: (typeof themes)[ThemeName]["TYPOGRAPHY"];
  allThemes: ThemeName[];

  setTheme: (theme: ThemeName) => void;
}

const defaultTheme = Object.keys(themes)[0] as ThemeName;

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  COLORS: themes[defaultTheme].COLORS,
  TYPOGRAPHY: themes[defaultTheme].TYPOGRAPHY,
  allThemes: Object.keys(themes) as ThemeName[],

  setTheme: (theme: ThemeName) => {
    if (!themes[theme]) return;
    set({
      theme: theme,
      COLORS: themes[theme].COLORS,
      TYPOGRAPHY: themes[theme].TYPOGRAPHY,
    });
  },
}));
