import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/BEEHA LAGOS.png';
import "../styles/Header.css";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed-header">
      {/* nav one */}
      <nav className="nav1">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="search"
            placeholder="Search entire store here..."
            className="search-input"
          />
        </div>
        <div className="logCart">
          <div className="logReg">
            <Link to="/sign-in" className="logReg-link">Login</Link>
            <span>/</span>
            <Link to="/sign-up" className="logReg-link">Register</Link>
          </div>
          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <i className="fa fa-shopping-basket cart-icon"></i>
              <p className="cart-num">0 item(s)</p>
            </Link>
          </div>
        </div>
      </nav>
      {/* nav one */}

      {/* nav two */}
      <nav className="nav2">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/shop" className="nav-link">Shop</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
          <li><Link to="/privacy-policy" className="nav-link">Privacy Policy</Link></li>
          <li><Link to="/faq" className="nav-link">FAQ</Link></li>
          <li><Link to="/about-us" className="nav-link">About Us</Link></li>
          <li><Link to="/contact-us" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>
      {/* nav two */}


      <nav className="mobile-nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="icons">
          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <i className="fa fa-shopping-basket cart-icon"></i>
              <span className="cart-count">0</span>
            </Link>
          </div>
          <i className="fa fa-bars menu-icon" onClick={toggleMenu}></i>
        </div>
      </nav>

      <div className="search-box-mobile">
        <i className="fa-solid fa-magnifying-glass search-icon-mobile"></i>
        <input
          type="search"
          placeholder="Search entire store here..."
          className="search-input-mobile"
        />
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="navbar-backdrop" onClick={toggleMenu}></div>
        <nav className="navbar-content">
          <div className="flex items-center justify-between mb-8">
            <NavLink className="text-2xl font-bold leading-none" to="/">
              <img src={logo} alt="Logo" className="w-10 h-10" />
            </NavLink>
            <button onClick={toggleMenu} className="navbar-close" aria-label="Close Menu">
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul>
            <li><Link to="/" className="nav-link" onClick={toggleMenu}><i className="fa fa-home"></i> Home</Link></li>
            <li><Link to="/shop" className="nav-link" onClick={toggleMenu}><i className="fa fa-store"></i> Shop</Link></li>
            <li><Link to="/cart" className="nav-link" onClick={toggleMenu}><i className="fa fa-shopping-cart"></i> Cart</Link></li>
            <li><Link to="/privacy-policy" className="nav-link" onClick={toggleMenu}><i className="fa fa-user-secret"></i> Privacy Policy</Link></li>
            <li><Link to="/faq" className="nav-link" onClick={toggleMenu}><i className="fa fa-question-circle"></i> FAQ</Link></li>
            <li><Link to="/sign-in" className="nav-link" onClick={toggleMenu}><i className="fa fa-sign-in-alt"></i> Login</Link></li>
            <li><Link to="/sign-up" className="nav-link" onClick={toggleMenu}><i className="fa fa-user-plus"></i> Register</Link></li>
            <li><Link to="/about-us" className="nav-link" onClick={toggleMenu}><i className="fa fa-info-circle"></i> About Us</Link></li>
            <li><Link to="/contact-us" className="nav-link" onClick={toggleMenu}><i className="fa fa-envelope"></i> Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
