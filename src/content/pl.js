import images from './images';
import { CONTACT, CV_URL } from '../constants/contact';

// Polish content: board topics and interface text

export const topics = [
  {
    id: 1,
    name: 'Edukacja',
    color: '#D4A5A5',
    items: [
      { title: 'Studia magisterskie – Politechnika Warszawska', desc: 'Obecnie jestem studentem studiów magisterskich na kierunku Informatyka na Politechnice Warszawskiej, specjalizacja Informatyka w biznesie. Studia łączą zaawansowaną informatykę z wykorzystaniem technologii we wspieraniu procesów i decyzji biznesowych.', imageSrc: images.warsawUniversity },
      { title: 'Tytuł inżyniera informatyki', desc: 'Studiowałem z wielkim entuzjazmem na Uniwersytecie Rzeszowskim. Zdobyłem tam ważne umiejętności programistyczne i matematyczne. Jako starosta roku, aktywnie uczestnicząc w życiu akademickim uczelni, nabyłem nowe umiejętności miękkie. Z niecierpliwością czekam na kontynuację mojej akademickiej przygody w przyszłości.', imageSrc: images.engineeringDiploma },
      { title: 'Umiejętności jutra', desc: 'W tym kursie organizowanym przez Google i SGH, zdobyłem praktyczne umiejętności w zakresie analizy danych, automatyzacji procesów i integracji rozwiązań AI/ML w środowisku biznesowym. Szkolenie koncentrowało się na rozwijaniu kompetencji przyszłości istotnych w branżach IT i fintech.', imageSrc: images.aiCertificate },
      { title: 'Wykształcenie techniczne', desc: 'Ukończyłem technikum o profilu informatycznym w Zespole Szkół Technicznych nr 5 w Krośnie. Tam nabyłem podstawowe umiejętności programistyczne i sprzętowe. Korzystam z tej wiedzy codziennie, nie tylko pisząc programy, ale również samodzielnie rozwiązując problemy techniczne (nie tylko swoje).', imageSrc: images.technicalSchool },
    ],
  },
  {
    id: 2,
    name: 'Doświadczenie',
    color: '#6B7280',
    items: [
      {
        title: 'Doradca finansowy – inPartners',
        desc: 'Obecnie pracuję jako doradca finansowy w firmie inPartners, pomagając klientom w wyborze ubezpieczeń, kredytów i produktów inwestycyjnych. Analizuję sytuację i potrzeby każdego klienta oraz w przystępny sposób przedstawiam dostępne możliwości.',
        imageSrc: images.inpartners,
        imageFit: 'contain'
      },
      {
        title: 'Korepetytor – Dobre Korepetycje',
        desc: 'Obecnie pracuję w firmie Dobre Korepetycje, gdzie prowadzę zajęcia online z informatyki i matematyki dla uczniów szkół podstawowych i średnich. Przygotowuję indywidualne materiały dydaktyczne, dostosowując tempo nauki i poziom trudności do potrzeb uczniów. Praca ta pozwala mi łączyć wiedzę techniczną z umiejętnością przekazywania wiedzy w przystępny sposób.',
        imageSrc: images.dobreKorepetycje
      },
      {
        title: 'Stażysta – Junior Database, Deloitte',
        desc: 'Odbyłem 4-miesięczny staż w firmie Deloitte na stanowisku junior database w dziale Risk. Pracowałem przy migracjach baz danych oraz z systemem SAP, ServiceNow i Excelem, zdobywając praktyczne doświadczenie w pracy z danymi w dużej korporacji.',
        imageSrc: images.deloitte
      },
      {
        title: 'Stażysta – Simplicity Games',
        desc: 'Odbyłem staż w firmie zajmującej się tworzeniem gier desktopowych i mobilnych, podczas którego uczestniczyłem w procesie projektowania, testowania i optymalizacji aplikacji. Zdobyłem praktyczne doświadczenie w pracy zespołowej, wykorzystaniu silników gier oraz implementacji elementów interaktywnych i logiki rozgrywki.',
        imageSrc: images.simplicityGames,
        imageFit: 'contain',
        // The logo file has wide white margins, so zoom in on it
        imageScale: 1.45
      },
      {
        title: 'Korepetytor – GoStudent',
        desc: 'Przez dwa lata pracowałem w platformie edukacyjnej GoStudent, prowadząc zajęcia z informatyki i matematyki dla uczniów z Polski i zagranicy. Zdobyłem doświadczenie w nauczaniu online, pracy z różnymi stylami uczenia się oraz w dostosowywaniu treści do wieku i poziomu uczniów.',
        imageSrc: images.gostudent
      },
      {
        title: 'Projekty uniwersyteckie',
        desc: 'Podczas studiów zdobyłem doświadczenie w planowaniu projektów, kodowaniu w językach takich jak Python i Java oraz korzystaniu z narzędzi takich jak Git i bazy danych. Poprawiłem również swoje umiejętności pracy zespołowej, komunikacji i rozwiązywania problemów podczas pracy nad projektami technicznymi.',
        imageSrc: images.universityProjects
      },
    ],
  },
  {
    id: 3,
    name: 'Umiejętności',
    color: '#4A704A',
    items: [
      { title: 'Html, CSS, JS, React, Bootstrap, Android', desc: 'Pracując z tymi technologiami, udoskonaliłem swoją zdolność do tworzenia dynamicznych i responsywnych interfejsów internetowych. Dodatkowo, moje doświadczenie z projektowaniem interfejsu użytkownika Androida wzmocniło moje umiejętności w tworzeniu przyjaznych dla użytkownika aplikacji mobilnych.', imageSrc: images.frontend },
      { title: 'SQL, Laravel, PHP, Java, SpringBoot', desc: 'Zbudowałem solidne systemy backendowe i opanowałem zarządzanie bazami danych. Rozwinąłem skalowalne aplikacje serwerowe, koncentrując się na efektywnej funkcjonalności.', imageSrc: images.backend },
      { title: 'Tworzenie gier', desc: 'Niedawno rozpocząłem swoją przygodę w tej dziedzinie. Stworzyłem już kilka projektów przy użyciu silnika Unity i nadal kształcę się w tym obszarze.', imageSrc: images.gamedev },
      { title: 'Uczenie maszynowe', desc: 'Udało mi się również stworzyć kilka projektów opartych na uczeniu ze wzmocnieniem. Nieustannie poszerzam swoją wiedzę w tym zakresie.', imageSrc: images.machineLearning },
      { title: 'Podstawy każdego popularnego języka programowania', desc: 'Ponieważ od wielu lat uczę się i uczę innych kodowania, znam podstawy każdego popularnego języka programowania. Mogę szybko zdobyć niezbędną wiedzę do rozwiązania problemu i nauczyć się zupełnie nowej technologii od podstaw.', imageSrc: images.programmingBasics },
    ],
  },
  {
    id: 4,
    name: 'Projekty',
    color: '#D97706',
    items: [
      { title: 'Forum o muzeach i zabytchach', desc: "Ten projekt to klasyczne forum w frameworku Laravel o muzeach i zabytkach z systemem polubień/nielubień. Oferuje również możliwość dodawania zabytków i muzeów, ich zdjęć, oceniania i komentowania dodanych obiektów, a także opcję wyszukiwania miejsca według nazwy lub lokalizacji, np. zabytków w pobliżu miasta Kraków.", imageSrc: images.museumForum },
      { title: 'Kółko i krzyżyk', desc: "Projekt jest implementacją gry w kółko i krzyżyk, gdzie można umieścić tylko trzy symbole (X lub O), a następnie gra przebiega poprzez przesuwanie umieszczonych symboli pionowo lub poziomo. Gra zawiera opcję gry przeciwko komputerowi, gdzie algorytm wirtualnego gracza to minimax z przycinaniem alfa-beta.", imageSrc: images.ticTacToe },
      { title: 'Klon Jiry, ale dla architektów', desc: "Ten projekt to aplikacja internetowa opracowana przy użyciu Spring Boot, z opcją instalacji wersji desktopowej (zbudowanej przy użyciu Electrona). Aplikacja służy jako system zarządzania zadaniami dla firm architektonicznych, obsługujący zarówno małe, jak i duże zadania. Po wypełnieniu odpowiedniego formularza użytkownicy mogą również generować różne rodzaje raportów PDF.", imageSrc: images.jiraClone },
    ],
  },
  {
    id: 5,
    name: 'Projekt inżynierski',
    color: '#9370DB',
    items: [
      { title: 'Pomysł na grę', desc: 'Wspólnie z moją dziewczyną opracowaliśmy zasady niedeterministycznej strategicznej gry planszowej skoncentrowanej na rywalizacji i zawierającej elementy manipulacji planszą. Po stworzeniu fizycznej kopii gry, testowaliśmy i udoskonalaliśmy zasady, aby poprawić rozgrywkę, aż osiągnęliśmy satysfakcjonujący wynik.', imageSrc: images.boardGameIdea },
      { title: 'Implementacja gry', desc: "Kolejnym krokiem było zaimplementowanie gry planszowej w środowisku Unity. Zostało to zrobione w sposób intuicyjny nawet dla początkującego gracza.", imageSrc: images.unity },
      { title: 'Tworzenie wirtualnego gracza', desc: "Ostatnią częścią projektu inżynierskiego było stworzenie agenta, który gra jak najefektywniej, umożliwiając tryb gracz kontra komputer. Osiągnąłem to, stosując uczenie ze wzmocnieniem przy użyciu biblioteki ML-Agents.", imageSrc: images.mlAgents },
    ],
  },
  {
    id: 6,
    name: 'Języki',
    color: '#D2B48C',
    items: [
      { title: 'Angielski', desc: 'Zawsze czytam dokumentację, piszę zapytania i szukam informacji po angielsku. Potrafię również płynnie mówić i pisać w tym języku.', imageSrc: images.english },
      { title: 'Polski', desc: 'Mój język ojczysty.', imageSrc: images.polish },
      { title: 'Rosyjski', desc: 'Potrafię czytać alfabet rosyjski i rozumiem większość pisanych i mówionych zdań.', imageSrc: images.russian },
      { title: 'Włoski', desc: "To język, którego obecnie skupiam się na nauce. Rozumiem jego większość i pracuję nad płynnym mówieniem.", imageSrc: images.italian },
    ],
  },
  {
    id: 7,
    name: 'Large language models',
    color: '#4682B4',
    items: [
      { title: 'Moje podejście do LLM', desc: "Ponieważ nauczyłem się programować na długo przed powstaniem tych modeli, nauczyłem się dobrze kodować używając tylko wiedzy, internetu i dokumentacji. Używam tych technologii, aby przyspieszyć proces pisania kodu.", imageSrc: images.llmApproach },
      { title: 'Modele, których używam', desc: 'Korzystam z szerokiej gamy modeli. Jeśli chodzi o programowanie, staram się nadążać za innowacjami technologicznymi i używać tych, które najlepiej rozwiązują problemy związane z kodem. (Grok, ChatGPT, Gemini, Claude AI, Copilot)', imageSrc: images.llmModels },
    ],
  },
  {
    id: 8,
    name: 'Cele',
    color: '#CD5C5C',
    items: [
      { title: 'Kariera', desc: 'Wykorzystując nowo nabytą wiedzę i umiejętności, chcę się rozwijać i realizować ciekawe projekty w zaangażowanym zespole.', imageSrc: images.career },
      { title: 'Osobiste', desc: 'Obecnie piszę indywidualne projekty, uczę się języka włoskiego i rozwijam się, aby stać się lepszym nauczycielem.', imageSrc: images.coding },
    ],
  },
  {
    id: 9,
    name: 'Kontakt',
    color: '#5F9EA0',
    items: [
      { title: 'Email', desc: CONTACT.email, href: `mailto:${CONTACT.email}`, imageSrc: images.email },
      { title: 'Numer telefonu', desc: CONTACT.phone, href: CONTACT.phoneHref, imageSrc: images.phone },
      { title: 'GitHub', desc: 'github.com/camillecrewcar', href: CONTACT.github, mark: 'GH', markColor: '#24292f' },
      { title: 'LinkedIn', desc: 'linkedin.com/in/kamil-krukar-60b16b238', href: CONTACT.linkedin, mark: 'in', markColor: '#0a66c2' },
      { title: 'CV', desc: 'Pobierz moje CV (PDF)', href: CV_URL.pl, mark: 'CV', markColor: '#1f4a3d' },
    ],
  },
  {
    id: 10,
    name: 'O mnie',
    color: '#BDB76B',
    items: [
      { title: 'Kilka słów o mnie', desc: 'Jestem inżynierem z Polski, kocham kodowanie, matematykę i gry logiczne. Obecnie pracuję jako korepetytor online, ucząc informatyki i matematyki. Oprócz tego skupiam się na rozwoju osobistym i realizacji swoich pasji.', imageSrc: images.aboutMe },
      { title: 'Gry planszowe', desc: 'Mam dość pokaźną kolekcję gier planszowych, co jest moim ulubionym sposobem spędzania czasu ze znajomymi. Wraz z moją dziewczyną pracujemy nad zasadami i publikacją naszej własnej gry planszowej.', imageSrc: images.boardGames },
      { title: 'Sport', desc: 'Moim największym osiągnięciem jest przebiegnięcie maratonu. Obecnie nie biegam zbyt często, ale staram się ćwiczyć, aby utrzymać formę.', imageSrc: images.sport },
      { title: 'Ekonomia', desc: 'Interesuję się zjawiskami makroekonomicznymi, systemami ekonomicznymi i historią pieniądza.', imageSrc: images.economics },
    ],
  },
];

