// /app/tools/page.tsx
"use client";

import Navbar from "@/components/navbar/Navbar";
import { Tools } from "@/components/tools/Tools";
import { useState } from "react";

export default function ToolsPage() {
  const [theme, setTheme] = useState("dark");
  const [langue, setLangue] = useState("Fr");
  const [langueProfil, setLangueProfil] = useState("Fr");

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));
  const toggleLangue = () => {
    setLangue((l) => (l === "Fr" ? "En" : "Fr"));
    setLangueProfil((l) => (l === "Fr" ? "En" : "Fr"));
  };

  return (
    <main className={`app ${theme} ${langue} ${langueProfil}`}>
      <Navbar toggleTheme={toggleTheme} toggleLangue={toggleLangue} />
      <Tools />
    </main>
  );
}
