"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Accueil from '@/components/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '@/components/Footer';
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
    </main>
  );
}
