import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Destination from './pages/Destination';
import Booking from './pages/Booking';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Thailand from './components/Thailand'; // Updated import path
import Malaysia from './components/Malaysia'; // Updated import path
import Australia from './components/Australia'; // Updated import path
import Indonesia from './components/Indonesia'; // Updated import path

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/indonesia" element={<Indonesia />} />
      </Routes>
      <Footer />
    </div>
  );
}