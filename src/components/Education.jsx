import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: "2018 - 2022",
        degree: "B. Tech in Electronics and Communication Engineering",
        institution: "JNTU (Affiliated)",
        description: "Focus on circuit design, signals & systems, and embedded logic."
    },
    {
        year: "2016 - 2018",
        degree: "Intermediate (MPC)",
        institution: "Board of Intermediate Education",
        description: "Excellence in Mathematics, Physics, and Chemistry."
    },
    {
        year: "2015 - 2016",
        degree: "Matriculation (SSC)",
        institution: "Secondary School Certificate Board",
        description: "Foundation in science, technology, and mathematics."
    }
];

const Education = () => {
    return (
        <section id="education" className="section-divider bg-sage-50/20">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-[10px] tracking-[0.6em] uppercase text-moss mb-4 font-black">Data Logs</p>
                    <h3 className="text-5xl font-serif italic text-forest">Academic Milestone</h3>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Futuristic Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-forest/10 to-transparent" />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Glowing Connector Node */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-mint shadow-glow z-10" />

                            {/* Content */}
                            <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                                <div className="futuristic-card hover:bg-white transition-all duration-700">
                                    <span className="text-mint font-display font-black text-xs tracking-widest">{item.year}</span>
                                    <h4 className="text-2xl font-serif font-bold text-forest mt-3 leading-tight italic">{item.degree}</h4>
                                    <p className="text-moss text-[10px] tracking-[0.3em] uppercase mt-2 font-black">{item.institution}</p>
                                    <p className="text-forest/60 text-base mt-6 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
