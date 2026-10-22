import React from 'react';
import { CONTACT } from '../../constants/contact';
import './ProfileCards.css';

// Shown when the pawn reaches FINISH: what I can bring to a team, plus ways to get in touch
const FinishCard = ({ photo, text, busy, onPlayAgain }) => (
  <article className="intro-card finish-card">
    <div className="intro-photo">
      <img src={photo} alt="Kamil Krukar" />
    </div>
    <div className="intro-body">
      <p className="eyebrow">{text.eyebrow}</p>
      <h2 className="intro-name">{text.title}</h2>
      <p className="intro-text">{text.intro}</p>

      <ol className="offer-list">
        {text.offers.map(({ title, desc }, index) => (
          <li key={title}>
            <span className="offer-number">{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <p>{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="finish-actions">
        <a className="intro-cta" href={`mailto:${CONTACT.email}`}>{text.email}</a>
        <a className="finish-secondary" href={CONTACT.phoneHref}>{text.call}</a>
        <button type="button" className="finish-secondary" onClick={onPlayAgain} disabled={busy}>
          {text.again}
        </button>
      </div>
    </div>
  </article>
);

export default FinishCard;
