import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
            {/* Futuristic Animated Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mint/10 blur-[100px] rounded-full animate-pulse-slow active" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-moss/10 blur-[120px] rounded-full animate-float" />

            {/* Floating Geometric Decoration */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-forest/5 rounded-full animate-spin-slow opacity-20" />
            <div className="absolute bottom-40 left-10 w-48 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent rotate-45" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 glass-panel p-12 md:p-24 border-white/20 max-w-5xl mx-6 shadow-2xl"
            >
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter text-forest mb-6 uppercase leading-none">
                            Nishitha <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest via-moss to-mint">Ravula</span>
                        </h1>
                        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-moss/40 to-transparent mx-auto mb-10" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl font-sans tracking-[0.5em] uppercase text-forest-light mb-16 font-medium flex flex-col gap-2"
                    >
                        <span>Software Engineer</span>
                        <span>B.Tech Graduate</span>
                    </motion.h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {[
                            { label: "Phone", val: "8688565093" },
                            { label: "Email", val: "pnishitha03@gmail.com" },
                            { label: "Region", val: "Hyderabad, TS" }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <p className="text-[10px] tracking-[0.4em] uppercase text-moss mb-2 opacity-50 font-bold">{item.label}</p>
                                <p className="text-xs tracking-widest text-forest font-black group-hover:text-mint transition-colors duration-300">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
            >
                <p className="text-[10px] tracking-[0.6em] uppercase text-forest/30 mb-6 font-black">Initiate Sequence</p>
                <div className="w-px h-16 bg-gradient-to-b from-mint/40 via-moss/20 to-transparent mx-auto animate-pulse" />
            </motion.div>
        </section>
    );
};

export default Hero;
