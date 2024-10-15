"use client";

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import Link from 'next/link';

const Navbar = ({ toggleTheme, toggleLangue }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langue, setLangue] = useState('Fr'); 
  const [profilLink, setProfilLink] = useState('/profil');

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = () => {

    setLangue(langue === 'Fr' ? 'En' : 'Fr');

    setProfilLink(langue === 'Fr' ? '/profile' : '/profil');

    toggleLangue();
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className='nav'>
      <nav className="navi">
        <div  className="navbar-container">
          <div>
            <Link href="">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link href="">
              <FontAwesomeIcon icon={faLightbulb} />
            </Link>
            <a className='toggle px-3' >
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
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
