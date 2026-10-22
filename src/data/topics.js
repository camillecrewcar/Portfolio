import ComputerScienceIcon from '../res/ComputerScience.jpeg';
import TechnicalSchoolIcon from '../res/TechnicalSchool.jpg';
import TutorIcon from '../res/Tutor.jpg';
import UniversityProjectsIcon from '../res/UniversityProjects.jpg';
import FrontendIcon from '../res/Frontend.png';
import BackendIcon from '../res/Backend.png';
import GameDevIcon from '../res/GameDev.png';
import MachineLearningIcon from '../res/MachineLearning.png';
import BasicsIcon from '../res/Basics.jpg';
import MuseumForumIcon from '../res/MuseumForum.jpg';
import TicTacToeIcon from '../res/TicTacToe.png';
import JiraCloneIcon from '../res/architecture.jpg';
import GameIdeaIcon from '../res/board.png';
import ImplementingGameIcon from '../res/Unity-logo.png';
import VirtualPlayerIcon from '../res/mlagents.png';
import EnglishIcon from '../res/english.png';
import PolishIcon from '../res/polish.png';
import RussianIcon from '../res/russian.png';
import ItalianIcon from '../res/italian.png';
import LLMApproachIcon from '../res/llm.jpg';
import LLMModelsIcon from '../res/copilot.png';
import CareerIcon from '../res/developing.png';
import PersonalIcon from '../res/coding.jpg';
import EmailIcon from '../res/email.jpg';
import PhoneIcon from '../res/phone.png';
import BackgroundIcon from '../res/aboutMe.png';
import BoardGamesIcon from '../res/boardgames.png';
import WorkingOutIcon from '../res/sport.png';
import EconomicsIcon from '../res/economics.png';
import AIcert from '../res/AIcert.jpg';
import DK from '../res/DK.png';

// Photo shown on the START player card; replace with a dedicated headshot if you have one
export { default as profilePhoto } from '../res/ComputerScience.jpeg';

