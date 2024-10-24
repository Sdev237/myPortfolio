"use client";

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import Link from 'next/link';

interface NavbarProps {
  toggleTheme: () => void;
  toggleLangue: () => void;
} 
const Navbar: React.FC<NavbarProps> = ({ toggleTheme, toggleLangue })=> {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langue, setLangue] = useState('Fr'); 
  const [profilLink, setProfilLink] = useState('/profil');

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = () => {

    setLangue(langue === 'Fr' ? 'En' : 'Fr');

    setProfilLink(langue === 'Fr' ? '/profile': '/profil');

    toggleLangue();
  };

  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <section className='nav-section row'>
      <nav className={`navi ${isMobile ? 'mobile' : ''} col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
        <div>
          <Link href="">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faLightbulb} />
          </Link>
          <a className='toggle px-3 cursor-pointer' onClick={handleLanguageChange}>
            Langue
          </a>
          <a onClick={() => { toggle(); toggleTheme(); }} className="toggle btn px-3">
            {!isDarkMode ? (
              <FontAwesomeIcon icon={faSun} className="sun" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="moon" />
            )}{' '}
            Theme
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
