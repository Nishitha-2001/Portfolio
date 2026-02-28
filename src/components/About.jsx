import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                {/* Image Side - Asymmetrical */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                        <img
                            src="/nishitha_placeholder_portrait.png"
                            alt="Nishitha Ravula"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 rounded-2xl -z-10" />
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold/5 blur-3xl -z-10 rounded-full" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-gold mb-4">The Narrative</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-champagne mb-8 leading-tight">
                        Crafting experiences that resonate at the intersection of <span className="text-gold">art and strategy</span>.
                    </h3>

                    <div className="space-y-6 text-champagne/70 text-lg leading-relaxed font-light">
                        <p>
                            With a passion for sophisticated design and a mind for strategic growth, Nishitha Ravula brings a unique blend of creativity and data-driven insight to every project. Her approach is rooted in the belief that true luxury lies in simplicity and intentionality.
                        </p>
                        <p>
                            Based at the heart of innovation, she collaborates with global brands to redefine their digital presence, ensuring every touchpoint reflects a premium brand identity and an uncompromising commitment to excellence.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12 border-t border-white/10 pt-12">
                        <div>
                            <p className="text-2xl font-serif text-gold">5+</p>
                            <p className="text-xs tracking-widest uppercase opacity-60">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-serif text-gold">40+</p>
                            <p className="text-xs tracking-widest uppercase opacity-60">Projects Delivered</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

