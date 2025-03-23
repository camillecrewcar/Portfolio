import React, { useState, useEffect } from 'react';
import Pawn from './Pawn';

const GameBoard = ({ position, prevPosition, onPositionChange }) => {
  const topics = [
    'Education',
    'Experience',
    'Skills',
    'Projects',
    'Interests',
    'Hobbies',
    'Certifications',
    'Goals',
    'Contact',
    'About Me'
  ];
  const boardSize = topics.length;
  const radius = 250;
  const [currentPos, setCurrentPos] = useState(prevPosition);
  const [isHopping, setIsHopping] = useState(false);
  const [currentHop, setCurrentHop] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null); // New state for hover

  const getPositionCoords = (pos) => {
    const index = pos - 1;
    const angle = (index / boardSize) * 2 * Math.PI;
    return {
      x: Math.cos(angle) * radius - (Math.cos(angle) * radius / 300),
      y: Math.sin(angle) * radius - (Math.sin(angle) * radius / 20)
    };
  };

  const handleFieldClick = (targetPosition) => {
    if (!isHopping && targetPosition !== currentPos) {
      setIsHopping(true);
      setCurrentHop(targetPosition);
      setTimeout(() => {
        setCurrentPos(targetPosition);
        setCurrentHop(null);
        setIsHopping(false);
        if (onPositionChange) {
          onPositionChange(targetPosition);
        }
      }, 400);
    }
  };

  useEffect(() => {
    if (prevPosition !== position && !isHopping) {
      setIsHopping(true);
      const steps = [];
      let start = prevPosition;
      let end = position;
      if (end <= start) end += boardSize;
      for (let i = start; i <= end; i++) {
        steps.push(((i - 1) % boardSize) + 1);
      }
      let stepIndex = 0;
      setCurrentPos(steps[0]);
      const moveToNextPosition = () => {
        if (stepIndex < steps.length - 1) {
          stepIndex++;
          setCurrentHop(steps[stepIndex]);
          setTimeout(() => {
            setCurrentPos(steps[stepIndex]);
            setCurrentHop(null);
            setTimeout(moveToNextPosition, 100);
          }, 400);
        } else {
          setIsHopping(false);
        }
      };
      setTimeout(moveToNextPosition, 100);
    }
  }, [position, prevPosition, boardSize]);

  return (
    <div
      className="game-board"
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {topics.map((topic, index) => {
          const angle = (index / boardSize) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const fieldPosition = index + 1;
          const isHovered = hoveredCell === fieldPosition;

          return (
            <div
              key={index}
              className="board-cell"
              onClick={() => handleFieldClick(fieldPosition)}
              onMouseEnter={() => setHoveredCell(fieldPosition)}
              onMouseLeave={() => setHoveredCell(null)}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y - (y / 5)}px)`,
                width: isHovered ? '75px' : '65px',
                height: isHovered ? '70px' :'60px',
                borderRadius: '15px',
                backgroundImage: 'url(../res/field.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: isHovered ? '3px solid rgba(220, 220, 220, 0.9)' :'3px solid #ffffff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '15px',
                margin: '-40px -40px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333333',
                backgroundColor: isHovered ? 'rgba(220, 220, 220, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out', // Smooth transition
                cursor: 'pointer',
              }}
            >
              {topic}
            </div>
          );
        })}
        <Pawn
          coords={getPositionCoords(currentPos)}
          isHopping={currentHop === currentPos}
        />
      </div>
    </div>
  );
};

export default GameBoard;