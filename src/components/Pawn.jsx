import React from 'react';
import { motion } from 'framer-motion';

const Pawn = ({ coords, isHopping }) => {
  return (
    <motion.div
      className="pawn"
      style={{
        position: 'absolute',
        fontSize: '2rem',
        zIndex: 10,
        transform: 'translate(-50%, -50%)' // Center the pawn
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
        <motion.div
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
        >
          ♟️
        </motion.div>
      ) : (
        "♟️"
      )}
    </motion.div>
  );
};

export default Pawn;