import React from "react";
import "../styles/ProductCard.css"; // Import the CSS file.
import alloutImage from "../images/allout.jpg";
import shoesImage from "../images/shoes.jpg"; 
import shirtImage from "../images/shirt.jpg";
import saltImage from "../images/salt.png";
import namkeenImage from "../images/namkeen.jpg";
import eggImage from "../images/egg.jpg"; // Import new product image

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-grid">
        {/* First Product Card */}
        <div className="product-card">
          <div className="discount-badge">19% Off</div>
          <img
            src={alloutImage} // Use the imported image
            alt="All Out Ultra – Mosquito Repellent Refills"
            className="product-image"
          />
          <h4 className="product-title">
            All Out  Refills
          </h4>
          <p className="product-description">
            "45ml x 2 Refills.,effective mosquito repellent. Safe for indoor use."
          </p>
          <div className="product-price">
            <span className="current-price">₹125</span>
            <span className="original-price">₹155</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Second Product Card */}
        <div className="product-card">
          <div className="discount-badge">19% Off</div>
          <img
            src={shoesImage} // Use the imported image
            alt="Stylish Running Shoes"
            className="product-image"
          />
          <h4 className="product-title">Stylish Running Shoes</h4>
          <p className="product-description">
            "Size: 8, Color: Blue. lightweight material for comfort and performance."
          </p>
          <div className="product-price">
            <span className="current-price">₹1500</span>
            <span className="original-price">₹1800</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Third Product Card */}
        <div className="product-card">
          <div className="discount-badge">19% Off</div>
          <img
            src={shirtImage} // Use the imported image
            alt="Cotton Casual Shirt"
            className="product-image"
          />
          <h4 className="product-title">Cotton Casual Shirt</h4>
          <p className="product-description">
            "Size: M, Color: White. Soft, breathable cotton fabric perfect for casual wear."
          </p>
          <div className="product-price">
            <span className="current-price">₹799</span>
            <span className="original-price">₹999</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Fourth Product Card */}
        <div className="product-card">
          <div className="discount-badge">19% Off</div>
          <img
            src={saltImage} // Use the imported image
            alt="Premium Quality Salt"
            className="product-image"
          />
          <h4 className="product-title">Premium Quality Salt</h4>
          <p className="product-description">
            "500g Pack. Fine, high-quality salt for everyday cooking and seasoning."
          </p>
          <div className="product-price">
            <span className="current-price">₹40</span>
            <span className="original-price">₹50</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Fifth Product Card */}
        <div className="product-card">
          <div className="discount-badge">19% Off</div>
          <img
            src={namkeenImage} // Use the imported image
            alt="Namkeen Snack"
            className="product-image"
          />
          <h4 className="product-title">Namkeen Snack</h4>
          <p className="product-description">
            "250g Pack. Crispy, flavorful snack with a crunchy texture, ideal for tea-time."
          </p>
          <div className="product-price">
            <span className="current-price">₹80</span>
            <span className="original-price">₹100</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>

        {/* Sixth Product Card (New Product) */}
       {/* Sixth Product Card (New Product) */}
<div className="product-card">
  <div className="discount-badge">10% Off</div>
  <img
    src={eggImage} // Use the imported image
    alt="eggs"
    className="product-image"
  />
  <h4 className="product-title">Eggs</h4>
         <p className="product-description">
    "Farm-fresh eggs,  Color: White. High-quality protein source
          </p>
         <div className="product-price">
         <span className="current-price">₹60</span>
         <span className="original-price">₹80</span>
         </div>
         <button className="add-to-cart-button">Add to Cart</button>
         </div>
           {/* 7th Product Card (New Product) */}
             <div className="product-card">
            <div className="discount-badge">10% Off</div>
            <img
            src={eggImage} // Use the imported image
             alt="eggs"
            className="product-image"
                />
            <h4 className="product-title">Eggs</h4>
            <p className="product-description">
            "Farm-fresh eggs,  Color: White. High-quality protein source
            </p>
           <div className="product-price">
          <span className="current-price">₹60</span>
          <span className="original-price">₹80</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
         </div>
           {/* 8th Product Card (New Product) */}
           <div className="product-card">
            <div className="discount-badge">10% Off</div>
            <img
            src={eggImage} // Use the imported image
             alt="eggs"
            className="product-image"
                />
            <h4 className="product-title">Eggs</h4>
            <p className="product-description">
            "Farm-fresh eggs,  Color: White. High-quality protein source
            </p>
           <div className="product-price">
          <span className="current-price">₹60</span>
          <span className="original-price">₹80</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
         </div>
          {/* 9th Product Card (New Product) */}
          <div className="product-card">
            <div className="discount-badge">10% Off</div>
            <img
            src={eggImage} // Use the imported image
             alt="eggs"
            className="product-image"
                />
            <h4 className="product-title">Eggs</h4>
            <p className="product-description">
            "Farm-fresh eggs,  Color: White. High-quality protein source
            </p>
           <div className="product-price">
          <span className="current-price">₹60</span>
          <span className="original-price">₹80</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
         </div>
          {/* 10th Product Card (New Product) */}
          <div className="product-card">
            <div className="discount-badge">10% Off</div>
            <img
            src={eggImage} // Use the imported image
             alt="eggs"
            className="product-image"
                />
            <h4 className="product-title">Eggs</h4>
            <p className="product-description">
            "Farm-fresh eggs,  Color: White. High-quality protein source
            </p>
           <div className="product-price">
          <span className="current-price">₹60</span>
          <span className="original-price">₹80</span>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
         </div>
      </div>
    </div>
  );
};

export default ProductSection;
