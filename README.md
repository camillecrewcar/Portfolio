# Kamil Krukar – Portfolio

An interactive portfolio presented as a board game. Visitors roll a die (or pick a space) and a pawn
walks a winding path from START to FINISH; each space is a topic such as Education, Experience or Skills.
Available in English and Polish.

Live site: https://camillecrewcar.github.io/Portfolio

Built with React 19, Create React App and Framer Motion.

## Scripts

| Command          | What it does                                                   |
| ---------------- | -------------------------------------------------------------- |
| `npm start`      | Runs the dev server at http://localhost:3000/Portfolio          |
| `npm test`       | Runs the tests in watch mode                                   |
| `npm run build`  | Builds the production bundle into `build/`                     |
| `npm run deploy` | Builds and publishes `build/` to GitHub Pages (`gh-pages` branch) |

## Project structure

```
src/
├── index.js                 Entry point
├── App.jsx                  Page layout; wires the game state to the components
├── App.css                  Design tokens, page background and layout grid
├── components/              One folder per component, with its styles next to it
│   ├── Header/              Name, Contact button, language switch
│   ├── Hero/                Greeting
│   ├── GameBoard/           Board, track geometry (buildTrack.js) and the pawn
│   ├── Dice/                3D die
│   ├── TopicPanel/          Content next to the board: START card, topic cards or FINISH card
│   ├── TopicCard/           A single entry within a topic
│   ├── ProfileCards/        START (intro) and FINISH cards
│   └── Footer/
├── hooks/
│   └── useBoardGame.js      Pawn movement and game rules
├── content/                 Everything the site says
│   ├── en.js, pl.js         Topics and interface text per language
│   ├── images.js            Image imports, plus the profile photo
│   └── index.js
├── constants/               Game rules (game.js) and contact details (contact.js)
├── assets/images/           Images used by the content
└── styles/global.css        Base page styles
```

## Editing content

- **Text and topics:** edit `src/content/en.js` and `src/content/pl.js`, keeping both languages in step.
  Each topic is `{ id, name, color, items }`; each item is `{ title, desc, imageSrc }`, with optional
  `href` (link), `imageFit: 'contain'` (show logos whole) and `imageScale` (zoom).
- **Images:** add the file to `src/assets/images/` (kebab-case name), register it in
  `src/content/images.js`, then refer to it as `images.yourName`.
- **Contact details:** `src/constants/contact.js`.
- **Profile photo:** `profilePhoto` in `src/content/images.js`.
