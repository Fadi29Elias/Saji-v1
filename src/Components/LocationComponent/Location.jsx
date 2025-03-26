import React from "react";
import { Place } from "@mui/icons-material";
import "../LocationComponent/Location.css"

function Location() {
  return (
    <section id="location" className="location-section">
      <div className="location-header">
        <h2 className="section-title">Our Location</h2>
        <div className="underline" />
      </div>

      <div className="location-content">
        {/* Info Box */}
        <div className="info-box">
          <div className="info-header">
            <Place className="info-icon" />
            <h3 className="info-title">Visit Us</h3>
          </div>
          <div className="info-details">
            <p className="info-text">
              <strong>Address:</strong> Piotrkowska 55
            </p>
            <p className="info-text">
              <strong>Postal Code:</strong> 90-413
            </p>
            <p className="info-text">
              <strong>City:</strong> Łódź, Poland
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Restaurant Location"
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