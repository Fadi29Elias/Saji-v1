import React from "react";
import { Place } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "../LocationComponent/Location.css"

function Location() {
  const { t } = useTranslation();

  return (
    <section id="location" className="location-section">
      <div className="location-header">
        <h2 className="section-title">{t('location.title')}</h2>
        <div className="underline" />
      </div>

      <div className="location-content">
        {/* Info Box */}
        <div className="info-box">
          <div className="info-header">
            <Place className="info-icon" />
            <h3 className="info-title">{t('location.visitUs')}</h3>
          </div>
          <div className="info-details">
            <p className="info-text">
              <strong>{t('location.addressLabel')}:</strong> {t('location.address')}
            </p>
            <p className="info-text">
              <strong>{t('location.postalCodeLabel')}:</strong> {t('location.postalCode')}
            </p>
            <p className="info-text">
              <strong>{t('location.cityLabel')}:</strong> {t('location.city')}
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title={t('location.mapTitle')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.998310065695!2d19.452756612646056!3d51.7696380717568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcad433a00775%3A0x30491857376e5b77!2zUGlvdHJrb3dza2EgNTUsIDkwLTQxMyDFgcOzZMW6LCBQb2xhbmQ!5e0!3m2!1sen!2s!4v1742469042561!5m2!1sen!2s"
            className="responsive-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;