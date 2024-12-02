import React from "react";
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import the icons
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Navbar Section */}
      <div className="hero-navbar">
        <div className="hero-logo">zepto</div>
        <div className="hero-location">
          ISBT 17 Chowk, Sector 18D, Sector 18, Chandigarh
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="hero-search-bar">
          <input
            type="text"
            placeholder="Search for over 5000 products"
            className="search-input"
          />
           <FaSearch className="icon" />
        </div>
        {/* Updated Hero Actions with Icons */}
        <div className="hero-actions">
          <button className="login-button">
            <FaUser className="icon" />
            <span>Profile</span>
          </button>
          <button className="cart-button">
            <FaShoppingCart className="icon" />
            <span>Cart</span>
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="hero-banner">
        <div className="hero-text">
          <button className="explore-button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
