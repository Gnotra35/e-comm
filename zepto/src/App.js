import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from "../src/components/Hero";
import ProductSection from '../src/components/ProductCard';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Explore from '../src/components/Explore';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default route showing Hero and ProductSection components */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductSection />
              </>
            }
          />
          
          {/* Route for the Login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for the Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for the Explore page */}
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
