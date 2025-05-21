import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../NavbarComponent/Navbar.css";
import WLogo from "../assets/WLogo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "pl", name: "Polski" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === "ar" ? "rtl" : "ltr";
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Function to close mobile menu when a nav item is clicked
  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <img src={WLogo} alt="Saji's Restaurant Logo" className="nav-logo" />

      <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={handleNavItemClick}>
            <a href="#home">{t("navbar.home")}</a>
          </li>
          <li className="nav-item" onClick={handleNavItemClick}>
            <a href="#location">{t("navbar.location")}</a>
          </li>
          <li className="nav-item" onClick={handleNavItemClick}>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
        </ul>
        <div className="under-line"></div>
        <div className="language-switcher">
          <button
            className="language-toggle"
            onClick={toggleLanguageDropdown}
            aria-expanded={isLanguageDropdownOpen}
            aria-haspopup="true"
          >
            {languages.find((lang) => lang.code === currentLanguage)?.name}
            <span className="dropdown-arrow">▼</span>
          </button>

          {isLanguageDropdownOpen && (
            <ul className="language-dropdown">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    onClick={() => changeLanguage(language.code)}
                    className={
                      currentLanguage === language.code ? "active" : ""
                    }
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
}

export default Navbar;
