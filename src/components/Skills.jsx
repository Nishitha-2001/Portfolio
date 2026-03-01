import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, BarChart, Award } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming & Frontend",
        icon: <Code className="w-6 h-6" />,
        skills: ["Java (Full Stack)", "JavaScript", "ReactJS", "HTML5 & CSS3", "C# Base"]
    },
    {
        title: "Backend & Tools",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Spring Boot", "SQL", "Git & GitHub", "Postman", ".NET Fundamentals"]
    },
    {
        title: "Domain & Auth",
        icon: <BarChart className="w-6 h-6" />,
        skills: ["IAM (Auth0)", "REST API Integration", "Secure Hashing (SHA-256)", "Node.js Basics"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <p className="text-[10px] tracking-[0.8em] uppercase text-gold-rich mb-6 font-bold">Competency Matrix</p>
                    <h3 className="text-5xl md:text-7xl font-serif italic text-emerald-deep">Core Capabilities</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="glass-card group p-10 hover:shadow-emerald-glow will-change-transform transition-all duration-700"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-deep text-gold-champagne flex items-center justify-center mb-8 shadow-xl group-hover:bg-gold-rich group-hover:text-emerald-deep transition-all duration-500">
                                {category.icon}
                            </div>
                            <h4 className="text-2xl font-bold font-serif text-emerald-deep mb-8">{category.title}</h4>
                            <ul className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-4 text-emerald-rich/60 font-medium text-sm group-hover:text-emerald-deep transition-colors duration-300">
                                        <div className="w-2 h-[1px] bg-gold-rich" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-10 md:p-16 glass-card border-none bg-emerald-deep text-gold-champagne flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-rich/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div className="w-24 h-24 bg-gold-rich rounded-3xl flex items-center justify-center text-emerald-deep shadow-2xl group-hover:rotate-12 transition-transform duration-700">
                            <Award className="w-12 h-12" />
                        </div>
                        <div className="text-center md:text-left">
                            <h5 className="text-4xl font-serif italic font-black mb-2">Java Full Stack Certification</h5>
                            <p className="text-gold-rich/60 tracking-[0.4em] uppercase font-bold text-xs">JSpiders Academic Terminal • Bangalore</p>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-gold-rich text-emerald-deep font-bold text-[10px] tracking-[0.5em] uppercase hover:bg-gold-champagne transition-all cursor-pointer text-center rounded-xl shadow-xl shadow-gold-rich/20"
                        >
                            Verify Credential
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
