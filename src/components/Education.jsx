import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: "2018 - 2020",
        degree: "Master of Strategic Design",
        institution: "London College of Creative Arts",
        description: "Specialized in luxury brand management and digital experience design."
    },
    {
        year: "2014 - 2018",
        degree: "Bachelor of Visual Arts",
        institution: "National Institute of Design",
        description: "Focus on human-centered design and visual storytelling."
    },
    {
        year: "2012 - 2014",
        degree: "Pre-University Certification",
        institution: "St. Xavier's Academy",
        description: "Excellence in Humanities and Arts."
    }
];

const Education = () => {
    return (
        <section id="education" className="section-padding relative bg-emerald-900/10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-gold mb-4">Academic Journey</h2>
                    <h3 className="text-4xl font-serif italic text-champagne">The Foundation of Excellence</h3>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

                    <div className="space-y-24">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Glowing Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10" />

                                {/* Content */}
                                <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <span className="text-gold font-serif italic text-lg">{item.year}</span>
                                    <h4 className="text-xl font-sans font-semibold text-champagne mt-2">{item.degree}</h4>
                                    <p className="text-gold/60 text-sm tracking-widest mt-1">{item.institution}</p>
                                    <p className="text-champagne/50 text-base mt-4 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

