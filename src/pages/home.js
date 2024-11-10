// home.js
import React from 'react';
import './home.css';
import About from './about';
import News from './news';
import Activities from './activities';
import MembresList from './MembresList';
import Join from './join';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Varphi Club</h1>
          <p>Join our mathematics community and unlock the secrets of the universe!</p>
          <a href="#join" className="cta-btn">Become a Member</a>
        </div>
      </section>
      <section id="about" className="section-padding">
        <h2>About Us</h2>
        <p>We are a passionate group of students who believe that mathematics is not just a subject but a way to understand the world. Come and discover the power of numbers with us!</p>
        <About />
      </section>
      <section id="news" className="section-padding">
        <h2>Latest News</h2>
        <p>Stay updated with our latest events, workshops, and projects. Get involved and make an impact!</p>
        <News />
      </section>
      <section id="activities" className="section-padding">
        <h2>Our Activities</h2>
        <p>Explore the diverse activities we offer: from math workshops to competitions, there's always something happening in Varphi Club.</p>
        <Activities />
      </section>
      <section id="membres" className="section-padding">
        <h2>Meet Our Members</h2>
        <p>Our members are the heart of the club. They come from diverse backgrounds but share a common love for mathematics.</p>
        <MembresList />
      </section>
      <section id="join" className="join-section section-padding">
        <h2>Join Us</h2>
        <p>Be part of something exciting! Join Varphi Club and expand your mathematical horizons. We welcome everyone with a passion for learning.</p>
        <Join />
      </section>
    </div>
  );
};

export default Home;