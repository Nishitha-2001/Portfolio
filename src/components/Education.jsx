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
        <section id="education" className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-[10px] tracking-[0.8em] uppercase text-gold-rich mb-6 font-bold">Academic Foundation</p>
                    <h3 className="text-5xl md:text-7xl font-serif italic text-emerald-deep">Scholastic Records</h3>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Luxury Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-rich/20 to-transparent" />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Gold Connector Node */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-deep border-2 border-gold-rich shadow-gold-glow z-10" />

                            {/* Content */}
                            <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                                <div className="glass-card p-10 hover:shadow-emerald-glow/5 transition-all duration-700">
                                    <span className="text-gold-rich font-bold text-[10px] tracking-[0.3em] uppercase">{item.year}</span>
                                    <h4 className="text-2xl font-serif font-black text-emerald-deep mt-4 leading-tight italic">{item.degree}</h4>
                                    <p className="text-emerald-rich/50 text-[9px] tracking-[0.4em] uppercase mt-2 font-bold">{item.institution}</p>
                                    <p className="text-emerald-rich/70 text-base mt-6 font-light leading-relaxed italic">
                                        "{item.description}"
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
