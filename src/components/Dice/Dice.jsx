import React, { useState, useRef, useEffect } from 'react';
import '../ComponentStyles/dice.css';

const ROLL_MS = 1100;

// Cube rotation that brings each value's face to the front
const FACE_ROTATION = {
  1: { x: 0, y: 0 },
  2: { x: -90, y: 0 },
  3: { x: 0, y: -90 },
  4: { x: 0, y: 90 },
  5: { x: 90, y: 0 },
  6: { x: 0, y: 180 },
};

// Where each face sits on the cube (opposite faces add up to 7)
const FACES = [
  { value: 1, side: 'front' },
  { value: 6, side: 'back' },
  { value: 3, side: 'right' },
  { value: 4, side: 'left' },
  { value: 2, side: 'top' },
  { value: 5, side: 'bottom' },
];

// Pip positions on a 3x3 grid as [row, column]
const PIPS = {
  1: [[2, 2]],
  2: [[1, 1], [3, 3]],
  3: [[1, 1], [2, 2], [3, 3]],
  4: [[1, 1], [1, 3], [3, 1], [3, 3]],
  5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
  6: [[1, 1], [2, 1], [3, 1], [1, 3], [2, 3], [3, 3]],
};

// Spin forward by `turns` full rotations and land exactly on `target`
const spinTo = (current, target, turns) =>
  current + turns * 360 + ((((target - current) % 360) + 360) % 360);

const Dice = ({ disabled, onRollStart, onResult, label, rollRef }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [rolling, setRolling] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const roll = () => {
    if (rolling || disabled) return;

    // The result is decided up front so the cube can land on it
    const value = Math.floor(Math.random() * 6) + 1;
    const target = FACE_ROTATION[value];

    setRolling(true);
    if (onRollStart) onRollStart();
    setRotation((r) => ({
      x: spinTo(r.x, target.x, 2),
      y: spinTo(r.y, target.y, 1 + Math.floor(Math.random() * 2)),
      z: r.z + 360,
    }));

    timer.current = setTimeout(() => {
      setRolling(false);
      onResult(value);
    }, ROLL_MS);
  };

  // Lets other buttons (e.g. the START card) throw this die
  if (rollRef) rollRef.current = roll;

  return (
    <button
      type="button"
      className={`dice${rolling ? ' rolling' : ''}`}
      onClick={roll}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      <span className="dice-shadow" />
      <span className="dice-toss">
        <span className="dice-tilt">
          <span
            className="dice-cube"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
            }}
          >
            {FACES.map(({ value, side }) => (
              <span key={value} className={`dice-face ${side}`}>
                {PIPS[value].map(([row, col], i) => (
                  <span key={i} className="pip" style={{ gridRow: row, gridColumn: col }} />
                ))}
              </span>
            ))}
          </span>
        </span>
      </span>
    </button>
  );
};

export default Dice;