export const topicsInfoEn = {
  1: {
    name: 'Education',
    colors: ['#000000', '#D4A5A5'],
    items: [
      { title: 'Engineering degree in Computer Science', desc: 'I studied with great enthusiasm at the University of Rzeszów. I learned important programming and mathematical skills here. As a year prefect, actively participating in the academic life of the university I acquired new soft skills. I look forward to continue my academic adventure in the future.', imageSrc: ComputerScienceIcon },
      { title: 'AI in business development', desc: 'In this course created by Google and SGH, I gained practical skills in data analysis, process automation, and AI/ML integration in business environments. The training focused on developing future-oriented competencies relevant to the IT and fintech sectors.', imageSrc: AIcert },
      { title: 'Ecomomics, my current academic field of study', desc: 'Studying economics has equipped me with a strong understanding of market dynamics, data-driven decision-making, and business strategy. This background enables me to analyze trends, evaluate performance, and contribute to effective business planning and growth.', imageSrc: EconomicsIcon },
      { title: 'technical school degree', desc: 'I completed an electrical technical school with a focus on IT at Technical School No. 5 in Krosno. There, I acquired basic programming and hardware skills. I use this knowledge daily, not only by writing programs but also by independently solving technical problems (not just my own).', imageSrc: TechnicalSchoolIcon },
    ],
  },
  2: {
    name: 'Experience',
    colors: ['#000000', '#6B7280'],
    items: [
      { 
        title: 'Tutor – Dobre Korepetycje', 
        desc: 'I currently work at Dobre Korepetycje, teaching computer science and mathematics online to primary and secondary school students. I prepare individual learning materials and adjust the pace and difficulty to the needs of each student, combining technical knowledge with effective teaching skills.', 
        imageSrc: DK 
      },
      { 
        title: 'Tutor – GoStudent', 
        desc: 'I worked for two years at GoStudent, teaching computer science and mathematics to students from Poland and abroad. I gained experience in online teaching, adapting to different learning styles, and tailoring content to the age and level of the students.', 
        imageSrc: TutorIcon 
      },
      { 
        title: 'University projects', 
        desc: 'During my studies, I gained experience in project planning, coding in languages such as Python and Java, and using tools like Git and databases. I also improved my teamwork, communication, and problem-solving skills while working on technical projects.', 
        imageSrc: UniversityProjectsIcon 
      },
    ],
  },

  3: {
    name: 'Skills',
    colors: ['#000000', '#4A704A'],
    items: [
      { title: 'Html, CSS, JS, React, Bootstrap, android UI', desc: 'Working with these technologies, I honed my ability to craft dynamic and responsive web interfaces. Additionally, my experience with Android UI design strengthened my skills in developing user-friendly mobile applications.', imageSrc: FrontendIcon },
      { title: 'SQl, Laravel, PHP, Java, SpringBoot', desc: 'I built robust backend systems and mastered database management. I developed scalable server-side applications with a focus on efficient functionality.', imageSrc: BackendIcon },
      { title: 'GameDev', desc: 'I recently started my journey in this field. I have already created a few projects using the Unity engine and continue to educate myself in this area.', imageSrc: GameDevIcon },
      { title: 'Machine learning', desc: 'I have also managed to create several projects based on reinforcement learning. I am continuously expanding my knowledge in this area.', imageSrc: MachineLearningIcon },
      { title: 'Basics of any popular programming language', desc: 'Because I have been learning and teaching others to code for many years, I know the basics of every popular programming language. I can quickly acquire the necessary knowledge to solve a problem and learn a completely new technology from scratch.', imageSrc: BasicsIcon },
    ],
  },
  4: {
    name: 'Projects',
    colors: ['#000000', '#D97706'],
    items: [
      { title: 'Museum forum', desc: "This project is a classic Laravel framework forum about museums and monuments with a like/dislike system. It also offers the ability to add monuments and museums, their photos, and to rate and comment on the added objects, as well as the option to search for a place by name or location, e.g., monuments near the city of Kraków.", imageSrc: MuseumForumIcon },
      { title: 'Tic Tac Toe', desc: "The project is an implementation of a tic-tac-toe game where only three symbols (X or O) can be placed, and then the game proceeds by moving the placed symbols vertically or horizontally. The game includes an option to play against the computer, where the virtual player's algorithm is minimax with alpha-beta pruning.", imageSrc: TicTacToeIcon },
      { title: 'Jira clone, but for architects', desc: "This project is an online application developed using Spring Boot, with the option to install a desktop version (built with Electron). The application serves as a task management system for architectural firms, handling both small and large tasks. After completing the appropriate form, users can also generate various types of PDF reports.", imageSrc: JiraCloneIcon },
    ],
  },
  5: {
    name: 'The engineering project',
    colors: ['#000000', '#9370DB'],
    items: [
      { title: 'The game idea', desc: 'Together with my girlfriend, we devised the rules for a nondeterministic strategic board game focused on competition and featuring elements of board manipulation. After creating a physical copy of the game, we tested and refined the rules to improve gameplay until we achieved a satisfying result.', imageSrc: GameIdeaIcon },
      { title: 'Implementing game', desc: "The next step was to implement the board game in the Unity environment. This was done in a way that is intuitive even for a beginner player.", imageSrc: ImplementingGameIcon },
      { title: 'Creating virtual player', desc: "The final part of the engineering project was to create an agent that plays as effectively as possible, enabling a player-versus-computer mode. I accomplished this by applying reinforcement learning using the ML-Agents library.", imageSrc: VirtualPlayerIcon },
    ],
  },
  6: {
    name: 'Languages',
    colors: ['#000000', '#D2B48C'],
    items: [
      { title: 'English', desc: 'I always read documentation, write prompts, and search for information in English. I can also fluently speak and write in this language.', imageSrc: EnglishIcon },
      { title: 'Polish', desc: 'My native language.', imageSrc: PolishIcon },
      { title: 'Russian', desc: 'I can read the Russian alphabet and understand most written and spoken sentences.', imageSrc: RussianIcon },
      { title: 'Italian', desc: "It's a language I'm currently focused on learning. I understand most of it, and I'm working on learning how to speak it fluently.", imageSrc: ItalianIcon },
    ],
  },
  7: {
    name: 'Large language models',
    colors: ['#000000', '#4682B4'],
    items: [
      { title: 'My approach to LLM', desc: "Since I learned to program long before these models existed, I taught myself to code well using only knowledge, the internet, and documentation. I use these technologies to speed up the process of writing code.", imageSrc: LLMApproachIcon },
      { title: 'Moleds I use', desc: 'I use a wide variety of models. When it comes to programming, I try to keep up with technological innovations and use the one that best solves code-related problems. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: LLMModelsIcon },
    ],
  },
  8: {
    name: 'Goals',
    colors: ['#000000', '#CD5C5C'],
    items: [
      { title: 'Career', desc: 'Utilizing my newly acquired knowledge and skills, I wish to develop myself and carry out interesting projects within an engaged team.', imageSrc: CareerIcon },
      { title: 'Personal', desc: 'Currently, I am writing individual projects, learning the Italian language and developing myself to become a better teacher.', imageSrc: PersonalIcon },
    ],
  },
  9: {
    name: 'Contact',
    colors: ['#000000', '#5F9EA0'],
    items: [
      { title: 'Email', desc: 'kamil.krukar999@gmail.com', href: 'mailto:kamil.krukar999@gmail.com', imageSrc: EmailIcon },
      { title: 'Phone number', desc: '+48 530 552 656', href: 'tel:+48530552656', imageSrc: PhoneIcon },
    ],
  },
  10: {
    name: 'About Me',
    colors: ['#000000', '#BDB76B'],
    items: [
      { title: 'Background', desc: 'I am an engineer from Poland, and I love coding, mathematics, and logic games. Currently, I work as an online tutor, teaching computer science and mathematics. Besides that, I focus on personal development and pursuing my passions.', imageSrc: BackgroundIcon },
      { title: 'Board Games', desc: 'I have quite a substantial collection of board games, which is my favorite way to spend time with friends. Together with my girlfriend, we are working on the rules and publication of our own board game.', imageSrc: BoardGamesIcon },
      { title: 'Working out', desc: 'My greatest achievement is running a marathon. Currently, I don’t run very often, but I try to exercise to stay in shape.', imageSrc: WorkingOutIcon },
      { title: 'Economics', desc: 'I am interested in macroeconomic phenomena, economic systems, and the history of money.', imageSrc: EconomicsIcon },
    ],
  },
};

export const topicsInfoPl = {
  1: {
    name: 'Edukacja',
    colors: ['#000000', '#D4A5A5'],
    items: [
      { title: 'Tytuł inżyniera informatyki', desc: 'Studiowałem z wielkim entuzjazmem na Uniwersytecie Rzeszowskim. Zdobyłem tam ważne umiejętności programistyczne i matematyczne. Jako starosta roku, aktywnie uczestnicząc w życiu akademickim uczelni, nabyłem nowe umiejętności miękkie. Z niecierpliwością czekam na kontynuację mojej akademickiej przygody w przyszłości.', imageSrc: ComputerScienceIcon },
      { title: 'Umiejętności jutra', desc: 'W tym kursie organizowanym przez Google i SGH, zdobyłem praktyczne umiejętności w zakresie analizy danych, automatyzacji procesów i integracji rozwiązań AI/ML w środowisku biznesowym. Szkolenie koncentrowało się na rozwijaniu kompetencji przyszłości istotnych w branżach IT i fintech.', imageSrc: AIcert },        

      { title: 'Ekonomia (studia w trakcie)', desc: 'Studiowanie ekonomii wyposażyło mnie w solidne zrozumienie mechanizmów rynkowych, podejmowania decyzji opartych na danych oraz strategii biznesowej. Dzięki temu potrafię analizować trendy, oceniać wyniki i skutecznie wspierać planowanie oraz rozwój biznesu.', imageSrc: EconomicsIcon },        
      { title: 'Wykształcenie techniczne', desc: 'Ukończyłem technikum o profilu informatycznym w Zespole Szkół Technicznych nr 5 w Krośnie. Tam nabyłem podstawowe umiejętności programistyczne i sprzętowe. Korzystam z tej wiedzy codziennie, nie tylko pisząc programy, ale również samodzielnie rozwiązując problemy techniczne (nie tylko swoje).', imageSrc: TechnicalSchoolIcon },
    ],
  },
  2: {
    name: 'Doświadczenie',
    colors: ['#000000', '#6B7280'],
    items: [
      { 
        title: 'Korepetytor – Dobre Korepetycje', 
        desc: 'Obecnie pracuję w firmie Dobre Korepetycje, gdzie prowadzę zajęcia online z informatyki i matematyki dla uczniów szkół podstawowych i średnich. Przygotowuję indywidualne materiały dydaktyczne, dostosowując tempo nauki i poziom trudności do potrzeb uczniów. Praca ta pozwala mi łączyć wiedzę techniczną z umiejętnością przekazywania wiedzy w przystępny sposób.', 
        imageSrc: DK 
      },
      { 
        title: 'Korepetytor – GoStudent', 
        desc: 'Przez dwa lata pracowałem w platformie edukacyjnej GoStudent, prowadząc zajęcia z informatyki i matematyki dla uczniów z Polski i zagranicy. Zdobyłem doświadczenie w nauczaniu online, pracy z różnymi stylami uczenia się oraz w dostosowywaniu treści do wieku i poziomu uczniów.', 
        imageSrc: TutorIcon 
      },
      { 
        title: 'Projekty uniwersyteckie', 
        desc: 'Podczas studiów zdobyłem doświadczenie w planowaniu projektów, kodowaniu w językach takich jak Python i Java oraz korzystaniu z narzędzi takich jak Git i bazy danych. Poprawiłem również swoje umiejętności pracy zespołowej, komunikacji i rozwiązywania problemów podczas pracy nad projektami technicznymi.', 
        imageSrc: UniversityProjectsIcon 
      },
    ],
  },

  3: {
    name: 'Umiejętności',
    colors: ['#000000', '#4A704A'],
    items: [
      { title: 'Html, CSS, JS, React, Bootstrap, Android', desc: 'Pracując z tymi technologiami, udoskonaliłem swoją zdolność do tworzenia dynamicznych i responsywnych interfejsów internetowych. Dodatkowo, moje doświadczenie z projektowaniem interfejsu użytkownika Androida wzmocniło moje umiejętności w tworzeniu przyjaznych dla użytkownika aplikacji mobilnych.', imageSrc: FrontendIcon },
      { title: 'SQL, Laravel, PHP, Java, SpringBoot', desc: 'Zbudowałem solidne systemy backendowe i opanowałem zarządzanie bazami danych. Rozwinąłem skalowalne aplikacje serwerowe, koncentrując się na efektywnej funkcjonalności.', imageSrc: BackendIcon },
      { title: 'Tworzenie gier', desc: 'Niedawno rozpocząłem swoją przygodę w tej dziedzinie. Stworzyłem już kilka projektów przy użyciu silnika Unity i nadal kształcę się w tym obszarze.', imageSrc: GameDevIcon },
      { title: 'Uczenie maszynowe', desc: 'Udało mi się również stworzyć kilka projektów opartych na uczeniu ze wzmocnieniem. Nieustannie poszerzam swoją wiedzę w tym zakresie.', imageSrc: MachineLearningIcon },
      { title: 'Podstawy każdego popularnego języka programowania', desc: 'Ponieważ od wielu lat uczę się i uczę innych kodowania, znam podstawy każdego popularnego języka programowania. Mogę szybko zdobyć niezbędną wiedzę do rozwiązania problemu i nauczyć się zupełnie nowej technologii od podstaw.', imageSrc: BasicsIcon },
    ],
  },
  4: {
    name: 'Projekty',
    colors: ['#000000', '#D97706'],
    items: [
      { title: 'Forum o muzeach i zabytchach', desc: "Ten projekt to klasyczne forum w frameworku Laravel o muzeach i zabytkach z systemem polubień/nielubień. Oferuje również możliwość dodawania zabytków i muzeów, ich zdjęć, oceniania i komentowania dodanych obiektów, a także opcję wyszukiwania miejsca według nazwy lub lokalizacji, np. zabytków w pobliżu miasta Kraków.", imageSrc: MuseumForumIcon },
      { title: 'Kółko i krzyżyk', desc: "Projekt jest implementacją gry w kółko i krzyżyk, gdzie można umieścić tylko trzy symbole (X lub O), a następnie gra przebiega poprzez przesuwanie umieszczonych symboli pionowo lub poziomo. Gra zawiera opcję gry przeciwko komputerowi, gdzie algorytm wirtualnego gracza to minimax z przycinaniem alfa-beta.", imageSrc: TicTacToeIcon },
      { title: 'Klon Jiry, ale dla architektów', desc: "Ten projekt to aplikacja internetowa opracowana przy użyciu Spring Boot, z opcją instalacji wersji desktopowej (zbudowanej przy użyciu Electrona). Aplikacja służy jako system zarządzania zadaniami dla firm architektonicznych, obsługujący zarówno małe, jak i duże zadania. Po wypełnieniu odpowiedniego formularza użytkownicy mogą również generować różne rodzaje raportów PDF.", imageSrc: JiraCloneIcon },
    ],
  },
  5: {
    name: 'Projekt inżynierski',
    colors: ['#000000', '#9370DB'],
    items: [
      { title: 'Pomysł na grę', desc: 'Wspólnie z moją dziewczyną opracowaliśmy zasady niedeterministycznej strategicznej gry planszowej skoncentrowanej na rywalizacji i zawierającej elementy manipulacji planszą. Po stworzeniu fizycznej kopii gry, testowaliśmy i udoskonalaliśmy zasady, aby poprawić rozgrywkę, aż osiągnęliśmy satysfakcjonujący wynik.', imageSrc: GameIdeaIcon },
      { title: 'Implementacja gry', desc: "Kolejnym krokiem było zaimplementowanie gry planszowej w środowisku Unity. Zostało to zrobione w sposób intuicyjny nawet dla początkującego gracza.", imageSrc: ImplementingGameIcon },
      { title: 'Tworzenie wirtualnego gracza', desc: "Ostatnią częścią projektu inżynierskiego było stworzenie agenta, który gra jak najefektywniej, umożliwiając tryb gracz kontra komputer. Osiągnąłem to, stosując uczenie ze wzmocnieniem przy użyciu biblioteki ML-Agents.", imageSrc: VirtualPlayerIcon },
    ],
  },
  6: {
    name: 'Języki',
    colors: ['#000000', '#D2B48C'],
    items: [
      { title: 'Angielski', desc: 'Zawsze czytam dokumentację, piszę zapytania i szukam informacji po angielsku. Potrafię również płynnie mówić i pisać w tym języku.', imageSrc: EnglishIcon },
      { title: 'Polski', desc: 'Mój język ojczysty.', imageSrc: PolishIcon },
      { title: 'Rosyjski', desc: 'Potrafię czytać alfabet rosyjski i rozumiem większość pisanych i mówionych zdań.', imageSrc: RussianIcon },
      { title: 'Włoski', desc: "To język, którego obecnie skupiam się na nauce. Rozumiem jego większość i pracuję nad płynnym mówieniem.", imageSrc: ItalianIcon },
    ],
  },
  7: {
    name: 'Large language models',
    colors: ['#000000', '#4682B4'],
    items: [
      { title: 'Moje podejście do LLM', desc: "Ponieważ nauczyłem się programować na długo przed powstaniem tych modeli, nauczyłem się dobrze kodować używając tylko wiedzy, internetu i dokumentacji. Używam tych technologii, aby przyspieszyć proces pisania kodu.", imageSrc: LLMApproachIcon },
      { title: 'Modele, których używam', desc: 'Korzystam z szerokiej gamy modeli. Jeśli chodzi o programowanie, staram się nadążać za innowacjami technologicznymi i używać tych, które najlepiej rozwiązują problemy związane z kodem. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: LLMModelsIcon },
    ],
  },
  8: {
    name: 'Cele',
    colors: ['#000000', '#CD5C5C'],
    items: [
      { title: 'Kariera', desc: 'Wykorzystując nowo nabytą wiedzę i umiejętności, chcę się rozwijać i realizować ciekawe projekty w zaangażowanym zespole.', imageSrc: CareerIcon },
      { title: 'Osobiste', desc: 'Obecnie piszę indywidualne projekty, uczę się języka włoskiego i rozwijam się, aby stać się lepszym nauczycielem.', imageSrc: PersonalIcon },
    ],
  },
  9: {
    name: 'Kontakt',
    colors: ['#000000', '#5F9EA0'],
    items: [
      { title: 'Email', desc: 'kamil.krukar999@gmail.com', href: 'mailto:kamil.krukar999@gmail.com', imageSrc: EmailIcon },
      { title: 'Numer telefonu', desc: '+48 530 552 656', href: 'tel:+48530552656', imageSrc: PhoneIcon },
    ],
  },
  10: {
    name: 'O mnie',
    colors: ['#000000', '#BDB76B'],
    items: [
      { title: 'Kilka słów o mnie', desc: 'Jestem inżynierem z Polski, kocham kodowanie, matematykę i gry logiczne. Obecnie pracuję jako korepetytor online, ucząc informatyki i matematyki. Oprócz tego skupiam się na rozwoju osobistym i realizacji swoich pasji.', imageSrc: BackgroundIcon },
      { title: 'Gry planszowe', desc: 'Mam dość pokaźną kolekcję gier planszowych, co jest moim ulubionym sposobem spędzania czasu ze znajomymi. Wraz z moją dziewczyną pracujemy nad zasadami i publikacją naszej własnej gry planszowej.', imageSrc: BoardGamesIcon },
      { title: 'Sport', desc: 'Moim największym osiągnięciem jest przebiegnięcie maratonu. Obecnie nie biegam zbyt często, ale staram się ćwiczyć, aby utrzymać formę.', imageSrc: WorkingOutIcon },
      { title: 'Ekonomia', desc: 'Interesuję się zjawiskami makroekonomicznymi, systemami ekonomicznymi i historią pieniądza.', imageSrc: EconomicsIcon },
    ],
  },
};

export const uiText = {
  en: {
    role: 'Computer Science Engineer',
    greeting: "Hi, I'm",
    subtitle: 'Developer and tutor who enjoys code, mathematics and logic games. Roll the dice or pick a space on the board to explore my background.',
    roll: 'Roll the dice',
    hint: 'or pick any space on the path',
    start: 'Start',
    finish: 'Finish',
    intro: {
      player: 'Player 1',
      role: 'Computer Science Engineer',
      about: "I'm an engineer from Poland who loves coding, mathematics and logic games. I teach computer science and mathematics online and build my own projects. Every space on this board is part of my story.",
      stats: ['Projects', 'Skills', 'Languages'],
      cta: 'Roll the dice to start the game',
    },
    contact: 'Contact',
    topic: 'Topic',
    of: 'of',
    previous: 'Previous',
    next: 'Next',
  },
  pl: {
    role: 'Inżynier informatyki',
    greeting: 'Cześć, nazywam się',
    subtitle: 'Programista i korepetytor, który lubi kodowanie, matematykę i gry logiczne. Rzuć kostką lub wybierz pole na planszy, aby mnie poznać.',
    roll: 'Rzuć kostką',
    hint: 'lub wybierz dowolne pole na ścieżce',
    start: 'Start',
    finish: 'Meta',
    intro: {
      player: 'Gracz 1',
      role: 'Inżynier informatyki',
      about: 'Jestem inżynierem z Polski, kocham kodowanie, matematykę i gry logiczne. Uczę online informatyki i matematyki oraz tworzę własne projekty. Każde pole na tej planszy to część mojej historii.',
      stats: ['Projekty', 'Umiejętności', 'Języki'],
      cta: 'Rzuć kostką, aby rozpocząć grę',
    },
    contact: 'Kontakt',
    topic: 'Temat',
    of: 'z',
    previous: 'Poprzedni',
    next: 'Następny',
  },
};
