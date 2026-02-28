import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-800/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-7xl md:text-9xl font-serif mb-6 italic tracking-tight leading-tight">
                        <span className="gradient-text">Nishitha</span>
                        <br />
                        <span className="text-champagne-light opacity-90">Ravula</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-xl md:text-2xl font-sans font-light tracking-[0.2em] uppercase text-gold/80 mb-12">
                        Creative Strategist & Design Enthusiast
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex justify-center gap-8"
                >
                    <a href="#about" className="group flex flex-col items-center gap-4">
                        <span className="text-xs tracking-widest uppercase text-gold/60 group-hover:text-gold transition-colors">Scroll to explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent group-hover:from-gold transition-all duration-500" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

