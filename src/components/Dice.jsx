import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../ComponentStyles/dice.css';


const Dice = ({ rolling, onRollComplete, onClick }) => {
  const [diceValue, setDiceValue] = useState(1);

  // Define the faces of the dice (1-6) with their rotations
  const faces = {
    1: { rotateX: 0, rotateY: 0 },
    2: { rotateX: 0, rotateY: 90 },
    3: { rotateX: 90, rotateY: 0 },
    4: { rotateX: -90, rotateY: 0 },
    5: { rotateX: 0, rotateY: -90 },
    6: { rotateX: 180, rotateY: 0 },
  };

  const rollDice = () => {
    if (!rolling) return;

    // Generate final value
    const finalValue = Math.floor(Math.random() * 6) + 1;

    // Trigger the animation and callback
    setTimeout(() => {
      setDiceValue(finalValue);
      onRollComplete(finalValue);
    }, 1000); // Match animation duration
  };

  useEffect(() => {
    if (rolling) rollDice();
  }, [rolling]);

  // Animation variants for the dice
  const diceVariants = {
    idle: {
      rotateX: faces[diceValue].rotateX,
      rotateY: faces[diceValue].rotateY,
      y: 0,
      transition: { duration: 0 }
    },
    rolling: {
      rotateX: [0, 360, faces[diceValue].rotateX], // Full rotations before landing
      rotateY: [0, 360, faces[diceValue].rotateY],
      y: [-50, 20, -10, 0], // Simulate bounce
      transition: {
        duration: 1,
        ease: "easeOut",
        times: [0, 0.4, 0.7, 1], // Control timing of bounce
      }
    }
  };

  // SVG component for dice faces with dot patterns
  const DiceFace = ({ value }) => {
    const dot = (cx, cy) => <circle cx={cx} cy={cy} r="6" fill="#000" />;
    switch (value) {
      case 1: return <svg viewBox="0 0 60 60">{dot(30, 30)}</svg>;
      case 2: return <svg viewBox="0 0 60 60">{dot(15, 15)}{dot(45, 45)}</svg>;
      case 3: return <svg viewBox="0 0 60 60">{dot(15, 15)}{dot(30, 30)}{dot(45, 45)}</svg>;
      case 4: return <svg viewBox="0 0 60 60">{dot(15, 15)}{dot(15, 45)}{dot(45, 15)}{dot(45, 45)}</svg>;
      case 5: return <svg viewBox="0 0 60 60">{dot(15, 15)}{dot(15, 45)}{dot(30, 30)}{dot(45, 15)}{dot(45, 45)}</svg>;
      case 6: return <svg viewBox="0 0 60 60">{dot(15, 15)}{dot(15, 30)}{dot(15, 45)}{dot(45, 15)}{dot(45, 30)}{dot(45, 45)}</svg>;
      default: return null;
    }
  };

  return (
    <div
      className={`dice ${!rolling ? 'clickable' : ''}`}
      onClick={!rolling ? onClick : undefined} // Only clickable when not rolling
    >
      <motion.div
        className="dice-face"
        variants={diceVariants}
        initial="idle"
        animate={rolling ? "rolling" : "idle"}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          width: "60px",
          height: "60px",
          position: "relative",
        }}
      >
        {/* Render all faces of the dice with dot patterns */}
        <div className="face front"><DiceFace value={diceValue} /></div>
        <div className="face back"><DiceFace value={6} /></div>
        <div className="face right"><DiceFace value={5} /></div>
        <div className="face left"><DiceFace value={2} /></div>
        <div className="face top"><DiceFace value={4} /></div>
        <div className="face bottom"><DiceFace value={3} /></div>
      </motion.div>

    </div>
  );
};

export default Dice;