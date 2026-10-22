import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopicCard from '../TopicCard/TopicCard';
import IntroCard from '../ProfileCards/IntroCard';
import FinishCard from '../ProfileCards/FinishCard';
import { START, CONTACT_TOPIC } from '../../constants/game';
import './TopicPanel.css';

// Content next to the board: the START card, a topic's cards, or the FINISH card
const TopicPanel = ({ sectionRef, language, position, topics, text, photo, busy, onJump, onStartGame }) => {
  const total = topics.length;
  const finish = total + 1;
  const topic = topics.find((t) => t.id === position);
  const prev = ((position - 2 + total) % total) + 1;
  const next = (position % total) + 1;
  const nameOf = (id) => topics.find((t) => t.id === id).name;

  const renderContent = () => {
    if (position === START) {
      return (
        <div className="topic-scroll">
          <IntroCard photo={photo} text={text.intro} busy={busy} onStart={onStartGame} />
        </div>
      );
    }

    if (position === finish) {
      return (
        <div className="topic-scroll">
          <FinishCard photo={photo} text={text.finishCard} busy={busy} onPlayAgain={() => onJump(START)} />
        </div>
      );
    }

    return (
      <>
        <div className="topic-head">
          <span className="topic-badge">{String(position).padStart(2, '0')}</span>
          <div>
            <p className="eyebrow">
              {text.topic} {position} {text.of} {total}
            </p>
            <h2 className="topic-title">{topic.name}</h2>
          </div>
        </div>

        <div className="topic-scroll">
          <div className="topic-cards">
            {topic.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 + index * 0.06 }}
              >
                <TopicCard
                  name={item.title}
                  desc={item.desc}
                  imageSrc={item.imageSrc}
                  href={item.href}
                  mark={item.mark}
                  markColor={item.markColor}
                  imageFit={item.imageFit}
                  imageScale={item.imageScale}
                  compact={position === CONTACT_TOPIC}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <nav className="topic-nav">
          <button type="button" onClick={() => onJump(prev)} disabled={busy}>
            <span>← {text.previous}</span>
            <strong>{nameOf(prev)}</strong>
          </button>
          <button type="button" className="next" onClick={() => onJump(next)} disabled={busy}>
            <span>{text.next} →</span>
            <strong>{nameOf(next)}</strong>
          </button>
        </nav>
      </>
    );
  };

  return (
    <section className="topic-section" ref={sectionRef} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${language}-${position}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="topic-panel"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TopicPanel;
