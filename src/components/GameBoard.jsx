import React, { useState, useEffect, useRef } from 'react';
import Pawn from './Pawn';
import './GameBoard.css'; // Adjust the path as necessary

const GameBoard = ({ position, prevPosition, onPositionChange, topics }) => {
  const boardSize = topics.length;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPos, setCurrentPos] = useState(prevPosition);
  const [isHopping, setIsHopping] = useState(false);
  const [currentHop, setCurrentHop] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const boardRef = useRef(null);

  // Dynamic radius based on screen size - INCREASED for more spacing between fields
  const getRadius = () => {
    if (windowWidth <= 480) return 150; // Very small screens (increased from 120)
    if (windowWidth <= 768) return 210; // Small screens (increased from 180)
    if (windowWidth <= 1024) return 250; // Medium screens (increased from 220)
    return 280; // Default for large screens (increased from 250)
  };
  
  const radius = getRadius();

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPositionCoords = (pos) => {
    const index = pos - 1; // Adjust for 1-based indexing
    const angle = (index / boardSize) * 2 * Math.PI;
    return {
      x: Math.cos(angle) * radius - (Math.cos(angle) * radius / 300),
      y: Math.sin(angle) * radius - (Math.sin(angle) * radius / 20),
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

  // Get cell size based on screen width - slightly smaller to accommodate more spacing
  const getCellSize = (isHovered) => {
    if (windowWidth <= 480) {
      return isHovered ? '46px' : '42px';
    } else if (windowWidth <= 768) {
      return isHovered ? '68px' : '64px';
    } else {
      return isHovered ? '78px' : '70px';
    }
  };

  // Get font size based on screen width
  const getFontSize = () => {
    if (windowWidth <= 480) return '8px';
    if (windowWidth <= 768) return '12px';
    return '14px';
  };

  // Get board size based on screen width - INCREASED to accommodate larger radius
  const getBoardSize = () => {
    if (windowWidth <= 480) return '450px';
    if (windowWidth <= 768) return '600px';
    if (windowWidth <= 1024) return '650px';
    return '700px';
  };

  // Responsively adjust padding - reduced to fit text better
  const getPadding = () => {
    if (windowWidth <= 480) return '6px';
    if (windowWidth <= 768) return '10px';
    return '12px';
  };

  // Get cell margin for centering (handles the -X -X offset)
  const getCellMargin = () => {
    const cellSize = parseInt(getCellSize(false), 10);
    const halfCell = Math.floor(cellSize / 2);
    return `-${halfCell}px -${halfCell}px`;
  };

  return (
    <div
      ref={boardRef}
      className="game-board"
      style={{
        position: 'relative',
        width: getBoardSize(),
        height: getBoardSize(),
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {topics.map((topic, index) => {
          const angle = (index / boardSize) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const fieldPosition = topic.id;
          const isHovered = hoveredCell === fieldPosition;
          const cellSize = getCellSize(isHovered);

          return (
            <div
              key={index}
              className="board-cell"
              onClick={() => handleFieldClick(fieldPosition)}
              onMouseEnter={() => setHoveredCell(fieldPosition)}
              onMouseLeave={() => setHoveredCell(null)}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y - y / 5}px)`,
                width: cellSize,
                height: cellSize,
                borderRadius: windowWidth <= 480 ? '8px' : '12px',
                backgroundImage: 'url(../res/field.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: isHovered ? '2px solid rgba(220, 220, 220, 0.9)' : '1px solid #ffffff',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: getPadding(),
                margin: getCellMargin(),
                fontSize: getFontSize(),
                color: '#333333',
                backgroundColor: isHovered ? 'rgba(220, 220, 220, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
                cursor: 'pointer',
                overflow: 'hidden',
                textOverflow: 'ellipsis',

              }}
            >
              {topic.name}
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