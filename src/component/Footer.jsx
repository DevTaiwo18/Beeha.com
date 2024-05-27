import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = '+2348026151366';
    const message = encodeURIComponent("Hi DevTaiwo");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="footer-section">
      <div className="footer-div1">
        <div className="footer-column">
          <p>CONTACT US</p>
          <ul className='mt-6'>
            <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, State, Zip Code, Nigeria.</li>
            <li><i className="fas fa-phone-alt"></i> 01234567890</li>
            <li><i className="fas fa-envelope"></i> demo@example.com</li>
          </ul>
          <div className="social-icons">
            <div className="icon-div">
              <a href="https://www.tiktok.com/@beeha.official" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
            <div className="icon-div">
              <a href="https://www.instagram.com/beehaofficial" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <p>SIGN UP FOR DISCOUNTS & UPDATES</p>
          <input type="email" id="finp" placeholder="Enter your email here....." />
          <button className='footer-btn'>Subscribe!</button>
          <div className="footer-links">
            <Link to="/privacy-policy">Return Policy</Link>
            <Link to="/about-us">About Us</Link>
          </div>
        </div>
      </div>
      <div className="footer-div2">
        <div className="footer-left">
          <a href="#" onClick={openWhatsAppChat}>
            <i className="fab fa-whatsapp"></i> Made by DevTaiwo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
