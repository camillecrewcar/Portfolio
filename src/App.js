import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameBoard from './components/GameBoard';
import Dice from './components/Dice';
import './App.css';

const App = () => {
  const [position, setPosition] = useState(1);
  const [prevPosition, setPrevPosition] = useState(1);
  const [rolling, setRolling] = useState(false);

  const topicsInfo = {
    1: { name: 'Education', desc: 'Studied Computer Science at [Your University].', colors: ['#000000', '#D4A5A5'] },
    2: { name: 'Experience', desc: 'Worked as a [Your Job] at [Company].', colors: ['#000000', '#6B7280'] },
    3: { name: 'Skills', desc: 'Proficient in React, JavaScript, CSS, etc.', colors: ['#000000', '#4A704A'] },
    4: { name: 'Projects', desc: 'Built this cool dice game portfolio!', colors: ['#000000', '#D97706'] },
    5: { name: 'Interests', desc: 'Love coding, gaming, and [your interest].', colors: ['#000000', '#9370DB'] },
    6: { name: 'Hobbies', desc: 'Enjoy hiking, reading, and [your hobby].', colors: ['#000000', '#D2B48C'] },
    7: { name: 'Certifications', desc: 'Certified in [Your Cert].', colors: ['#000000', '#4682B4'] },
    8: { name: 'Goals', desc: 'Aiming to become a [Your Goal].', colors: ['#000000', '#CD5C5C'] },
    9: { name: 'Contact', desc: 'Reach me at [your@email.com].', colors: ['#000000', '#5F9EA0'] },
    10: { name: 'About Me', desc: 'I’m a passionate developer from [Your City].', colors: ['#000000', '#BDB76B'] },
  };

  const handleRollComplete = (value) => {
    setRolling(false);
    setPrevPosition(position);
    const newPosition = ((position - 1 + value) % 10) + 1;
    setPosition(newPosition);
  };

  // Define the background style that will be animated
  const backgroundStyle = {
    background: `linear-gradient(${topicsInfo[position].colors[0]} 0%, ${topicsInfo[position].colors[1]} 100%)`
  };

  return (
    <motion.div
      className="App"
      animate={backgroundStyle}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <h1 style={{ color: 'white' }}>Hi, I'm Kamil Krukar</h1>
      <GameBoard position={position} prevPosition={prevPosition} />
      <Dice
        rolling={rolling}
        onRollComplete={handleRollComplete}
        onClick={() => setRolling(true)} // Pass the click handler
      />
      <div className="topic-info">
        <h2>{topicsInfo[position].name}</h2>
        <p>{topicsInfo[position].desc}</p>
      </div>
    </motion.div>
  );
};

export default App;