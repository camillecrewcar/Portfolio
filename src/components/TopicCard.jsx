// src/components/TopicCard.jsx
import React from 'react';
import '../ComponentStyles/topicCard.css';

const TopicCard = ({ name, desc, imageSrc }) => {
  // Use provided imageSrc or fall back to a random photo from picsum.photos
  const imageSource = imageSrc || 'https://picsum.photos/400/200';

  return (
    <div className="topic-card">
      <div className="topic-card-image">
        <div className="topic-card-overlay"></div>
        <img
          src={imageSource}
          alt="Topic"
          className="topic-image"
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