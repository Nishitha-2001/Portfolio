import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, PenTool, BarChart } from 'lucide-react';

const skillCategories = [
    {
        title: "Design Strategy",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Visual Brand Identity", "User Experience Design", "Design Systems", "Creative Direction"]
    },
    {
        title: "Digital Excellence",
        icon: <Code className="w-6 h-6" />,
        skills: ["React Development", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
        title: "Market Insight",
        icon: <BarChart className="w-6 h-6" />,
        skills: ["Consumer Research", "Strategic Positioning", "Trend Analysis", "Data Visualization"]
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
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-gold mb-4">Competencies</h2>
                    <h3 className="text-4xl font-serif italic text-champagne">Artistry Meets Analytics</h3>
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
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-emerald-950 transition-all duration-500">
                                {category.icon}
                            </div>
                            <h4 className="text-xl font-serif text-champagne mb-6">{category.title}</h4>
                            <ul className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-champagne/60 font-light text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements Section / Mini Ticker */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 glass-panel border-gold/10 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-4">
                        <Award className="w-10 h-10 text-gold" />
                        <div>
                            <h5 className="text-champagne font-serif text-lg italic">Design Excellence Award 2023</h5>
                            <p className="text-gold/50 text-xs tracking-widest uppercase">Global Creative Summit</p>
                        </div>
                    </div>
                    <div className="h-px w-12 bg-gold/20 hidden md:block" />
                    <div className="flex items-center gap-4">
                        <Award className="w-10 h-10 text-gold" />
                        <div>
                            <h5 className="text-champagne font-serif text-lg italic">Top 30 Under 30 Strategists</h5>
                            <p className="text-gold/50 text-xs tracking-widest uppercase">Industry Weekly</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

