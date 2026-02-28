import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, CheckCircle } from 'lucide-react';

const projectsData = [
    {
        title: "Secure Banking Application",
        description: "A robust banking system built with Java and Spring Boot, focusing on secure transaction flows and reliable data management.",
        tech: ["Java", "Spring Boot", "SQL", "Security"],
        icon: <Database className="w-6 h-6" />
    },
    {
        title: "Product Management CRUD",
        description: "A dynamic ReactJS application for real-time product inventory tracking, using JSON Server for simulated backend persistence.",
        tech: ["ReactJS", "JSON Server", "Tailwind CSS"],
        icon: <Layout className="w-6 h-6" />
    },
    {
        title: "Website Redesign Project",
        description: "Structural overhaul of a corporate site focused on improving user navigation and visual aesthetics using modern HTML/CSS patterns.",
        tech: ["HTML5", "CSS3", "UI/UX"],
        icon: <CheckCircle className="w-6 h-6" />
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-sage-100">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-moss mb-4 font-bold">Showcase</h2>
                    <h3 className="text-4xl font-serif italic text-forest">Technical Creations</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="glass-panel p-8 flex flex-col h-full border-forest/5 hover:border-moss/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-moss mb-8">
                                {project.icon}
                            </div>
                            <h4 className="text-2xl font-serif text-forest mb-4 font-bold">{project.title}</h4>
                            <p className="text-forest/60 text-base font-light leading-relaxed mb-auto">
                                {project.description}
                            </p>
                            <div className="mt-8 pt-6 border-t border-forest/5 flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] tracking-widest uppercase font-bold text-moss bg-moss/5 px-3 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
