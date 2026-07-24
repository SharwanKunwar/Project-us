import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SoundToggle({ isSoundEnabled, onToggle }) {
    return (
        <motion.button
            onClick={onToggle}
            className="fixed top-6 right-6 z-50 p-3 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-colors border border-white/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isSoundEnabled ? 'Mute sound' : 'Enable sound'}
        >
            {isSoundEnabled ? (
                <Volume2 className="w-6 h-6 text-rose-600" />
            ) : (
                <VolumeX className="w-6 h-6 text-rose-600" />
            )}
        </motion.button>
    );
}
