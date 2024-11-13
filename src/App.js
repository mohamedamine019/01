// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Activities from './pages/activities';
import MembresList from './pages/MembresList';
import Join from './pages/join';
import Header from './competens/header';
import Footer from './competens/footer';
import BackToTop from './competens/BackToTop'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/membre" element={<MembresList />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;