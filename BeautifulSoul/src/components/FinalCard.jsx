import React from 'react';
import { motion } from 'framer-motion';
import { createConfetti, createFlowerPetals, createHeartRain } from '../utils/confetti';

export default function FinalCard({ selectedDate, onReplay, onPlaySound }) {
    React.useEffect(() => {
        onPlaySound();
        setTimeout(() => {
            createConfetti();
            createFlowerPetals();
            createHeartRain();
        }, 500);
    }, [onPlaySound]);

    const formatDate = (dateString) => {
        if (!dateString) return 'that day';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };

    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${period}`;
    };

    const message = `Thank you for saying yes.

I don't know exactly how this date will go, but I already know one thing...

I'm really happy it's going to be with you.

So get ready.

Because this is officially our date. 🥰❤️`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto relative overflow-hidden"
            >
                {/* Animated flowers */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl pointer-events-none"
                        animate={{
                            y: [0, -50, 0],
                            rotate: [0, 360, 360],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 50 - 10}%`,
                            opacity: 0.6,
                        }}
                    >
                        {i % 3 === 0 ? '🌹' : i % 3 === 1 ? '🌸' : '🌺'}
                    </motion.div>
                ))}

                <motion.div
                    className="text-6xl mb-6 text-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ❤️
                </motion.div>

                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-rose-700"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Okay, now seriously... ❤️
                </motion.h2>

                <motion.div className="relative z-10">
                    {message.split('\n').map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className={`text-center mb-4 leading-relaxed ${line.includes('Thank you') || line.includes('happy')
                                ? 'text-base text-gray-800 font-semibold'
                                : 'text-base text-gray-700'
                                }`}
                        >
                            {line}
                        </motion.p>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-10 text-2xl font-bold text-rose-600"
                >
                    See you on {formatDate(selectedDate?.date)} at {formatTime(selectedDate?.time)}. 🌹
                </motion.p>

                {/* <motion.button
                    onClick={onReplay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-12 px-6 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                    Replay our little adventure ↻
                </motion.button> */}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-6 text-sm text-gray-600 italic"
                >
                    Made with ❤️ just for you
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
