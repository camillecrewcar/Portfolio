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
        { title: 'Engineering degree in Computer Science', desc: 'I studied with great enthusiasm at the University of Rzeszów. I learned important programming and mathematical skills here. As a year prefect, actively participating in the academic life of the university I acquired new soft skills. I look forward to continue my academic adventure in the future.', imageSrc: 'https://picsum.photos/400/200?random=1' },
        { title: 'technical school degree', desc: 'I completed an electrical technical school with a focus on IT at Technical School No. 5 in Krosno. There, I acquired basic programming and hardware skills. I use this knowledge daily, not only by writing programs but also by independently solving technical problems (not just my own).', imageSrc: 'https://picsum.photos/400/200?random=2' },
      ],
    },
    2: {
      name: 'Experience',
      colors: ['#000000', '#6B7280'],
      items: [
        { title: 'Tutor', desc: 'I currently work at GoStudent. Here, I teach children and teenagers of various ages computer science and mathematics. All classes take place online.', imageSrc: 'https://picsum.photos/400/200?random=3' },
        { title: 'University projects', desc: 'During my studies, I gained experience in project planning, coding in languages like Python and Java, and using tools like Git and databases. I also improved my teamwork, communication, and problem-solving skills while working on technical projects.', imageSrc: 'https://picsum.photos/400/200?random=4' },
      ],
    },
    3: {
      name: 'Skills',
      colors: ['#000000', '#4A704A'],
      items: [
        { title: 'Html, CSS, JS, React, Bootstrap, android UI', desc: 'Working with these technologies, I honed my ability to craft dynamic and responsive web interfaces. Additionally, my experience with Android UI design strengthened my skills in developing user-friendly mobile applications.', imageSrc: 'https://picsum.photos/400/200?random=5' },
        { title: 'SQl, Laravel, PHP, Java, SpringBoot', desc: 'I built robust backend systems and mastered database management. I developed scalable server-side applications with a focus on efficient functionality.', imageSrc: 'https://picsum.photos/400/200?random=8' },
        { title: 'GameDev', desc: 'I recently started my journey in this field. I have already created a few projects using the Unity engine and continue to educate myself in this area.', imageSrc: 'https://picsum.photos/400/200?random=7' },
        { title: 'Machine learning', desc: 'I have also managed to create several projects based on reinforcement learning. I am continuously expanding my knowledge in this area.', imageSrc: 'https://picsum.photos/400/200?random=9' },
        { title: 'Basics of any popular programming language', desc: 'Because I have been learning and teaching others to code for many years, I know the basics of every popular programming language. I can quickly acquire the necessary knowledge to solve a problem and learn a completely new technology from scratch.', imageSrc: 'https://picsum.photos/400/200?random=10' },

      ],
    },
    4: {
      name: 'Projects',
      colors: ['#000000', '#D97706'],
      items: [
        { title: 'Museum forum', desc: "This project is a classic Laravel framework forum about museums and monuments with a like/dislike system. It also offers the ability to add monuments and museums, their photos, and to rate and comment on the added objects, as well as the option to search for a place by name or location, e.g., monuments near the city of Kraków.", imageSrc: 'https://picsum.photos/400/200?random=7' },
        { title: 'Tic Tac Toe', desc: "The project is an implementation of a tic-tac-toe game where only three symbols (X or O) can be placed, and then the game proceeds by moving the placed symbols vertically or horizontally. The game includes an option to play against the computer, where the virtual player's algorithm is minimax with alpha-beta pruning.", imageSrc: 'https://picsum.photos/400/200?random=8' },
        { title: 'Jira clone, but for architects', desc: "This project is an online application developed using Spring Boot, with the option to install a desktop version (built with Electron). The application serves as a task management system for architectural firms, handling both small and large tasks. After completing the appropriate form, users can also generate various types of PDF reports.", imageSrc: 'https://picsum.photos/400/200?random=8' },
      ],
    },
    5: {
      name: 'The engineering project',
      colors: ['#000000', '#9370DB'],
      items: [
        { title: 'The game idea', desc: 'Love strategy Together with my girlfriend, we devised the rules for a nondeterministic strategic board game focused on competition and featuring elements of board manipulation. After creating a physical copy of the game, we tested and refined the rules to improve gameplay until we achieved a satisfying result.', imageSrc: 'https://picsum.photos/400/200?random=9' },
        { title: 'Implementing game', desc: "The next step was to implement the board game in the Unity environment. This was done in a way that is intuitive even for a beginner player.", imageSrc: 'https://picsum.photos/400/200?random=10' },
        { title: 'Creating virtual player', desc: "The final part of the engineering project was to create an agent that plays as effectively as possible, enabling a player-versus-computer mode. I accomplished this by applying reinforcement learning using the ML-Agents library.", imageSrc: 'https://picsum.photos/400/200?random=1' },
      ],
    },
    6: {
      name: 'Languages',
      colors: ['#000000', '#D2B48C'],
      items: [
        { title: 'English', desc: 'Enjoy nature I always read documentation, write prompts, and search for information in English. I can also fluently speak and write in this language.', imageSrc: 'https://picsum.photos/400/200?random=11' },
        { title: 'Polish', desc: 'My native language.', imageSrc: 'https://picsum.photos/400/200?random=12' },
        { title: 'Russian', desc: 'I can read the Russian alphabet and understand most written and spoken sentences.', imageSrc: 'https://picsum.photos/400/200?random=1' },
        { title: 'Italian', desc: "It's a language I'm currently focused on learning. I understand most of it, and I'm working on learning how to speak it fluently.", imageSrc: 'https://picsum.photos/400/200?random=2' },


      ],
    },
    7: {
      name: 'Large language models',
      colors: ['#000000', '#4682B4'],
      items: [
        { title: 'My approach to LLM', desc: "Since I learned to program long before these models existed, I taught myself to code well using only knowledge, the internet, and documentation. I use these technologies to speed up the process of writing code.", imageSrc: 'https://picsum.photos/400/200?random=13' },
        { title: 'Moleds I use', desc: 'I use a wide variety of models. When it comes to programming, I try to keep up with technological innovations and use the one that best solves code-related problems. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: 'https://picsum.photos/400/200?random=14' },
      ],
    },
    8: {
      name: 'Goals',
      colors: ['#000000', '#CD5C5C'],
      items: [
        { title: 'Career', desc: 'Utilizing my newly acquired knowledge and skills, I wish to develop myself and carry out interesting projects within an engaged team.', imageSrc: 'https://picsum.photos/400/200?random=15' },
        { title: 'Personal', desc: 'Currently, I am writing individual projects, learning the Italian language and developing myself to become a better teacher.', imageSrc: 'https://picsum.photos/400/200?random=16' },
      ],
    },
    9: {
      name: 'Contact',
      colors: ['#000000', '#5F9EA0'],
      items: [
        { title: 'Email', desc: 'kamil.krukar999@gmail.com', imageSrc: 'https://picsum.photos/400/200?random=17' },
        { title: 'Phone number', desc: '+48 530 552 656', imageSrc: 'https://picsum.photos/400/200?random=18' },
      ],
    },
    10: {
      name: 'About Me',
      colors: ['#000000', '#BDB76B'],
      items: [
        { title: 'Background', desc: 'I am an engineer from Poland, and I love coding, mathematics, and logic games. Currently, I work as an online tutor, teaching computer science and mathematics. Besides that, I focus on personal development and pursuing my passions.', imageSrc: 'https://picsum.photos/400/200?random=19' },
        { title: 'Board Games', desc: 'I have quite a substantial collection of board games, which is my favorite way to spend time with friends. Together with my girlfriend, we are working on the rules and publication of our own board game.', imageSrc: 'https://picsum.photos/400/200?random=20' },
        { title: 'Working out', desc: 'My greatest achievement is running a marathon. Currently, I don’t run very often, but I try to exercise to stay in shape.', imageSrc: 'https://picsum.photos/400/200?random=22' },
        { title: 'Economics', desc: 'I am interested in macroeconomic phenomena, economic systems, and the history of money.', imageSrc: 'https://picsum.photos/400/200?random=12' },
      ],
    },
  };

  const handleRollComplete = (value) => {
    setRolling(false);
    setPrevPosition(position);
    const newPosition = ((position - 1 + value) % 10) + 1;
    setPosition(newPosition);
  };
  // Convert topicsInfo object to an array of topics with their original position keys
  const topicsArray = Object.keys(topicsInfo).map((key) => ({
    id: Number(key), // Preserve the original key (1-10)
    name: topicsInfo[key].name,
  }));

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
      <h1 style={{ color: 'white', fontSize: '2.5rem'}}>Hi, I'm Kamil Krukar</h1>
      <div className="main-container">
        <div className="game-container">
          <GameBoard
            position={position}
            prevPosition={prevPosition}
            onPositionChange={handlePositionChange}
            topics={topicsArray}
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