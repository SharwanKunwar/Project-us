import React from 'react';
import { motion } from 'framer-motion';

export default function ConfirmationCard({ selectedDate, selectedFood, onNext, onPlaySound }) {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    };

    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${period}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto relative overflow-hidden">

                <motion.div
                    className="text-5xl mb-4 text-center"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {selectedFood?.emoji || '🍽️'}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-center mb-3 text-rose-600"
                >
                    Excellent choice! {selectedFood?.emoji}
                </motion.h2>

                <h3 className="text-2xl font-bold text-center mb-6 text-rose-700">
                    Glad you didn't say no. 😌💖
                </h3>

                <p className="text-center text-gray-700 mb-8 text-base leading-relaxed">
                    Your date is officially happening.
                </p>

                <div className="bg-white/50 backdrop-blur rounded-2xl p-6 mb-8 space-y-4">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">On</p>
                        <p className="text-lg font-semibold text-rose-600">{formatDate(selectedDate?.date)}</p>
                    </div>
                    <div className="border-t border-white/50"></div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Be ready by</p>
                        <p className="text-2xl font-bold text-rose-600">{formatTime(selectedDate?.time)}</p>
                    </div>
                    <div className="border-t border-white/50"></div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">What we're having</p>
                        <p className="text-xl font-semibold text-gray-800">{selectedFood?.name}</p>
                    </div>
                </div>

                <p className="text-center text-gray-700 mb-8 italic">
                    I'm coming to get you. 🚗💨
                </p>

                {/* Floating decorations */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl pointer-events-none"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                        }}
                        style={{
                            right: `${10 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                        }}
                    >
                        {i % 2 === 0 ? '🌹' : '💕'}
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
                    Okay, I accept 💕
                </motion.button>
            </div>
        </motion.div>
    );
}
