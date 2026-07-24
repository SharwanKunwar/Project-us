import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Math.random() > 0.8) {
                const newHeart = {
                    id: Date.now() + Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                };

                setHearts(prev => [...prev, newHeart]);

                setTimeout(() => {
                    setHearts(prev => prev.filter(h => h.id !== newHeart.id));
                }, 1500);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none">
            {hearts.map(heart => (
                <motion.div
                    key={heart.id}
                    className="fixed text-2xl"
                    initial={{ x: heart.x, y: heart.y, opacity: 1, scale: 1 }}
                    animate={{
                        y: heart.y - 100,
                        opacity: 0,
                        scale: 0.5
                    }}
                    transition={{ duration: 1.5 }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
}
