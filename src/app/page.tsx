"use client";

import React, { useState } from 'react';
import styles from "./page.module.css";
import Navbar from './../components/Navbar';
import Accueil from '@/components/Accueil';
import NavGithub from '@/components/NavGithub';


export default function Home() {

  const [theme, setTheme] = useState('dark');
  const [langue, setLangue] = useState('Fr');
  
  const [langueProfil, setLangueProfil] = useState('Fr');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLangue = () => {
    setLangue(langue === 'Fr' ? 'En' : 'Fr');
    
    setLangueProfil(langueProfil === 'Fr' ? 'En' : 'Fr');
  };

  return (
    <main  className={`app ${theme} ${langue} ${langueProfil}`}>
      <Navbar toggleTheme={toggleTheme} toggleLangue={toggleLangue} />
      
      <Accueil />
      <p>Hi sap, how's it going !!</p>
    </main>
  );
}
