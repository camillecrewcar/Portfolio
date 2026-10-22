import React from 'react';
import './ProfileCards.css';

// Shown while the pawn stands on START
const IntroCard = ({ photo, text, onStart, busy }) => (
  <article className="intro-card">
    <div className="intro-photo">
      <img src={photo} alt="Kamil Krukar" />
    </div>
    <div className="intro-body">
      <p className="eyebrow">{text.role}</p>
      <h2 className="intro-name">Kamil Krukar</h2>
      <p className="intro-text">{text.about}</p>
      <button type="button" className="intro-cta" onClick={onStart} disabled={busy}>
        {text.cta}
      </button>
    </div>
  </article>
);

export default IntroCard;
