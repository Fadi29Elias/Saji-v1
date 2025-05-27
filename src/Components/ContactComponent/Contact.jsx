import React from "react";
import { Phone, Email } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "../ContactComponent/Contact.css";

function Contact() {
  const { t } = useTranslation("contact"); // Specify the "contact" namespace

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">{t("title")}</h2>
        <div className="underline" />
      </div>

      <div className="contact-content">
        {/* Phone Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <Phone className="contact-icon" />
            <h3 className="contact-card-title">{t("phone")}</h3>
          </div>
          <a href="tel:+48503419238" className="contact-info">
            +48 503 419 238
          </a>
        </div>

        {/* Email Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <Email className="contact-icon" />
            <h3 className="contact-card-title">{t("email")}</h3>
          </div>
          <a href="mailto:info@sajisrestaurant.pl" className="contact-info">
            info@sajisrestaurant.pl
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;