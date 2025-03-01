import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Footer from './Footer';
import { AnimatePresence, motion, domAnimation } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
