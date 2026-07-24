import React from 'react';
import { motion } from 'framer-motion';

export default function QRCodeCard({ onNext, onPlaySound }) {
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
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    🎉
                </motion.div>

                <h2 className="text-3xl font-bold text-center mb-2 text-rose-700">
                    Payment Successful! 🎉😂
                </h2>

                <p className="text-center text-gray-700 mb-8 text-base">
                    Just kidding! I would never charge you $499.
                </p>

                <p className="text-center text-gray-700 mb-8 text-base font-semibold">
                    But... I do have one final surprise for you. 💖
                </p>

                {/* QR Code Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/80 backdrop-blur rounded-2xl p-8 mb-8 flex items-center justify-center"
                >
                    <img
                        src="/qr-code.png"
                        alt="QR Code"
                        className="w-56 h-56 object-contain"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="white" width="200" height="200"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="gray"%3EQR Code%3C/text%3E%3Ctext x="50%" y="70%" text-anchor="middle" dy=".3em" font-size="12" fill="gray"%3E(Replace with your QR code)%3C/text%3E%3C/svg%3E';
                        }}
                    />
                </motion.div>

                <p className="text-center text-gray-600 mb-8 text-sm italic">
                    Scan this... I think you'll like what's waiting for you. 👀❤️
                </p>

                {/* Floating hearts */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl pointer-events-none"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                        style={{
                            left: `${15 + i * 20}%`,
                            bottom: '20%',
                        }}
                    >
                        ❤️
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
                    One last thing... 💌
                </motion.button>
            </div>
        </motion.div>
    );
}
