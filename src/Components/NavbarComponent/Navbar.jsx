import React, { useState } from 'react';
import '../NavbarComponent/Navbar.css';
import WLogo from '../assets/WLogo.png';
import { Menu, Close } from '@mui/icons-material';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <img src={WLogo} alt="Saji's Restaurant Logo" className='nav-logo' />
      
      <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className='nav-list'>
          <li className='nav-item'><a href="#home">Home</a></li>
          <li className='nav-item'><a href="#location">Location</a></li>
          <li className='nav-item'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <button 
        className='mobile-toggle' 
        aria-label="Navigation menu" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <Close fontSize='large' /> : <Menu fontSize='large' />}
      </button>
    </header>
  );
}

export default Navbar;