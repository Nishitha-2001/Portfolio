import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">


                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-12"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-moss mb-4 font-bold">The Narrative</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-forest mb-8 leading-tight max-w-4xl">
                        A journey of technical <span className="text-moss">precision</span> and innovative problem solving.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-forest/70 text-lg leading-relaxed font-light">
                        <div className="space-y-6">
                            <p className="font-medium text-forest text-xl">
                                Career Objective
                            </p>
                            <p>
                                B.Tech graduate in Electronics and Communication Engineering with skills in Java, ReactJS and SQL. Committed to leveraging technical expertise and problem-solving abilities to drive organizational growth and success.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p>
                                My path has been defined by a deep curiosity for how systems interact—from the intricate hardware logic of ECE to the secure authentication flows of Identity and Access Management (IAM).
                            </p>
                            <p>
                                Whether building SSO applications with Spring Boot or crafting intuitive frontend experiences in React, I strive for excellence in every line of code.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-12 border-t border-forest/10 pt-12">
                        <div>
                            <p className="text-2xl font-serif text-forest font-bold">IAM</p>
                            <p className="text-xs tracking-widest uppercase opacity-60">Authentication Specialist</p>
                        </div>
                        <div>
                            <p className="text-2xl font-serif text-forest font-bold">JAVA</p>
                            <p className="text-xs tracking-widest uppercase opacity-60">Full Stack Focus</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

