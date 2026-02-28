import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, PenTool, BarChart } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming \u0026 Frontend",
        icon: <Code className="w-6 h-6" />,
        skills: ["Java (Full Stack)", "JavaScript", "ReactJS", "HTML5 \u0026 CSS3", "C# Base"]
    },
    {
        title: "Backend \u0026 Tools",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Spring Boot", "SQL", "Git \u0026 GitHub", "Postman", ".NET Fundamentals"]
    },
    {
        title: "Domain \u0026 Auth",
        icon: <BarChart className="w-6 h-6" />,
        skills: ["IAM (Auth0)", "REST API Integration", "Secure Hashing (SHA-256)", "Node.js Basics"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-moss mb-4 font-bold">Competencies</h2>
                    <h3 className="text-4xl font-serif italic text-forest">Technical Mastery \u0026 Domain Expertise</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="glass-panel p-8 group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-moss mb-6 group-hover:bg-forest group-hover:text-sage-50 transition-all duration-500">
                                {category.icon}
                            </div>
                            <h4 className="text-xl font-bold font-serif text-forest mb-6">{category.title}</h4>
                            <ul className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-forest/70 font-medium text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-moss/20" />
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
                    className="mt-24 p-8 glass-panel border-moss/10 flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <div className="flex items-center gap-4">
                        <Award className="w-10 h-10 text-moss" />
                        <div className="text-center md:text-left">
                            <h5 className="text-forest font-serif text-lg italic font-bold">Java Full Stack Certification</h5>
                            <p className="text-moss/70 text-xs tracking-widest uppercase font-bold">JSpiders, Bangalore</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

