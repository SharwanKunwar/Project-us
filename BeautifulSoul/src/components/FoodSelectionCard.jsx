import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { foodOptions } from '../data/foodOptions';

export default function FoodSelectionCard({ onNext, onPlaySound, onFoodSelect }) {
    const [selected, setSelected] = useState(null);

    const handleFoodSelect = (food) => {
        setSelected(food.id);
        onFoodSelect(food);
        onPlaySound();
        setTimeout(() => {
            onNext();
        }, 300);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-2xl mx-auto">

                <motion.div
                    className="text-5xl mb-4 text-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    🍽️
                </motion.div>

                <h2 className="text-3xl font-bold text-center mb-2 text-rose-700">
                    Okay, important question... 🍽️
                </h2>

                <p className="text-center text-gray-700 mb-10 text-base">
                    What are we feeling for our date?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {foodOptions.map((food, index) => (
                        <motion.button
                            key={food.id}
                            onClick={() => handleFoodSelect(food)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-6 rounded-2xl backdrop-blur-md border-2 transition-all text-left ${selected === food.id
                                    ? `bg-gradient-to-br ${food.color} border-white shadow-lg`
                                    : 'bg-white/30 border-white/50 hover:bg-white/40'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-3xl">{food.emoji}</span>
                                <div>
                                    <h3 className={`font-bold text-lg ${selected === food.id ? 'text-white' : 'text-gray-800'}`}>
                                        {food.name}
                                    </h3>
                                    <p className={`text-sm ${selected === food.id ? 'text-white/90' : 'text-gray-600'}`}>
                                        {food.description}
                                    </p>
                                </div>
                            </div>
                            {selected === food.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-3 text-2xl text-center"
                                >
                                    ❤️
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
