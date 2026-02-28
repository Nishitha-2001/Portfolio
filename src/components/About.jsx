import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-divider bg-white relative overflow-hidden">
            {/* Neon Scanning Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-10 animate-pulse" />

            <div className="section-padding relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        {/* Title Section */}
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-display tracking-[0.4em] uppercase text-moss mb-6 font-black">Subject Information</h2>
                            <h3 className="text-5xl md:text-7xl font-serif italic text-forest leading-none mb-10">
                                Bridging Logic <br /> \u0026 <span className="text-mint">Security</span>.
                            </h3>
                            <div className="w-20 h-20 border-l-2 border-b-2 border-mint/20 relative">
                                <div className="absolute top-0 right-0 w-2 h-2 bg-moss" />
                            </div>
                        </div>

                        {/* Story Body */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="futuristic-card">
                                <p className="text-xs tracking-[0.3em] uppercase text-moss font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
                                    Executive Summary
                                </p>
                                <p className="text-xl md:text-2xl text-forest/80 font-display font-light leading-relaxed mb-6">
                                    B.Tech graduate in Electronics and Communication Engineering with specialized expertise in <span className="font-bold text-forest underline decoration-mint/40 underline-offset-8">Java, ReactJS, and IAM (Auth0)</span> protocols.
                                </p>
                                <p className="text-forest/60 leading-relaxed font-light">
                                    My path has been defined by a deep curiosity for how systems interact—from the intricate hardware logic of ECE to the secure authentication flows of Identity and Access Management (IAM). Whether building SSO applications with Spring Boot or crafting intuitive frontend experiences, I strive for precision.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 glass-panel border-moss/5 hover:border-mint/20 transition-all duration-500">
                                    <p className="text-3xl font-serif text-forest font-black mb-2 italic">IAM</p>
                                    <p className="text-[10px] tracking-widest uppercase text-moss font-bold">Auth Intelligence</p>
                                </div>
                                <div className="p-8 glass-panel border-moss/5 hover:border-mint/20 transition-all duration-500">
                                    <p className="text-3xl font-serif text-forest font-black mb-2 italic">FULL</p>
                                    <p className="text-[10px] tracking-widest uppercase text-moss font-bold">Stack Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

