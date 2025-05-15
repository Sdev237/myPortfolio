"use client";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Accueil from "@/components/accueil/Accueil";

export default function Home() {
  const { toggleTheme, toggleLangue } = useTheme();

  return (
    <>
      <Navbar toggleTheme={toggleTheme} toggleLangue={toggleLangue} />
      <Accueil />
    </>
  );
}
