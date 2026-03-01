import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-luxury-cream">
            {/* Primary Aurora Blur */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-emerald-light/10 blur-[120px]"
            />

            {/* Secondary Soft Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gold-rich/5 blur-[100px]"
            />

            {/* Tertiary Deep Emerald Accent */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-rich/5 blur-[140px]"
            />

            {/* Subtle Noise Texture Overlay (Optional but adds premium feel) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Light Sweep Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        </div>
    );
};

export default Background;
