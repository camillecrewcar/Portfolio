import { useState, useRef, useEffect } from 'react';
import { START, STEP_MS } from '../constants/game';

/**
 * Pawn movement on the board.
 *
 * Positions: START (0), topics 1..topicCount, then FINISH (topicCount + 1).
 * A dice roll walks the pawn one space at a time; reaching FINISH ends the move
 * (like a race game), and from FINISH the pawn walks back, turning around at space 1.
 * The topic is shown only once the pawn has landed, via `activePosition`.
 */
const useBoardGame = (topicCount, { onLand } = {}) => {
  const finish = topicCount + 1;

  const [pawnPosition, setPawnPosition] = useState(START);
  const [activePosition, setActivePosition] = useState(START);
  const [busy, setBusy] = useState(false);
  const [direction, setDirection] = useState(1);
  const [lastRoll, setLastRoll] = useState(null);
  // Increments on every step so the pawn replays its hop animation
  const [hop, setHop] = useState(0);

  const timers = useRef([]);
  const onLandRef = useRef(onLand);
  onLandRef.current = onLand;

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const land = (target) => {
    setActivePosition(target);
    setBusy(false);
    if (onLandRef.current) onLandRef.current(target);
  };

  const step = (target) => {
    setPawnPosition(target);
    setHop((h) => h + 1);
  };

  // Called when the die starts rolling
  const startRoll = () => {
    setBusy(true);
    setLastRoll(null);
  };

  // Called with the rolled value once the die has landed
  const walk = (steps) => {
    setLastRoll(steps);

    const path = [];
    let position = pawnPosition;
    let dir = direction;
    for (let i = 0; i < steps; i++) {
      if (position + dir < 1) dir = 1;
      position += dir;
      path.push(position);
      if (position === finish) break;
    }

    path.forEach((target, i) => {
      later(() => {
        step(target);
        if (i === path.length - 1) {
          later(() => {
            setDirection(target === finish ? -1 : target === 1 ? 1 : dir);
            land(target);
          }, STEP_MS + 120);
        }
      }, i * STEP_MS);
    });
  };

  // Jump straight to a position (board click, previous/next, header links)
  const jumpTo = (target) => {
    if (busy) return;
    // Any pick on the board (even the current space) hides the last dice result
    setLastRoll(null);
    if (target === activePosition) return;

    setBusy(true);
    step(target);
    if (target === finish) setDirection(-1);
    if (target <= 1) setDirection(1);
    later(() => land(target), STEP_MS + 80);
  };

  return { pawnPosition, activePosition, finish, busy, hop, lastRoll, startRoll, walk, jumpTo };
};

export default useBoardGame;
