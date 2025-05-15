"use client";

import React, { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faHome,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  toggleTheme: () => void;
  toggleLangue: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, toggleLangue }) => {
  const path = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langue, setLangue] = useState("Fr");

  const toggle = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  }, [toggleTheme]);

  const handleLanguageChange = useCallback(() => {
    setLangue((prevLangue) => (prevLangue === "Fr" ? "En" : "Fr"));
    toggleLangue();
  }, [toggleLangue]);

  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <section className="row">
      <nav
        className={`navi ${
          isMobile ? "mobile" : ""
        } col-xs-12 col-sm-12 col-md-12 col-lg-auto px-lg-5`}
        style={{ boxShadow: "9px 10px 9px 0 rgba(0,0,0,0.8)" }}
      >
        <div>
          <Link href="/" className={path === "/" ? "active" : ""}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link href="/tools" className={path === "/tools" ? "active" : ""}>
            <FontAwesomeIcon icon={faLightbulb} />
          </Link>
          <a
            className="toggle px-3 cursor-pointer"
            onClick={handleLanguageChange}
          >
            Langue
          </a>
          <button onClick={toggle} className="toggle btn px-3">
            <FontAwesomeIcon
              icon={isDarkMode ? faMoon : faSun}
              className={isDarkMode ? "moon" : "sun"}
            />{" "}
            Theme
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
