// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';  // Our new authentication component
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Food from './components/Food';
import Category from './components/Category';

// Create a Home component to hold your current app content.
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Food />
      <Category />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication page */}
        <Route path="/" element={<Auth />} />
        {/* Main app page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
