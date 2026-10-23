import React from 'react';
import './TopicCard.css';

const TopicCard = ({ name, desc, imageSrc, href, mark, markColor, imageFit, imageScale, compact }) => (
  <article className={`topic-card${compact ? ' compact' : ''}`}>
    <div className="topic-card-media">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className={imageFit === 'contain' ? 'contain' : undefined}
          style={imageScale ? { transform: `scale(${imageScale})` } : undefined}
        />
      ) : (
        // No image yet: show the organisation's initials instead
        <span className="topic-card-mark" aria-hidden="true" style={markColor ? { background: markColor } : undefined}>
          {mark}
        </span>
      )}
    </div>
    <div className="topic-card-body">
      <h3 className="topic-card-title">{name}</h3>
      {href ? (
        <a
          className="topic-card-link"
          href={href}
          // Profiles on other sites and the CV open in a new tab so the portfolio stays open
          {...(href.startsWith('http') || href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {desc}
        </a>
      ) : (
        <p className="topic-card-desc">{desc}</p>
      )}
    </div>
  </article>
);

export default TopicCard;
