"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Définis le type du contexte
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  langue: string;
  toggleLangue: () => void;
  langueProfil: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const [langue, setLangue] = useState("Fr");
  const [langueProfil, setLangueProfil] = useState("Fr");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const toggleLangue = () => {
    setLangue((l) => (l === "Fr" ? "En" : "Fr"));
    setLangueProfil((l) => (l === "Fr" ? "En" : "Fr"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, langue, toggleLangue, langueProfil }}>
      <main className={`app ${theme} ${langue} ${langueProfil}`}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans ThemeProvider");
  }
  return context;
};