import React from 'react';
import './Home.css';
import Navbar from '../NavbarComponent/Navbar';

function Home() {
  return (
    <section id="home" className="hero-section">
      
      <div className="hero-content">
        <h1 className="hero-title">
          Saji's <span>Restaurant & Cafeteria</span>
        </h1>
        <p className="hero-subtitle">Authentic Middle Eastern Cuisine</p>
        <button className="cta-button">
          Coming Soon...
        </button>
      </div>
    </section>
  );
}

export default Home;