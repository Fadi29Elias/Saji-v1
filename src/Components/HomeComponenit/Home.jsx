import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {t("home.TitleLine1")} <span>{t("home.TitleLine2")}</span>
        </h1>
        <p className="hero-subtitle">{t("home.Subtitle")}</p>
        <button className="cta-button">{t("home.CtaButton")}</button>
      </div>
    </section>
  );
}

export default Home;
