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
        <section id="skills" className="section-divider bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-display tracking-[0.6em] uppercase text-moss mb-4 font-black">System Capabilities</h2>
                    <h3 className="text-5xl font-serif italic text-forest">Technical Mastery & Domain Expertise</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="futuristic-card group hover:backdrop-blur-2xl hover:border-mint/50 transition-all duration-500"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-mint opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mint opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mint opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 translate-y-2" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-mint opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-moss mb-10 group-hover:bg-mint group-hover:text-forest transition-all duration-500 shadow-xl shadow-forest/5">
                                    {category.icon}
                                </div>
                                <h4 className="text-2xl font-bold font-serif text-forest mb-8 transition-colors duration-500">{category.title}</h4>
                                <ul className="space-y-6">
                                    {category.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex items-center gap-4 text-forest/60 font-medium text-sm group-hover:text-forest transition-colors duration-300">
                                            <div className="w-2 h-px bg-mint" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 glass-panel border-mint/20 flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div className="w-24 h-24 bg-forest rounded-3xl flex items-center justify-center text-mint shadow-2xl">
                            <Award className="w-12 h-12" />
                        </div>
                        <div className="text-center md:text-left">
                            <h5 className="text-4xl font-serif text-forest italic font-black mb-2">Java Full Stack Certification</h5>
                            <p className="text-moss tracking-[0.4em] uppercase font-black text-xs">JSpiders Academic Terminal • Bangalore</p>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <div className="px-10 py-5 bg-forest text-sage-50 font-display font-black text-[10px] tracking-[0.5em] uppercase hover:bg-mint hover:text-forest transition-all cursor-crosshair text-center">
                            Verify Credential
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
