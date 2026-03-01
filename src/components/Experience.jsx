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
        <section id="experience" className="section-padding">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <p className="text-[10px] tracking-[0.5em] uppercase text-gold-rich mb-6 font-bold">Career Progression</p>
                    <h3 className="text-5xl md:text-7xl font-serif italic text-emerald-deep">Professional Roadmap</h3>
                </motion.div>

                <div className="space-y-12">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="glass-card group p-10 md:p-14 hover:shadow-gold-glow/10 transition-shadow duration-700"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
                                <div className="space-y-6 lg:w-1/3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-deep text-gold-champagne flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <span className="text-[11px] tracking-[0.3em] uppercase font-black text-emerald-rich/40 leading-none">{exp.company}</span>
                                    </div>
                                    <h4 className="text-4xl font-serif font-black text-emerald-deep group-hover:text-gold-rich transition-colors duration-500">{exp.role}</h4>

                                    <div className="flex flex-wrap gap-6 text-[10px] tracking-widest text-emerald-rich/50 uppercase font-bold pt-4">
                                        <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-gold-rich" /> {exp.period}</span>
                                        <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold-rich" /> {exp.location}</span>
                                    </div>
                                </div>

                                <ul className="flex-1 space-y-4 lg:border-l lg:border-emerald-deep/5 lg:pl-12">
                                    {exp.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="text-emerald-rich/70 text-base leading-relaxed font-light relative pl-8 italic">
                                            <div className="absolute left-0 top-3 w-4 h-[1px] bg-gold-rich/40 group-hover:w-6 transition-all" />
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
