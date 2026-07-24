import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createConfetti, createFlowerPetals } from '../utils/confetti';

export default function ProposalCard({ onYes, onPlaySound }) {
  const [attempts, setAttempts] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const maxX = 50;
    const maxY = 100;
    const randomX = Math.floor(Math.random() * (2 * maxX + 1)) - maxX;
    const randomY = Math.floor(Math.random() * (2 * maxY + 1)) - maxY;
    setNoPos({ x: randomX, y: randomY });
  };

  const handleNoInteraction = (event) => {
    event.preventDefault();
    event.stopPropagation();
    moveButton();
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
    "Oops, my finger slipped 👀",
    "Hmm, the NO button seems to be camera-shy 😳",
    "It's giving 'catch me if you can' energy 🏃‍♂️💨",
    "That button has trust issues, apparently 😅",
    "Legs. It grew legs. 🦵🦵",
    "At this point NO is just doing cardio 🏋️",
    "I think NO left the building 🚪",
    "Okay but YES is right there, just saying 👉💖"
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
      <div className="bg-gradient-to-br from-white/85 via-rose-50/90 to-pink-100/90 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/70 shadow-2xl max-w-lg mx-auto relative overflow-visible">
        <motion.div
          className="text-6xl mb-6 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🥹
        </motion.div>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            animate={{
              x: [Math.random() * 120 - 60, Math.random() * 120 - 60],
              y: [Math.random() * 120 - 60, Math.random() * 120 - 60],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 45 + 10}%`,
            }}
          >
            💕
          </motion.div>
        ))}

        <h2 className="text-4xl font-extrabold text-center mb-3 text-rose-700">
          Hey cutie, wanna go on a date? 🥺
        </h2>

        <p className="text-center text-gray-700 mb-10 text-lg max-w-lg mx-auto">
          Fair warning: one of these buttons is a hopeless romantic. The other one runs on adrenaline and bad decisions.
        </p>

        <div className="relative min-h-[220px] flex flex-col items-center justify-center gap-8">
          <div className="text-center space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-rose-500">choose wisely 👇</p>
            <p className="text-sm text-gray-600 max-w-sm mx-auto">
              Warning: the NO button has commitment issues and will absolutely bail on you.
            </p>
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <motion.button
              onClick={handleYes}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 text-white font-extrabold text-md rounded-xl shadow-2xl hover:shadow-2xl transition-all"
            >
              YES, obviously 💖
            </motion.button>

            <motion.button
              onMouseEnter={handleNoInteraction}
              onPointerEnter={handleNoInteraction}
              onMouseDown={handleNoInteraction}
              onTouchStart={handleNoInteraction}
              onClick={handleNoInteraction}
              animate={{ x: noPos.x, y: noPos.y, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative z-10 px-8 py-3 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 text-slate-800 font-bold text-md rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ cursor: 'pointer' }}
            >
              No 🙅
            </motion.button>
          </div>

          {attempts > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-gray-600 mt-2 max-w-md"
            >
              {currentMessage}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}