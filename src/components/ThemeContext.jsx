// ThemeContext.js
import { createContext, useState } from "react";

const ThemeContext = createContext();

const userPrefersDarkMode = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(userPrefersDarkMode());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

