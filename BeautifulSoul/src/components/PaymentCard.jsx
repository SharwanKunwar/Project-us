import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentCard({ onNext, onPlaySound }) {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async () => {
        onPlaySound();
        setIsProcessing(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsProcessing(false);
        onNext();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/40 via-rose-50/30 to-pink-100/30 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl max-w-md mx-auto overflow-hidden">

                <motion.div
                    className="text-5xl mb-4 text-center"
                    animate={isProcessing ? { rotate: 360 } : {}}
                    transition={isProcessing ? { duration: 1, repeat: Infinity } : {}}
                >
                    💳
                </motion.div>

                <h2 className="text-3xl font-bold text-center mb-2 text-rose-700">
                    Date Payment Agreement 💳
                </h2>

                <p className="text-center text-gray-700 mb-8 text-base">
                    Before we proceed, please review the official date agreement.
                </p>

                <div className="bg-white/60 backdrop-blur rounded-2xl p-6 mb-8 font-mono text-sm">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <h3 className="font-bold text-center text-lg mb-4 text-gray-800">
                            DATE AGREEMENT
                        </h3>
                    </div>

                    <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between">
                            <span>Date Planning Fee:</span>
                            <span className="font-semibold">$199</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Romantic Vibes Fee:</span>
                            <span className="font-semibold">$100</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Food Selection Fee:</span>
                            <span className="font-semibold">$50</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Transportation Fee:</span>
                            <span className="font-semibold">$100</span>
                        </div>
                        <div className="border-t border-gray-300 pt-3 flex justify-between text-rose-600 font-bold">
                            <span>Girlfriend Discount:</span>
                            <span>-$450</span>
                        </div>
                        <div className="border-t-2 border-gray-300 pt-3 flex justify-between text-lg font-bold text-gray-800">
                            <span>TOTAL:</span>
                            <span>$499</span>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-600 text-sm italic mb-8 bg-yellow-100/50 backdrop-blur rounded-xl p-4">
                    😂 Don't worry. This is completely fake. Your smile is payment enough. ❤️
                </p>

                {isProcessing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-6"
                    >
                        <div className="inline-block">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-2xl mb-2"
                            >
                                ⏳
                            </motion.div>
                            <p className="text-gray-600 font-semibold">
                                Processing payment...
                            </p>
                        </div>
                    </motion.div>
                )}

                <motion.button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    whileHover={!isProcessing ? { scale: 1.05 } : {}}
                    whileTap={!isProcessing ? { scale: 0.95 } : {}}
                    className={`w-full px-6 py-4 font-bold text-lg rounded-full shadow-lg transition-all ${isProcessing
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-xl cursor-pointer'
                        }`}
                >
                    {isProcessing ? 'Processing...' : 'PAY $499 💳'}
                </motion.button>
            </div>
        </motion.div>
    );
}
