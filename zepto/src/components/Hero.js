<<<<<<< HEAD
import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
=======
import React from "react";
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'; 
>>>>>>> 0b81f4a714fd0a6d57506789592f7e13d83ec538
import "../styles/Hero.css";
import ProductCard from "../components/ProductCard";

const Hero = () => {
  const navigate = useNavigate(); 

  // Function to navigate to Explore page
  const navigateToExplore = () => {
    navigate("/Explore"); 
  };

  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", email, password);
    } else {
      if (password === confirmPassword) {
        console.log("Signing up with", email, password);
      } else {
        alert("Passwords do not match");
      }
    }
    setShowModal(false); 
  };

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
          <button className="login-button" onClick={() => setShowModal(true)}>
            <FaUser className="icon" />
            <span>Profile</span>
          </button>
          <button className="cart-button">
            <FaShoppingCart className="icon" />
            <span>Cart</span>
            {cartCount > 0 && (
              <div className="cart-count">{cartCount}</div> 
            )}
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="hero-banner">
        <div className="hero-text">
          <button className="explore-button" onClick={navigateToExplore}>Explore Now</button>
        </div>
      </div>

      {/* Product Section with passed setCartCount function */}
      <ProductCard setCartCount={setCartCount} />

      {/* Modal for Login/Signup Form */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}
              <button type="submit" className="form-button">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <div className="toggle-form">
              <span>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
