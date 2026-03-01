import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="text-gold-rich text-[10px] tracking-[0.8em] uppercase font-bold mb-4 block">Software Engineer Specialist</span>
                    <h1 className="text-7xl md:text-9xl font-serif text-emerald-deep leading-[0.9] italic relative inline-block">
                        Nishitha
                        <br />
                        <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-rich via-gold-rich to-emerald-rich">Ravula</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-xl mx-auto mb-16"
                >
                    <p className="text-emerald-rich/60 text-lg md:text-xl font-light italic leading-relaxed">
                        "Crafting high-integrity software solutions with a focus on Java backend excellence and modern architectural patterns."
                    </p>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {[
                        { label: "Direct", val: "8688565093" },
                        { label: "Message", val: "pnishitha03@gmail.com" },
                        { label: "Location", val: "Hyderabad, TS" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + (i * 0.1) }}
                            className="text-left border-l border-gold-rich/20 pl-4"
                        >
                            <p className="text-[9px] tracking-[0.3em] uppercase text-gold-muted mb-1 font-bold">{item.label}</p>
                            <p className="text-xs tracking-wider text-emerald-deep font-medium hover:text-gold-rich transition-colors duration-300 cursor-default">{item.val}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-rich/40 to-transparent" />
                <span className="text-[8px] tracking-[0.6em] uppercase text-emerald-rich/40 mt-4">Discover Path</span>
            </motion.div>
        </section>
    );
};

export default Hero;
