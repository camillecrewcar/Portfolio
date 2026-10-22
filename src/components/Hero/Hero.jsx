import React from 'react';
import './Hero.css';

const Hero = ({ greeting, subtitle }) => (
  <section className="hero">
    <h1 className="hero-title">
      {greeting} <em>Kamil Krukar</em>
    </h1>
    <p className="hero-subtitle">{subtitle}</p>
  </section>
);

export default Hero;
