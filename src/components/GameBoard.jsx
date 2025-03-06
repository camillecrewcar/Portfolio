import React, { useState, useEffect } from 'react';
import Pawn from './Pawn';

const GameBoard = ({ position, prevPosition }) => {
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
  const radius = 150;
  const [currentPos, setCurrentPos] = useState(prevPosition);
  const [isHopping, setIsHopping] = useState(false);
  const [currentHop, setCurrentHop] = useState(null);

  const getPositionCoords = (pos) => {
    const index = pos - 1;
    const angle = (index / boardSize) * 2 * Math.PI;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  useEffect(() => {
    if (prevPosition !== position && !isHopping) {
      setIsHopping(true);
      
      const steps = [];
      let start = prevPosition;
      let end = position;
      
      // Handle wrap-around
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
            
            // Schedule next hop
            setTimeout(moveToNextPosition, 100);
          }, 400);
        } else {
          setIsHopping(false);
        }
      };
      
      // Start the hopping sequence after a short delay
      setTimeout(moveToNextPosition, 100);
    }
  }, [position, prevPosition, boardSize]);

  return (
    <div className="game-board" style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {topics.map((topic, index) => {
          const angle = (index / boardSize) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={index}
              className="board-cell"
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)`,

                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#f0f0f0',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
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