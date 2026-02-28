import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-sage-50">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sage-300/20 blur-[120px] rounded-full animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-moss-light/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-forest mb-4 leading-tight">
                        Nishitha <span className="italic">Ravula</span>
                    </h1>
                    <div className="w-24 h-px bg-forest-light/20 mx-auto mb-8" />

                    <h2 className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase text-forest-light mb-12 font-bold">
                        B. Tech Graduate & IAM Consultant
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-forest/70 font-medium tracking-widest text-xs">
                        <span className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-moss" />
                            8688565093
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-moss" />
                            pnishitha03@gmail.com
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-moss" />
                            Hyderabad, Telangana
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <p className="text-[10px] tracking-[0.5em] uppercase text-forest/40 mb-4 font-black">Explore Portfolio</p>
                    <div className="w-px h-12 bg-gradient-to-b from-moss/40 to-transparent mx-auto" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

