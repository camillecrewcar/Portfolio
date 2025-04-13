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
  const [language, setLanguage] = useState('en'); // Default language is English

  const topicsInfoEn = {
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

  const topicsInfoPl = {
    1: {
      name: 'Edukacja',
      colors: ['#000000', '#D4A5A5'],
      items: [
        { title: 'Tytuł inżyniera informatyki', desc: 'Studiowałem z wielkim entuzjazmem na Uniwersytecie Rzeszowskim. Zdobyłem tam ważne umiejętności programistyczne i matematyczne. Jako starosta roku, aktywnie uczestnicząc w życiu akademickim uczelni, nabyłem nowe umiejętności miękkie. Z niecierpliwością czekam na kontynuację mojej akademickiej przygody w przyszłości.', imageSrc: 'https://picsum.photos/400/200?random=1' },
        { title: 'Wykształcenie techniczne', desc: 'Ukończyłem technikum o profilu informatycznym w Zespole Szkół Technicznych nr 5 w Krośnie. Tam nabyłem podstawowe umiejętności programistyczne i sprzętowe. Korzystam z tej wiedzy codziennie, nie tylko pisząc programy, ale również samodzielnie rozwiązując problemy techniczne (nie tylko swoje).', imageSrc: 'https://picsum.photos/400/200?random=2' },
      ],
    },
    2: {
      name: 'Doświadczenie',
      colors: ['#000000', '#6B7280'],
      items: [
        { title: 'Korepetytor', desc: 'Obecnie pracuję w GoStudent. Tutaj uczę dzieci i nastolatków w różnym wieku informatyki i matematyki. Wszystkie zajęcia odbywają się online.', imageSrc: 'https://picsum.photos/400/200?random=3' },
        { title: 'Projekty uniwersyteckie', desc: 'Podczas studiów zdobyłem doświadczenie w planowaniu projektów, kodowaniu w językach takich jak Python i Java oraz korzystaniu z narzędzi takich jak Git i bazy danych. Poprawiłem również swoje umiejętności pracy zespołowej, komunikacji i rozwiązywania problemów podczas pracy nad projektami technicznymi.', imageSrc: 'https://picsum.photos/400/200?random=4' },
      ],
    },
    3: {
      name: 'Umiejętności',
      colors: ['#000000', '#4A704A'],
      items: [
        { title: 'Html, CSS, JS, React, Bootstrap, Android', desc: 'Pracując z tymi technologiami, udoskonaliłem swoją zdolność do tworzenia dynamicznych i responsywnych interfejsów internetowych. Dodatkowo, moje doświadczenie z projektowaniem interfejsu użytkownika Androida wzmocniło moje umiejętności w tworzeniu przyjaznych dla użytkownika aplikacji mobilnych.', imageSrc: 'https://picsum.photos/400/200?random=5' },
        { title: 'SQL, Laravel, PHP, Java, SpringBoot', desc: 'Zbudowałem solidne systemy backendowe i opanowałem zarządzanie bazami danych. Rozwinąłem skalowalne aplikacje serwerowe, koncentrując się na efektywnej funkcjonalności.', imageSrc: 'https://picsum.photos/400/200?random=8' },
        { title: 'Tworzenie gier', desc: 'Niedawno rozpocząłem swoją przygodę w tej dziedzinie. Stworzyłem już kilka projektów przy użyciu silnika Unity i nadal kształcę się w tym obszarze.', imageSrc: 'https://picsum.photos/400/200?random=7' },
        { title: 'Uczenie maszynowe', desc: 'Udało mi się również stworzyć kilka projektów opartych na uczeniu ze wzmocnieniem. Nieustannie poszerzam swoją wiedzę w tym zakresie.', imageSrc: 'https://picsum.photos/400/200?random=9' },
        { title: 'Podstawy każdego popularnego języka programowania', desc: 'Ponieważ od wielu lat uczę się i uczę innych kodowania, znam podstawy każdego popularnego języka programowania. Mogę szybko zdobyć niezbędną wiedzę do rozwiązania problemu i nauczyć się zupełnie nowej technologii od podstaw.', imageSrc: 'https://picsum.photos/400/200?random=10' },
      ],
    },
    4: {
      name: 'Projekty',
      colors: ['#000000', '#D97706'],
      items: [
        { title: 'Forum o muzeach i zabytchach', desc: "Ten projekt to klasyczne forum w frameworku Laravel o muzeach i zabytkach z systemem polubień/nielubień. Oferuje również możliwość dodawania zabytków i muzeów, ich zdjęć, oceniania i komentowania dodanych obiektów, a także opcję wyszukiwania miejsca według nazwy lub lokalizacji, np. zabytków w pobliżu miasta Kraków.", imageSrc: 'https://picsum.photos/400/200?random=7' },
        { title: 'Kółko i krzyżyk', desc: "Projekt jest implementacją gry w kółko i krzyżyk, gdzie można umieścić tylko trzy symbole (X lub O), a następnie gra przebiega poprzez przesuwanie umieszczonych symboli pionowo lub poziomo. Gra zawiera opcję gry przeciwko komputerowi, gdzie algorytm wirtualnego gracza to minimax z przycinaniem alfa-beta.", imageSrc: 'https://picsum.photos/400/200?random=8' },
        { title: 'Klon Jiry, ale dla architektów', desc: "Ten projekt to aplikacja internetowa opracowana przy użyciu Spring Boot, z opcją instalacji wersji desktopowej (zbudowanej przy użyciu Electrona). Aplikacja służy jako system zarządzania zadaniami dla firm architektonicznych, obsługujący zarówno małe, jak i duże zadania. Po wypełnieniu odpowiedniego formularza użytkownicy mogą również generować różne rodzaje raportów PDF.", imageSrc: 'https://picsum.photos/400/200?random=8' },
      ],
    },
    5: {
      name: 'Projekt inżynierski',
      colors: ['#000000', '#9370DB'],
      items: [
        { title: 'Pomysł na grę', desc: 'Wspólnie z moją dziewczyną opracowaliśmy zasady niedeterministycznej strategicznej gry planszowej skoncentrowanej na rywalizacji i zawierającej elementy manipulacji planszą. Po stworzeniu fizycznej kopii gry, testowaliśmy i udoskonalaliśmy zasady, aby poprawić rozgrywkę, aż osiągnęliśmy satysfakcjonujący wynik.', imageSrc: 'https://picsum.photos/400/200?random=9' },
        { title: 'Implementacja gry', desc: "Kolejnym krokiem było zaimplementowanie gry planszowej w środowisku Unity. Zostało to zrobione w sposób intuicyjny nawet dla początkującego gracza.", imageSrc: 'https://picsum.photos/400/200?random=10' },
        { title: 'Tworzenie wirtualnego gracza', desc: "Ostatnią częścią projektu inżynierskiego było stworzenie agenta, który gra jak najefektywniej, umożliwiając tryb gracz kontra komputer. Osiągnąłem to, stosując uczenie ze wzmocnieniem przy użyciu biblioteki ML-Agents.", imageSrc: 'https://picsum.photos/400/200?random=1' },
      ],
    },
    6: {
      name: 'Języki',
      colors: ['#000000', '#D2B48C'],
      items: [
        { title: 'Angielski', desc: 'Zawsze czytam dokumentację, piszę zapytania i szukam informacji po angielsku. Potrafię również płynnie mówić i pisać w tym języku.', imageSrc: 'https://picsum.photos/400/200?random=11' },
        { title: 'Polski', desc: 'Mój język ojczysty.', imageSrc: 'https://picsum.photos/400/200?random=12' },
        { title: 'Rosyjski', desc: 'Potrafię czytać alfabet rosyjski i rozumiem większość pisanych i mówionych zdań.', imageSrc: 'https://picsum.photos/400/200?random=1' },
        { title: 'Włoski', desc: "To język, którego obecnie skupiam się na nauce. Rozumiem jego większość i pracuję nad płynnym mówieniem.", imageSrc: 'https://picsum.photos/400/200?random=2' },
      ],
    },
    7: {
      name: 'Large language models',
      colors: ['#000000', '#4682B4'],
      items: [
        { title: 'Moje podejście do LLM', desc: "Ponieważ nauczyłem się programować na długo przed powstaniem tych modeli, nauczyłem się dobrze kodować używając tylko wiedzy, internetu i dokumentacji. Używam tych technologii, aby przyspieszyć proces pisania kodu.", imageSrc: 'https://picsum.photos/400/200?random=13' },
        { title: 'Modele, których używam', desc: 'Korzystam z szerokiej gamy modeli. Jeśli chodzi o programowanie, staram się nadążać za innowacjami technologicznymi i używać tych, które najlepiej rozwiązują problemy związane z kodem. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: 'https://picsum.photos/400/200?random=14' },
      ],
    },
    8: {
      name: 'Cele',
      colors: ['#000000', '#CD5C5C'],
      items: [
        { title: 'Kariera', desc: 'Wykorzystując nowo nabytą wiedzę i umiejętności, chcę się rozwijać i realizować ciekawe projekty w zaangażowanym zespole.', imageSrc: 'https://picsum.photos/400/200?random=15' },
        { title: 'Osobiste', desc: 'Obecnie piszę indywidualne projekty, uczę się języka włoskiego i rozwijam się, aby stać się lepszym nauczycielem.', imageSrc: 'https://picsum.photos/400/200?random=16' },
      ],
    },
    9: {
      name: 'Kontakt',
      colors: ['#000000', '#5F9EA0'],
      items: [
        { title: 'Email', desc: 'kamil.krukar999@gmail.com', imageSrc: 'https://picsum.photos/400/200?random=17' },
        { title: 'Numer telefonu', desc: '+48 530 552 656', imageSrc: 'https://picsum.photos/400/200?random=18' },
      ],
    },
    10: {
      name: 'O mnie',
      colors: ['#000000', '#BDB76B'],
      items: [
        { title: 'Kilka słów o mnie', desc: 'Jestem inżynierem z Polski, kocham kodowanie, matematykę i gry logiczne. Obecnie pracuję jako korepetytor online, ucząc informatyki i matematyki. Oprócz tego skupiam się na rozwoju osobistym i realizacji swoich pasji.', imageSrc: 'https://picsum.photos/400/200?random=19' },
        { title: 'Gry planszowe', desc: 'Mam dość pokaźną kolekcję gier planszowych, co jest moim ulubionym sposobem spędzania czasu ze znajomymi. Wraz z moją dziewczyną pracujemy nad zasadami i publikacją naszej własnej gry planszowej.', imageSrc: 'https://picsum.photos/400/200?random=20' },
        { title: 'Sport', desc: 'Moim największym osiągnięciem jest przebiegnięcie maratonu. Obecnie nie biegam zbyt często, ale staram się ćwiczyć, aby utrzymać formę.', imageSrc: 'https://picsum.photos/400/200?random=22' },
        { title: 'Ekonomia', desc: 'Interesuję się zjawiskami makroekonomicznymi, systemami ekonomicznymi i historią pieniądza.', imageSrc: 'https://picsum.photos/400/200?random=12' },
      ],
    },
  };

  // Choose the topics info based on language
  const topicsInfo = language === 'en' ? topicsInfoEn : topicsInfoPl;

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
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
      <div className="language-toggle">
        <button 
          onClick={toggleLanguage} 
          style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            padding: '8px 16px',
            background: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            zIndex: 10
          }}
        >
          {language === 'en' ? 'Polski 🇵🇱' : 'English 🇬🇧'}
        </button>
      </div>
      <h1 style={{ color: 'white', fontSize: '2.5rem'}}>
        {language === 'en' ? "Hi, I'm Kamil Krukar" : "Cześć, jestem Kamil Krukar"}
      </h1>
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