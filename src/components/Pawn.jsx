import React, { useEffect, useState } from 'react';
import '../ComponentStyles/pawn.css';
import pawnImage from '../res/pawn.png';

const Pawn = ({ coords, isHopping }) => {
  const [animation, setAnimation] = useState('');
  
  useEffect(() => {
    if (isHopping) {
      setAnimation('hop 0.4s ease');
    } else {
      setAnimation('');
    }
  }, [isHopping]);

  return (
    <div
      className="pawn"
      style={{
        left: coords.x,
        top: coords.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.4s ease, top 0.4s ease',
        animation: animation,
        zIndex: 100,
      }}
    />
  );
};

export default Pawn;