import images from './images';
import { CONTACT } from '../constants/contact';

// English content: board topics and interface text

export const topics = [
  {
    id: 1,
    name: 'Education',
    color: '#D4A5A5',
    items: [
      { title: "Master's degree in Information Technology – Warsaw University of Technology", desc: "I am currently a master's student in Information Technology at the Warsaw University of Technology (Politechnika Warszawska), specialising in IT in Business. The programme connects advanced computer science with the way technology supports business processes and decision-making.", imageSrc: images.warsawUniversity },
      { title: 'Engineering degree in Computer Science', desc: 'I studied with great enthusiasm at the University of Rzeszów. I learned important programming and mathematical skills here. As a year prefect, actively participating in the academic life of the university I acquired new soft skills. I look forward to continue my academic adventure in the future.', imageSrc: images.engineeringDiploma },
      { title: 'AI in business development', desc: 'In this course created by Google and SGH, I gained practical skills in data analysis, process automation, and AI/ML integration in business environments. The training focused on developing future-oriented competencies relevant to the IT and fintech sectors.', imageSrc: images.aiCertificate },
      { title: 'technical school degree', desc: 'I completed an electrical technical school with a focus on IT at Technical School No. 5 in Krosno. There, I acquired basic programming and hardware skills. I use this knowledge daily, not only by writing programs but also by independently solving technical problems (not just my own).', imageSrc: images.technicalSchool },
    ],
  },
  {
    id: 2,
    name: 'Experience',
    color: '#6B7280',
    items: [
      {
        title: 'Financial Advisor – inPartners',
        desc: 'I currently work as a financial advisor at inPartners, helping clients choose insurance, loans and investment products. I analyse each client’s situation and needs, and explain the available options in a clear, understandable way.',
        imageSrc: images.inpartners,
        imageFit: 'contain'
      },
      {
        title: 'Tutor – Dobre Korepetycje',
        desc: 'I currently work at Dobre Korepetycje, teaching computer science and mathematics online to primary and secondary school students. I prepare individual learning materials and adjust the pace and difficulty to the needs of each student, combining technical knowledge with effective teaching skills.',
        imageSrc: images.dobreKorepetycje
      },
      {
        title: 'Junior Database Intern – Deloitte',
        desc: 'I completed a 4-month internship at Deloitte as a junior database intern in the Risk department. I worked on database migrations and with the SAP system, ServiceNow and Excel, gaining hands-on experience with data in a large corporate environment.',
        imageSrc: images.deloitte
      },
      {
        title: 'Intern – Simplicity Games',
        desc: 'I completed an internship at a company that develops desktop and mobile games, where I took part in designing, testing and optimising applications. I gained hands-on experience in teamwork, working with game engines, and implementing interactive elements and gameplay logic.',
        imageSrc: images.simplicityGames,
        imageFit: 'contain',
        // The logo file has wide white margins, so zoom in on it
        imageScale: 1.45
      },
      {
        title: 'Tutor – GoStudent',
        desc: 'I worked for two years at GoStudent, teaching computer science and mathematics to students from Poland and abroad. I gained experience in online teaching, adapting to different learning styles, and tailoring content to the age and level of the students.',
        imageSrc: images.gostudent
      },
      {
        title: 'University projects',
        desc: 'During my studies, I gained experience in project planning, coding in languages such as Python and Java, and using tools like Git and databases. I also improved my teamwork, communication, and problem-solving skills while working on technical projects.',
        imageSrc: images.universityProjects
      },
    ],
  },
  {
    id: 3,
    name: 'Skills',
    color: '#4A704A',
    items: [
      { title: 'Html, CSS, JS, React, Bootstrap, android UI', desc: 'Working with these technologies, I honed my ability to craft dynamic and responsive web interfaces. Additionally, my experience with Android UI design strengthened my skills in developing user-friendly mobile applications.', imageSrc: images.frontend },
      { title: 'SQl, Laravel, PHP, Java, SpringBoot', desc: 'I built robust backend systems and mastered database management. I developed scalable server-side applications with a focus on efficient functionality.', imageSrc: images.backend },
      { title: 'GameDev', desc: 'I recently started my journey in this field. I have already created a few projects using the Unity engine and continue to educate myself in this area.', imageSrc: images.gamedev },
      { title: 'Machine learning', desc: 'I have also managed to create several projects based on reinforcement learning. I am continuously expanding my knowledge in this area.', imageSrc: images.machineLearning },
      { title: 'Basics of any popular programming language', desc: 'Because I have been learning and teaching others to code for many years, I know the basics of every popular programming language. I can quickly acquire the necessary knowledge to solve a problem and learn a completely new technology from scratch.', imageSrc: images.programmingBasics },
    ],
  },
  {
    id: 4,
    name: 'Projects',
    color: '#D97706',
    items: [
      { title: 'Museum forum', desc: "This project is a classic Laravel framework forum about museums and monuments with a like/dislike system. It also offers the ability to add monuments and museums, their photos, and to rate and comment on the added objects, as well as the option to search for a place by name or location, e.g., monuments near the city of Kraków.", imageSrc: images.museumForum },
      { title: 'Tic Tac Toe', desc: "The project is an implementation of a tic-tac-toe game where only three symbols (X or O) can be placed, and then the game proceeds by moving the placed symbols vertically or horizontally. The game includes an option to play against the computer, where the virtual player's algorithm is minimax with alpha-beta pruning.", imageSrc: images.ticTacToe },
      { title: 'Jira clone, but for architects', desc: "This project is an online application developed using Spring Boot, with the option to install a desktop version (built with Electron). The application serves as a task management system for architectural firms, handling both small and large tasks. After completing the appropriate form, users can also generate various types of PDF reports.", imageSrc: images.jiraClone },
    ],
  },
  {
    id: 5,
    name: 'The engineering project',
    color: '#9370DB',
    items: [
      { title: 'The game idea', desc: 'Together with my girlfriend, we devised the rules for a nondeterministic strategic board game focused on competition and featuring elements of board manipulation. After creating a physical copy of the game, we tested and refined the rules to improve gameplay until we achieved a satisfying result.', imageSrc: images.boardGameIdea },
      { title: 'Implementing game', desc: "The next step was to implement the board game in the Unity environment. This was done in a way that is intuitive even for a beginner player.", imageSrc: images.unity },
      { title: 'Creating virtual player', desc: "The final part of the engineering project was to create an agent that plays as effectively as possible, enabling a player-versus-computer mode. I accomplished this by applying reinforcement learning using the ML-Agents library.", imageSrc: images.mlAgents },
    ],
  },
  {
    id: 6,
    name: 'Languages',
    color: '#D2B48C',
    items: [
      { title: 'English', desc: 'I always read documentation, write prompts, and search for information in English. I can also fluently speak and write in this language.', imageSrc: images.english },
      { title: 'Polish', desc: 'My native language.', imageSrc: images.polish },
      { title: 'Russian', desc: 'I can read the Russian alphabet and understand most written and spoken sentences.', imageSrc: images.russian },
      { title: 'Italian', desc: "It's a language I'm currently focused on learning. I understand most of it, and I'm working on learning how to speak it fluently.", imageSrc: images.italian },
    ],
  },
  {
    id: 7,
    name: 'Large language models',
    color: '#4682B4',
    items: [
      { title: 'My approach to LLM', desc: "Since I learned to program long before these models existed, I taught myself to code well using only knowledge, the internet, and documentation. I use these technologies to speed up the process of writing code.", imageSrc: images.llmApproach },
      { title: 'Moleds I use', desc: 'I use a wide variety of models. When it comes to programming, I try to keep up with technological innovations and use the one that best solves code-related problems. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: images.llmModels },
    ],
  },
  {
    id: 8,
    name: 'Goals',
    color: '#CD5C5C',
    items: [
      { title: 'Career', desc: 'Utilizing my newly acquired knowledge and skills, I wish to develop myself and carry out interesting projects within an engaged team.', imageSrc: images.career },
      { title: 'Personal', desc: 'Currently, I am writing individual projects, learning the Italian language and developing myself to become a better teacher.', imageSrc: images.coding },
    ],
  },
  {
    id: 9,
    name: 'Contact',
    color: '#5F9EA0',
    items: [
      { title: 'Email', desc: CONTACT.email, href: `mailto:${CONTACT.email}`, imageSrc: images.email },
      { title: 'Phone number', desc: CONTACT.phone, href: CONTACT.phoneHref, imageSrc: images.phone },
      { title: 'GitHub', desc: 'github.com/camillecrewcar', href: CONTACT.github, mark: 'GH', markColor: '#24292f' },
      { title: 'LinkedIn', desc: 'linkedin.com/in/kamil-krukar-60b16b238', href: CONTACT.linkedin, mark: 'in', markColor: '#0a66c2' },
    ],
  },
  {
    id: 10,
    name: 'About Me',
    color: '#BDB76B',
    items: [
      { title: 'Background', desc: 'I am an engineer from Poland, and I love coding, mathematics, and logic games. Currently, I work as an online tutor, teaching computer science and mathematics. Besides that, I focus on personal development and pursuing my passions.', imageSrc: images.aboutMe },
      { title: 'Board Games', desc: 'I have quite a substantial collection of board games, which is my favorite way to spend time with friends. Together with my girlfriend, we are working on the rules and publication of our own board game.', imageSrc: images.boardGames },
      { title: 'Working out', desc: 'My greatest achievement is running a marathon. Currently, I don’t run very often, but I try to exercise to stay in shape.', imageSrc: images.sport },
      { title: 'Economics', desc: 'I am interested in macroeconomic phenomena, economic systems, and the history of money.', imageSrc: images.economics },
    ],
  },
];

export const ui = {
  role: 'Computer Science Engineer',
  greeting: "Hi, I'm",
  subtitle: 'Developer and tutor who enjoys code, mathematics and logic games. Roll the dice or pick a space on the board to explore my background.',
  roll: 'Roll the dice',
  hint: 'or pick any space on the path',
  rolled: 'You rolled',
  start: 'Start',
  finish: 'Finish',
  intro: {
    role: 'Computer Science Engineer',
    about: "I'm an engineer from Poland who loves coding, mathematics and logic games. I teach computer science and mathematics online and build my own projects. Every space on this board is part of my story.",
    cta: 'Roll the dice to start the game',
  },
  finishCard: {
    eyebrow: 'Finish',
    title: 'Thanks for playing!',
    intro: "You've reached the finish, so now you know my story. Here is what I can bring to your organization or team:",
    offers: [
      { title: 'Solid technical foundation', desc: "Engineering degree in Computer Science, now a master's in IT at Warsaw University of Technology." },
      { title: 'Software development', desc: 'Web and backend applications with React, Java/Spring Boot, Laravel, PHP and SQL.' },
      { title: 'Data and business systems', desc: 'Database migrations and work with SAP, ServiceNow and Excel from my Deloitte internship.' },
      { title: 'Clear communication', desc: 'Years of tutoring taught me to explain complex topics simply and adapt to any audience.' },
      { title: 'Client-focused mindset', desc: 'As a financial advisor I listen to client needs and turn them into concrete solutions.' },
      { title: 'Fast learner, team player', desc: 'From game development to machine learning, I pick up new tools quickly and enjoy teamwork.' },
    ],
    email: 'Email me',
    call: 'Call me',
    again: 'Play again',
  },
  contact: 'Contact',
  topic: 'Topic',
  of: 'of',
  previous: 'Previous',
  next: 'Next',
};
