import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameBoard from './components/GameBoard';
import Dice from './components/Dice';
import TopicCard from './components/TopicCard';
import './App.css';

const App = () => {
  const [position, setPosition] = useState(1);
  const [prevPosition, setPrevPosition] = useState(1);
  const [rolling, setRolling] = useState(false);

  const topicsInfo = {
    1: {
      name: 'Education',
      colors: ['#000000', '#D4A5A5'],
      items: [
        { title: 'Bachelor’s Degree', desc: 'Computer Science at [Your University]', imageSrc: 'https://picsum.photos/400/200?random=1' },
        { title: 'Online Courses', desc: 'Completed courses on Udemy and Coursera', imageSrc: 'https://picsum.photos/400/200?random=2' },
      ],
    },
    2: {
      name: 'Experience',
      colors: ['#000000', '#6B7280'],
      items: [
        { title: 'Software Developer', desc: 'Worked at [Company]', imageSrc: 'https://picsum.photos/400/200?random=3' },
        { title: 'Internship', desc: 'Interned at [Another Company]', imageSrc: 'https://picsum.photos/400/200?random=4' },
      ],
    },
    3: {
      name: 'Skills',
      colors: ['#000000', '#4A704A'],
      items: [
        { title: 'Frontend', desc: 'React, JavaScript, CSS', imageSrc: 'https://picsum.photos/400/200?random=5' },
        { title: 'Backend', desc: 'Node.js, Express', imageSrc: 'https://picsum.photos/400/200?random=6' },
      ],
    },
    4: {
      name: 'Projects',
      colors: ['#000000', '#D97706'],
      items: [
        { title: 'Dice Game', desc: 'Built this portfolio game', imageSrc: 'https://picsum.photos/400/200?random=7' },
        { title: 'Another Project', desc: 'A cool side project', imageSrc: 'https://picsum.photos/400/200?random=8' },
      ],
    },
    5: {
      name: 'Interests',
      colors: ['#000000', '#9370DB'],
      items: [
        { title: 'Gaming', desc: 'Love strategy games', imageSrc: 'https://picsum.photos/400/200?random=9' },
        { title: 'Coding', desc: 'Passionate about building apps', imageSrc: 'https://picsum.photos/400/200?random=10' },
      ],
    },
    6: {
      name: 'Hobbies',
      colors: ['#000000', '#D2B48C'],
      items: [
        { title: 'Hiking', desc: 'Enjoy nature trails', imageSrc: 'https://picsum.photos/400/200?random=11' },
        { title: 'Reading', desc: 'Love sci-fi novels', imageSrc: 'https://picsum.photos/400/200?random=12' },
      ],
    },
    7: {
      name: 'Certifications',
      colors: ['#000000', '#4682B4'],
      items: [
        { title: 'AWS Certified', desc: 'Cloud Practitioner', imageSrc: 'https://picsum.photos/400/200?random=13' },
        { title: 'Google Cert', desc: 'Professional Data Engineer', imageSrc: 'https://picsum.photos/400/200?random=14' },
      ],
    },
    8: {
      name: 'Goals',
      colors: ['#000000', '#CD5C5C'],
      items: [
        { title: 'Career', desc: 'Become a Senior Developer', imageSrc: 'https://picsum.photos/400/200?random=15' },
        { title: 'Personal', desc: 'Learn a new language', imageSrc: 'https://picsum.photos/400/200?random=16' },
      ],
    },
    9: {
      name: 'Contact',
      colors: ['#000000', '#5F9EA0'],
      items: [
        { title: 'Email', desc: '[your@email.com]', imageSrc: 'https://picsum.photos/400/200?random=17' },
        { title: 'LinkedIn', desc: '[Your LinkedIn]', imageSrc: 'https://picsum.photos/400/200?random=18' },
      ],
    },
    10: {
      name: 'About Me',
      colors: ['#000000', '#BDB76B'],
      items: [
        { title: 'Background', desc: 'Developer from [Your City]', imageSrc: 'https://picsum.photos/400/200?random=19' },
        { title: 'Passion', desc: 'Love solving problems', imageSrc: 'https://picsum.photos/400/200?random=20' },
      ],
    },
  };

  const handleRollComplete = (value) => {
    setRolling(false);
    setPrevPosition(position);
    const newPosition = ((position - 1 + value) % 10) + 1;
    setPosition(newPosition);
  };

  const handlePositionChange = (newPosition) => {
    setPrevPosition(position);
    setPosition(newPosition);
  };

  const backgroundStyle = {
    background: `linear-gradient(${topicsInfo[position].colors[0]} 0%, ${topicsInfo[position].colors[1]} 100%)`,
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <motion.div
      className="App"
      animate={backgroundStyle}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <h1 style={{ color: 'white' }}>Hi, I'm Kamil Krukar</h1>
      <div className="main-container">
        <div className="game-container">
          <GameBoard
            position={position}
            prevPosition={prevPosition}
            onPositionChange={handlePositionChange}
          />
          <Dice
            rolling={rolling}
            onRollComplete={handleRollComplete}
            onClick={() => setRolling(true)}
          />
        </div>
        <div className="topic-section">
          <h1 style={{ color: 'white' }} className="topic-heading">
            {topicsInfo[position].name}
          </h1>
          <AnimatePresence mode="wait"> {/* Use mode="wait" to ensure exit completes */}
            <motion.div
              key={position} // Unique key based on position to force re-render
              className="topic-cards-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {topicsInfo[position].items.map((item, index) => (
                <motion.div
                  key={`${position}-${index}`} // Unique key combining position and index
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: index * 0.1
                  }}
                >
                  <TopicCard
                    name={item.title}
                    desc={item.desc}
                    imageSrc={item.imageSrc}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default App;