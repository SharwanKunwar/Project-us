import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DatePickerCard({ onNext, onPlaySound, onDateChange }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('18:00');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        onDateChange({ date: e.target.value, time });
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        onDateChange({ date, time: e.target.value });
    };

    const handleNext = () => {
        if (date) {
            onPlaySound();
            onNext();
        }
    };

    const getDateMessage = () => {
        if (!date) return '';
        const selectedDate = new Date(date);
        const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
        return `Perfect! ${dayName} it is! 🥰`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto">

                <motion.div
                    className="text-5xl mb-4 text-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🗓️
                </motion.div>

                <h2 className="text-3xl font-bold text-center mb-2 text-rose-700">
                    So... when are you free? 🗓️💖
                </h2>

                <p className="text-center text-gray-700 mb-8 text-base">
                    Pick a date and time. Don't worry, I promise this is the last question... probably. 😌
                </p>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Select a date
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none bg-white/70 text-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            What time?
                        </label>
                        <input
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none bg-white/70 text-gray-800"
                        />
                    </div>

                    {date && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-rose-600 font-semibold text-lg"
                        >
                            {getDateMessage()}
                        </motion.p>
                    )}
                </div>

                <motion.button
                    onClick={handleNext}
                    disabled={!date}
                    whileHover={date ? { scale: 1.05 } : {}}
                    whileTap={date ? { scale: 0.95 } : {}}
                    className={`w-full mt-8 px-6 py-4 font-bold text-lg rounded-full shadow-lg transition-all ${date
                            ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-xl cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    That's when I'm free 💕
                </motion.button>
            </div>
        </motion.div>
    );
}
