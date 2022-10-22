import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Events from './components/Events/Events'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Social from './components/Social/Social';

function App() {

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<Social />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
