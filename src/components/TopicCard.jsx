import React from 'react';
import '../ComponentStyles/topicCard.css';

const TopicCard = ({ name, desc, imageSrc, href }) => (
  <article className="topic-card">
    <div className="topic-card-media">
      <img src={imageSrc} alt="" loading="lazy" />
    </div>
    <div className="topic-card-body">
      <h3 className="topic-card-title">{name}</h3>
      {href ? (
        <a className="topic-card-link" href={href}>{desc}</a>
      ) : (
        <p className="topic-card-desc">{desc}</p>
      )}
    </div>
  </article>
);

export default TopicCard;
