import { createContext, useContext, useEffect, useState } from "react";
import colors from "tailwindcss/colors";

const THEME_KEY = "sz-theme";

export const THEME = {
  dark: "dark",
  light: "light",
} as const;

type Theme = typeof THEME[keyof typeof THEME];
type SetTheme = React.Dispatch<React.SetStateAction<Theme | null>>;

const ThemeContext = createContext<
  { theme: Theme | null; setTheme: SetTheme } | undefined
>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(() =>
    typeof window !== "undefined"
      ? localStorage[THEME_KEY] === THEME.dark ||
        (!(THEME_KEY in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? THEME.dark
        : THEME.light
      : null
  );

  useEffect(() => {
    if (!theme) {
      return;
    }

    if (theme === THEME.dark) {
      document.documentElement.classList.add(THEME.dark);
      localStorage[THEME_KEY] = THEME.dark;
    } else {
      document.documentElement.classList.remove(THEME.dark);
      localStorage[THEME_KEY] = THEME.light;
    }

    let metaThemeColor = document.head.querySelector(
      'meta[name="theme-color"]'
    );
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.prepend(metaThemeColor);
    }
    metaThemeColor.setAttribute(
      "content",
      theme === THEME.dark ? colors.stone["900"] : colors.stone["100"]
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
