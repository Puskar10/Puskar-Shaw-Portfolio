"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

 function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <div
        className={
          isLight
            ? "min-h-screen bg-white text-black transition-colors duration-300"
            : "min-h-screen bg-black text-white transition-colors duration-300"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeWrapper");
  }

  return context;
}
export default ThemeWrapper