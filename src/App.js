import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameBoard from './components/GameBoard';
import TopicCard from './components/TopicCard';
import IntroCard from './components/IntroCard';
import { topicsInfoEn, topicsInfoPl, uiText, profilePhoto } from './data/topics';
import './App.css';

const STEP_MS = 260;
const CONTACT_TOPIC = 9;
const START = 0; // The pawn begins on the START marker, before the first topic
const START_ACCENT = '#2f6b57';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [pawnPos, setPawnPos] = useState(START);
  const [activeTopic, setActiveTopic] = useState(START);
  const [busy, setBusy] = useState(false);
  const [direction, setDirection] = useState(1);
  const [hop, setHop] = useState(0);
  const timers = useRef([]);
  const topicSectionRef = useRef(null);
  const rollRef = useRef(null);

  const topicsInfo = language === 'en' ? topicsInfoEn : topicsInfoPl;
  const t = uiText[language];
  const topics = Object.keys(topicsInfo).map((key) => ({
    id: Number(key),
    name: topicsInfo[key].name,
    color: topicsInfo[key].colors[1],
  }));
  const total = topics.length;
  const atStart = activeTopic === START;
  const topic = topicsInfo[activeTopic];
  const introStats = [
    topicsInfo[4].items.length,
    topicsInfo[3].items.length,
    topicsInfo[6].items.length,
  ].map((value, i) => ({ label: t.intro.stats[i], value }));

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Lets the browser hyphenate long Polish words on small board fields
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  // Show the topic once the pawn has landed on it
  const land = (target) => {
    setActiveTopic(target);
    setBusy(false);
    // On stacked layouts the content sits below the board
    if (window.innerWidth < 1024 && topicSectionRef.current) {
      later(() => topicSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  };

  // Walk the pawn one space at a time after a dice roll,
  // turning around when it reaches either end of the path
  const walk = (steps) => {
    let pos = pawnPos;
    let dir = direction;
    for (let i = 1; i <= steps; i++) {
      if (pos + dir < 1 || pos + dir > total) dir = -dir;
      pos += dir;
      const stepPos = pos;
      const stepDir = dir;
      const isLast = i === steps;
      later(() => {
        setPawnPos(stepPos);
        setHop((h) => h + 1);
        if (isLast) {
          later(() => {
            // Keep heading the same way, unless the pawn now stands at an end
            setDirection(stepPos === total ? -1 : stepPos === 1 ? 1 : stepDir);
            land(stepPos);
          }, STEP_MS + 120);
        }
      }, (i - 1) * STEP_MS);
    }
  };

  // Jump straight to a field (tile click, prev/next, contact link)
  const jumpTo = (target) => {
    if (busy || target === activeTopic) return;
    setBusy(true);
    setPawnPos(target);
    setHop((h) => h + 1);
    if (target === total) setDirection(-1);
    if (target <= 1) setDirection(1);
    later(() => land(target), STEP_MS + 80);
  };

  const prev = ((activeTopic - 2 + total) % total) + 1;
  const next = (activeTopic % total) + 1;

  return (
    <div className="App" style={{ '--accent': atStart ? START_ACCENT : topic.colors[1] }}>
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">KK</span>
          <span className="brand-text">
            <strong>Kamil Krukar</strong>
            <span>{t.role}</span>
          </span>
        </div>
        <nav className="header-actions">
          <button type="button" className="header-link" onClick={() => jumpTo(CONTACT_TOPIC)}>
            {t.contact}
          </button>
          <div className="language-toggle" role="group" aria-label="Language">
            {['en', 'pl'].map((lang) => (
              <button
                key={lang}
                type="button"
                className={language === lang ? 'active' : ''}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero-title">
          {t.greeting} <em>Kamil Krukar</em>
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>
      </section>

      <main className={`layout${atStart ? ' at-start' : ''}`}>
        <div className="board-column">
          <GameBoard
            topics={topics}
            pawnPos={pawnPos}
            activeTopic={activeTopic}
            hop={hop}
            busy={busy}
            rollRef={rollRef}
            onSelect={jumpTo}
            onRollStart={() => setBusy(true)}
            onRoll={walk}
            text={t}
          />
        </div>

        <section className="topic-section" ref={topicSectionRef} aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${activeTopic}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {atStart ? (
                <IntroCard
                  photo={profilePhoto}
                  text={t.intro}
                  stats={introStats}
                  busy={busy}
                  onStart={() => rollRef.current && rollRef.current()}
                />
              ) : (
                <>
                  <div className="topic-head">
                    <span className="topic-badge">{String(activeTopic).padStart(2, '0')}</span>
                    <div>
                      <p className="eyebrow">
                        {t.topic} {activeTopic} {t.of} {total}
                      </p>
                      <h2 className="topic-title">{topic.name}</h2>
                    </div>
                  </div>

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
                        />
                      </motion.div>
                    ))}
                  </div>

                  <nav className="topic-nav">
                    <button type="button" onClick={() => jumpTo(prev)} disabled={busy}>
                      <span>← {t.previous}</span>
                      <strong>{topicsInfo[prev].name}</strong>
                    </button>
                    <button type="button" className="next" onClick={() => jumpTo(next)} disabled={busy}>
                      <span>{t.next} →</span>
                      <strong>{topicsInfo[next].name}</strong>
                    </button>
                  </nav>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Kamil Krukar
      </footer>
    </div>
  );
};

export default App;
