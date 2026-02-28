import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
    {
        company: "CLOUD NEXUS TECH LLP",
        role: "IAM Consultant",
        period: "Feb 2025 – Sept 2025",
        location: "Hyderabad",
        details: [
            "Built Single Sign-On (SSO) applications using Spring Boot, integrating Auth0 for secure authentication.",
            "Implemented secure login mechanisms using SHA-256 and SHA-1 hashing algorithms.",
            "Developed Python automation scripts for complex Excel-to-CSV data mapping and accuracy."
        ]
    },
    {
        company: "TBRC",
        role: "Content Administrator Intern",
        period: "Sept 2024 – Feb 2025",
        location: "Hyderabad",
        details: [
            "Used Python regular expressions to clean and standardize large-scale content data.",
            "Managed web content via custom CMS using HTML, JavaScript, and Adobe Photoshop.",
            "Coordinated with development teams for timely digital publishing updates."
        ]
    },
    {
        company: "OHOINDIA LIFE TECH",
        role: "Junior Software Engineer",
        period: "Apr 2024 – Jul 2024",
        location: "Hyderabad",
        details: [
            "Developed frontend components using ReactJS and optimized UI for performance.",
            "Assisted in REST API testing using Postman to ensure seamless service integration.",
            "Contributed to the development of the Distributor application for rural medical registration."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-divider bg-sage-50/30">
            <div className="max-w-6xl mx-auto px-6 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-display tracking-[0.5em] uppercase text-moss mb-4 font-black">History Log</h2>
                    <h3 className="text-5xl font-serif italic text-forest">Professional Trajectory</h3>
                    <div className="w-24 h-px bg-mint mt-6" />
                </motion.div>

                <div className="space-y-16">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="futuristic-card group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-forest/5 flex items-center justify-center text-moss group-hover:bg-mint/10 group-hover:text-mint transition-all">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] tracking-[0.3em] uppercase font-black text-moss/50">{exp.company}</span>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl font-display font-medium text-forest group-hover:translate-x-2 transition-transform duration-500">{exp.role}</h4>

                                    <div className="flex gap-8 text-[10px] tracking-widest text-forest/40 uppercase font-bold pt-4">
                                        <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-mint" /> {exp.period}</span>
                                        <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-mint" /> {exp.location}</span>
                                    </div>
                                </div>

                                <ul className="flex-1 grid grid-cols-1 gap-4 border-l border-forest/5 pl-10">
                                    {exp.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="text-forest/60 text-sm leading-relaxed font-light relative">
                                            <div className="absolute -left-[45px] top-2 w-2 h-2 rounded-full bg-mint/20 group-hover:bg-mint group-hover:animate-pulse transition-all" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
