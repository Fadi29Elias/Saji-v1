import React from "react";
import { Phone, Email } from "@mui/icons-material";
import '../ContactComponent/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Contact Us</h2>
        <div className="underline" />
      </div>

      <div className="contact-content">
        {/* Phone Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <Phone className="contact-icon" />
            <h3 className="contact-card-title">Phone</h3>
          </div>
          <a href="tel:+48503419238" className="contact-info">
            +48 503 419 238
          </a>
        </div>

        {/* Email Card */}
        <div className="contact-card">
          <div className="contact-card-header">
            <Email className="contact-icon" />
            <h3 className="contact-card-title">Email</h3>
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