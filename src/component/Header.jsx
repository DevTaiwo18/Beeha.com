import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/BEEHA LAGOS.png';
import "../styles/Header.css";
import { useAuthContext } from '../context/authContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useAuthContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
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
            {token ? (
              <>
                <Link to="/myaccont" className="logReg-link">My Account</Link>
                <span>/</span>
                <button onClick={handleLogout} className="logReg-link">Logout</button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="logReg-link">Login</Link>
                <span>/</span>
                <Link to="/sign-up" className="logReg-link">Register</Link>
              </>
            )}
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

      {/* mobile nav */}
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
            {token ? (
              <>
                <li><Link to="/myaccont" className="nav-link" onClick={toggleMenu}><i className="fa fa-user"></i> My Account</Link></li>
                <li><Link className='nav-link' onClick={handleLogout}><i className="fa fa-sign-out-alt"></i> Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/sign-in" className="nav-link" onClick={toggleMenu}><i className="fa fa-sign-in-alt"></i> Login</Link></li>
                <li><Link to="/sign-up" className="nav-link" onClick={toggleMenu}><i className="fa fa-user-plus"></i> Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
