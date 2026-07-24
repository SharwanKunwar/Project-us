import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressIndicator({ current, total }) {
    return (
        <motion.div
            className="text-center mb-6 text-rose-600 font-semibold text-lg tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            ♡ {current} / {total}
        </motion.div>
    );
}
