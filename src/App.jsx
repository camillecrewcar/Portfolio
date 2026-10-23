import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GameBoard from './components/GameBoard/GameBoard';
import TopicPanel from './components/TopicPanel/TopicPanel';
import Footer from './components/Footer/Footer';
import useBoardGame from './hooks/useBoardGame';
import content, { profilePhoto } from './content';
import { START, CONTACT_TOPIC, START_ACCENT, FINISH_ACCENT } from './constants/game';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('en');
  const topicSectionRef = useRef(null);
  const rollRef = useRef(null);

  const { topics, ui } = content[language];

  const game = useBoardGame(topics.length, {
    // On stacked layouts the content sits below the board, so bring it into view
    onLand: () => {
      if (window.innerWidth < 1024 && topicSectionRef.current) {
        setTimeout(() => topicSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }
    },
  });

  // Lets the browser hyphenate long Polish words on small board fields
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const position = game.activePosition;
  const accent =
    position === START
      ? START_ACCENT
      : position === game.finish
        ? FINISH_ACCENT
        : topics.find((topic) => topic.id === position).color;

  return (
    <div className="App" style={{ '--accent': accent }}>
      <Header
        role={ui.role}
        contactLabel={ui.contact}
        cvLabel={ui.cv}
        cvUrl={ui.cvUrl}
        language={language}
        onLanguageChange={setLanguage}
        onContact={() => game.jumpTo(CONTACT_TOPIC)}
      />

      <main className={`layout${position === START ? ' at-start' : ''}`}>
        <Hero greeting={ui.greeting} subtitle={ui.subtitle} />

        <div className="board-column">
          <GameBoard
            topics={topics}
            pawnPosition={game.pawnPosition}
            activePosition={position}
            hop={game.hop}
            busy={game.busy}
            lastRoll={game.lastRoll}
            rollRef={rollRef}
            onSelect={game.jumpTo}
            onRollStart={game.startRoll}
            onRoll={game.walk}
            text={ui}
          />
        </div>

        <TopicPanel
          sectionRef={topicSectionRef}
          language={language}
          position={position}
          topics={topics}
          text={ui}
          cvUrl={ui.cvUrl}
          photo={profilePhoto}
          busy={game.busy}
          onJump={game.jumpTo}
          onStartGame={() => rollRef.current && rollRef.current()}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
