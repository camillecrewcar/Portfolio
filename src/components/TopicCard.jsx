// src/components/TopicCard.jsx
import React from 'react';
import '../ComponentStyles/topicCard.css';

const TopicCard = ({ name, desc, imageSrc }) => {
  // Use provided imageSrc or fall back to a random photo from picsum.photos
  const imageSource = imageSrc || 'https://picsum.photos/400/200';

  return (
    <div
      className="topic-card"
      style={{
        transition: 'transform 0.25s cubic-bezier(.4,2,.6,1)',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div className="topic-card-image" style={{ aspectRatio: '2 / 1', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222' }}>
        <div className="topic-card-overlay"></div>
        <img
          src={imageSource}
          alt={name || "Topic"}
          className="topic-image"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '8px'
          }}
        />
        <h2 className="topic-card-title">{name}</h2>
      </div>
      <div className="topic-card-content">
        <p className="topic-card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default TopicCard;