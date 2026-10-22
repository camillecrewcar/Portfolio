import React from 'react';
import '../ComponentStyles/introCard.css';

// Shown while the pawn stands on START, styled like a player card
const IntroCard = ({ photo, text, stats, onStart, busy }) => (
  <article className="intro-card">
    <div className="intro-photo">
      <img src={photo} alt="Kamil Krukar" />
      <span className="intro-player">{text.player}</span>
    </div>
    <div className="intro-body">
      <p className="eyebrow">{text.role}</p>
      <h2 className="intro-name">Kamil Krukar</h2>
      <p className="intro-text">{text.about}</p>
      <dl className="intro-stats">
        {stats.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <button type="button" className="intro-cta" onClick={onStart} disabled={busy}>
        {text.cta}
      </button>
    </div>
  </article>
);

export default IntroCard;
