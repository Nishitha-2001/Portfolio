import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden py-32">
            <div className="section-padding relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        {/* Title Section */}
                        <div className="lg:col-span-5">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-[10px] tracking-[0.5em] uppercase text-gold-rich mb-6 font-bold"
                            >
                                Personal Narrative
                            </motion.p>
                            <h3 className="text-5xl md:text-7xl font-serif italic text-emerald-deep leading-tight mb-10">
                                Architecting <br /> Software <span className="not-italic font-black text-luxury">Integrity</span>.
                            </h3>
                            <div className="w-24 h-[1px] bg-gold-rich/30" />
                        </div>

                        {/* Story Body */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="glass-card p-10 md:p-14 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-rich/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-gold-rich/10 transition-colors" />

                                <p className="text-xl md:text-2xl text-emerald-deep font-serif italic leading-relaxed mb-8">
                                    B.Tech graduate in Electronics and Communication Engineering with specialized expertise in <span className="font-bold text-emerald-rich not-italic border-b-2 border-gold-rich/30">Java Backend Excellence and Scalable Systems</span>.
                                </p>
                                <p className="text-emerald-rich/70 leading-relaxed font-light text-lg">
                                    My journey is defined by the intersection of hardware precision and software scalability. I specialize in building high-integrity backend architectures that power seamless user experiences, ensuring every line of code contributes to a secure and efficient digital ecosystem.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 glass-card border-none bg-emerald-deep text-gold-champagne shadow-2xl">
                                    <p className="text-3xl font-serif font-black mb-2 italic">JAVA</p>
                                    <p className="text-[9px] tracking-widest uppercase text-gold-rich/80 font-bold">Backend Mastery</p>
                                </div>
                                <div className="p-8 glass-card border-none bg-white text-emerald-deep">
                                    <p className="text-3xl font-serif font-black mb-2 italic">FULL</p>
                                    <p className="text-[9px] tracking-widest uppercase text-gold-rich font-bold">Stack Vision</p>
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

