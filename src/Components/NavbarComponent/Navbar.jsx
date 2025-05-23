import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../NavbarComponent/Navbar.css";
import WLogo from "../assets/WLogo.png";

const Navbar = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "pl", name: "Polski" },
  ];

  // Set initial language and direction from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng") || "en";
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    document.body.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  // Click-outside handler for language dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest(".language-switcher")) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng, () => {
      localStorage.setItem("i18nextLng", lng);
      document.body.dir = lng === "ar" ? "rtl" : "ltr";
    });
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleNavItemClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector(".navbar-container")?.offsetHeight || 130;
      const offset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset - navbarHeight, behavior: "smooth" });
      element.focus(); // Move focus for accessibility
    }
  };

  return (
    <header className="navbar-container">
      <img
        src={WLogo}
        alt="Saji's Restaurant Logo"
        className="nav-logo"
        onLoad={() => setLogoLoaded(true)}
        onError={() => setLogoLoaded(false)}
        style={{ opacity: logoLoaded ? 1 : 0, transition: "opacity 0.3s" }}
      />
      {!logoLoaded && <span className="logo-fallback">Saji's Logo</span>}

      <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`} aria-expanded={isMobileMenuOpen} aria-controls="nav-list">
        <ul className="nav-list" id="nav-list" role="menu">
          <li
            className="nav-item"
            role="menuitem"
            tabIndex="0"
            onClick={(e) => handleNavItemClick(e, "#home")}
            onKeyDown={(e) => e.key === "Enter" && handleNavItemClick(e, "#home")}
          >
            <Link to="/" onClick={(e) => e.preventDefault()}>
              {t("navbar.home")}
            </Link>
          </li>
          <li
            className="nav-item"
            role="menuitem"
            tabIndex="0"
            onClick={(e) => handleNavItemClick(e, "#location")}
            onKeyDown={(e) => e.key === "Enter" && handleNavItemClick(e, "#location")}
          >
            <Link to="/location" onClick={(e) => e.preventDefault()}>
              {t("navbar.location")}
            </Link>
          </li>
          <li
            className="nav-item"
            role="menuitem"
            tabIndex="0"
            onClick={(e) => handleNavItemClick(e, "#contact")}
            onKeyDown={(e) => e.key === "Enter" && handleNavItemClick(e, "#contact")}
          >
            <Link to="/contact" onClick={(e) => e.preventDefault()}>
              {t("navbar.contact")}
            </Link>
          </li>
        </ul>
        <div className="under-line"></div>
        <div className="language-switcher">
          <button
            className="language-toggle"
            onClick={toggleLanguageDropdown}
            aria-expanded={isLanguageDropdownOpen}
            aria-controls="language-dropdown"
            aria-haspopup="true"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && toggleLanguageDropdown()}
          >
            {languages.find((lang) => lang.code === currentLanguage)?.name}
            <span className="dropdown-arrow">▼</span>
          </button>

          {isLanguageDropdownOpen && (
            <ul id="language-dropdown" className="language-dropdown" role="menu">
              {languages.map((language) => (
                <li key={language.code} role="menuitem" tabIndex="0">
                  <button
                    onClick={() => changeLanguage(language.code)}
                    onKeyDown={(e) => e.key === "Enter" && changeLanguage(language.code)}
                    className={currentLanguage === language.code ? "active" : ""}
                  >
                    {language.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <input
        type="checkbox"
        role="button"
        aria-label={t("navbar.menuAriaLabel")}
        className="menu"
        checked={isMobileMenuOpen}
        onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </header>
  );
});

export default Navbar;