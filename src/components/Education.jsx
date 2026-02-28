import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: "2018 - 2022",
        degree: "B. Tech in Electronics and Communication Engineering",
        institution: "JNTU (Affiliated)",
        description: "Focus on circuit design, signals \u0026 systems, and embedded logic."
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
        <section id="education" className="section-padding relative bg-sage-200/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-moss mb-4 font-bold">Academic Milestone</h2>
                    <h3 className="text-4xl font-serif italic text-forest">The Foundation of Learning</h3>
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
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-moss shadow-[0_0_15px_rgba(74,103,65,0.4)] z-10" />

                                {/* Content */}
                                <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <span className="text-moss font-serif italic text-lg font-bold">{item.year}</span>
                                    <h4 className="text-xl font-sans font-bold text-forest mt-2">{item.degree}</h4>
                                    <p className="text-forest-light/60 text-sm tracking-widest mt-1 font-medium">{item.institution}</p>
                                    <p className="text-forest/60 text-base mt-4 font-light leading-relaxed">
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

