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
        <section id="projects" className="section-divider bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-forest/5 pb-12"
                >
                    <div>
                        <h2 className="text-sm font-display tracking-[0.6em] uppercase text-moss mb-6 font-black">Archive</h2>
                        <h3 className="text-5xl font-serif italic text-forest">Technical Creations</h3>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="text-xs tracking-widest text-forest/40 max-w-xs font-medium">Selected deployments exploring the boundaries of Java and frontend frameworks.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="futuristic-card group flex flex-col h-full bg-sage-50/20"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-4 h-4 text-mint" />
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-forest text-sage-50 flex items-center justify-center mb-8 shadow-lg group-hover:bg-mint group-hover:text-forest transition-all duration-500 shadow-mint/10">
                                {project.icon}
                            </div>

                            <h4 className="text-2xl font-serif text-forest mb-6 font-bold">{project.title}</h4>
                            <p className="text-forest/70 text-base font-light leading-relaxed mb-auto italic">
                                "{project.description}"
                            </p>

                            <div className="mt-12 flex flex-wrap gap-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[9px] tracking-[0.2em] font-black uppercase text-moss/60 py-1 flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-mint" />
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
