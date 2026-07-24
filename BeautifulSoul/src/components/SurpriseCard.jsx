import React from 'react';
import { motion } from 'framer-motion';

export default function SurpriseCard({ onNext, onPlaySound }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto relative overflow-hidden">

                {/* Confetti decoration */}
                <motion.div className="text-5xl mb-4 text-center flex justify-center gap-3">
                    <motion.span
                        animate={{ rotate: [0, 360], y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        😳
                    </motion.span>
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        💖
                    </motion.span>
                </motion.div>

                <h2 className="text-4xl font-bold text-center mb-3 text-rose-700">
                    WAIT... YOU ACTUALLY<br />SAID YES?! 😳💖
                </h2>

                <p className="text-center text-gray-700 mb-3 text-base leading-relaxed">
                    I honestly didn't expect you to click that button this quickly...
                </p>

                <p className="text-center text-gray-600 mb-8 text-sm italic">
                    Okay okay... I guess I have to actually plan this date now. 😂
                </p>

                {/* Decorative flowers */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl pointer-events-none"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                        style={{
                            left: `${15 + i * 20}%`,
                            top: i % 2 === 0 ? '10%' : 'auto',
                            bottom: i % 2 === 0 ? 'auto' : '10%',
                        }}
                    >
                        {i % 2 === 0 ? '🌹' : '🌸'}
                    </motion.div>
                ))}

                <motion.button
                    onClick={() => {
                        onPlaySound();
                        onNext();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    Okay, what's next? 👀
                </motion.button>
            </div>
        </motion.div>
    );
}
