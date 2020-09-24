import React, { createContext, useState, useContext } from "react";

import Blue from "../Styles/Themes/blue";
import Light from "../Styles/Themes/light";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;

    on: string;
    off: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@meu-dimdim:theme');
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return Blue
    }
  });

  const toggleTheme = () => {
    if (theme.title === "Blue") {
      setTheme(Light);
      localStorage.setItem('@meu-dimdim:theme', JSON.stringify(Light));
    } else {
      setTheme(Blue);
      localStorage.setItem('@meu-dimdim:theme', JSON.stringify(Blue));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
