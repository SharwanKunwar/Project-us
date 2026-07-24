import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { createConfetti, createFlowerPetals } from '../utils/confetti';

export default function ProposalCard({ onYes, onPlaySound }) {
  const [attempts, setAttempts] = useState(0);
  const noButtonRef = useRef(null);

  const moveButton = (targetButton) => {
    const maxX = 50;
    const maxY = 100;
    const randomX = Math.floor(Math.random() * (2 * maxX + 1)) - maxX;
    const randomY = Math.floor(Math.random() * (2 * maxY + 1)) - maxY;

    if (targetButton) {
      targetButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  };

  const handleNoInteraction = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!noButtonRef.current) return;

    moveButton(noButtonRef.current);
    setAttempts((prev) => prev + 1);
  };

  const handleYes = () => {
    onPlaySound();
    createConfetti();
    createFlowerPetals();
    setTimeout(() => {
      onYes();
    }, 1000);
  };

  const noMessages = [
    'Are you sure? 🥺',
    'Wait... try again 😭',
    'The button seems to be broken... suspicious 🤨',
    'Okay, I see what you\'re trying to do 😂',
    'As you wish try again 😌💖',
    '. . .'
  ];

  const currentMessage = noMessages[Math.min(attempts, noMessages.length - 1)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div
        className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto relative overflow-visible"
      >
        <motion.div
          className="text-6xl mb-6 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌸
        </motion.div>

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 40 + 5}%`,
            }}
          >
            💕
          </motion.div>
        ))}

        <h2 className="text-4xl font-bold text-center mb-2 text-rose-700">
          Will you go on a date with me? 🌸
        </h2>

        <p className="text-center text-gray-700 mb-10 text-lg">
          I have a very important question to ask you...
        </p>

        <div className="relative min-h-48 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              onClick={handleYes}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              YES 💖
            </motion.button>

            <motion.button
              ref={noButtonRef}
              onMouseEnter={handleNoInteraction}
              onMouseDown={handleNoInteraction}
              onTouchStart={handleNoInteraction}
              onClick={handleNoInteraction}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ transform: 'translate(0px, 0px)', willChange: 'transform' }}
            >
              NO 😈
            </motion.button>
          </div>

          {attempts > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-gray-600 mt-2"
            >
              {currentMessage}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
