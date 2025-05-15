"use client";
import { useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import { Tools } from "@/components/tools/Tools";

export default function ToolsPage() {
  const { toggleTheme, toggleLangue } = useTheme();

  return (
    <>
      <Navbar toggleTheme={toggleTheme} toggleLangue={toggleLangue} />
      <Tools />
    </>
  );
}