import React from 'react';
import { LANGUAGES } from '../../constants/game';
import './Header.css';

const Header = ({ role, contactLabel, language, onLanguageChange, onContact }) => (
  <header className="site-header">
    <div className="brand">
      <span className="brand-mark" aria-hidden="true">KK</span>
      <span className="brand-text">
        <strong>Kamil Krukar</strong>
        <span>{role}</span>
      </span>
    </div>
    <nav className="header-actions">
      <button type="button" className="header-link" onClick={onContact}>
        {contactLabel}
      </button>
      <div className="language-toggle" role="group" aria-label="Language">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            type="button"
            className={language === lang ? 'active' : ''}
            aria-pressed={language === lang}
            onClick={() => onLanguageChange(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