export const ui = {
  role: 'Inżynier informatyki',
  greeting: 'Cześć, nazywam się',
  subtitle: 'Programista i korepetytor, który lubi kodowanie, matematykę i gry logiczne. Rzuć kostką lub wybierz pole na planszy, aby mnie poznać.',
  roll: 'Rzuć kostką',
  hint: 'lub wybierz dowolne pole na ścieżce',
  rolled: 'Wynik rzutu:',
  start: 'Start',
  finish: 'Meta',
  intro: {
    role: 'Inżynier informatyki',
    about: 'Jestem inżynierem z Polski, kocham kodowanie, matematykę i gry logiczne. Uczę online informatyki i matematyki oraz tworzę własne projekty. Każde pole na tej planszy to część mojej historii.',
    cta: 'Rzuć kostką, aby rozpocząć grę',
  },
  finishCard: {
    eyebrow: 'Meta',
    title: 'Dzięki za grę!',
    intro: 'To już meta, więc znasz już moją historię. Oto, co mogę wnieść do Twojej organizacji lub zespołu:',
    offers: [
      { title: 'Solidne podstawy techniczne', desc: 'Tytuł inżyniera informatyki, obecnie studia magisterskie z informatyki na Politechnice Warszawskiej.' },
      { title: 'Tworzenie oprogramowania', desc: 'Aplikacje webowe i backendowe w React, Java/Spring Boot, Laravel, PHP i SQL.' },
      { title: 'Dane i systemy biznesowe', desc: 'Migracje baz danych oraz praca z SAP, ServiceNow i Excelem podczas stażu w Deloitte.' },
      { title: 'Jasna komunikacja', desc: 'Lata korepetycji nauczyły mnie tłumaczyć złożone tematy prosto i dopasowywać się do odbiorcy.' },
      { title: 'Nastawienie na klienta', desc: 'Jako doradca finansowy słucham potrzeb klientów i zamieniam je w konkretne rozwiązania.' },
      { title: 'Szybka nauka i praca zespołowa', desc: 'Od tworzenia gier po uczenie maszynowe – szybko opanowuję nowe narzędzia i lubię pracę w zespole.' },
    ],
    email: 'Napisz do mnie',
    call: 'Zadzwoń',
    again: 'Zagraj jeszcze raz',
    cv: 'Pobierz CV',
  },
  cv: 'CV',
  cvUrl: CV_URL.pl,
  contact: 'Kontakt',
  topic: 'Temat',
  of: 'z',
  previous: 'Poprzedni',
  next: 'Następny',
};
