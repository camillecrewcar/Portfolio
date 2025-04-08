import React from 'react';
import { motion } from 'framer-motion';
import '../ComponentStyles/pawn.css';
import pawnImage from '../res/pawn.png'; // Make sure the path matches your file structure

const Pawn = ({ coords, isHopping }) => {
  return (
    <motion.div
      className="pawn"
      style={{
        position: 'absolute',
        zIndex: 10,
        transform: 'translate(-50%, -50%)', // Center the pawn

      }}
      initial={false}
      animate={{
        x: coords.x,
        y: coords.y
      }}
      transition={{
        type: 'tween',
        duration: 0.5
      }}
    >
      {isHopping ? (
        <motion.img
          src={pawnImage}
          alt="Pawn"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          animate={{ 
            y: [0, -50, 0], // More pronounced vertical motion
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0] // Slight rotation for a more dynamic jump
          }}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        />
      ) : (
        <img
          src={pawnImage}
          alt="Pawn"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      )}
    </motion.div>
  );
};

export default Pawn;