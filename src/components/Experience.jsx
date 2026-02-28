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
        <section id="experience" className="section-padding bg-sage-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-moss mb-4 font-bold">Field Experience</h2>
                    <h3 className="text-4xl font-serif italic text-forest">Professional Trajectory</h3>
                </motion.div>

                <div className="space-y-12">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-panel p-8 md:p-12 border-forest/5 hover:border-moss/20 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-2 text-moss mb-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="text-xs tracking-widest uppercase font-bold">{exp.company}</span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-serif text-forest font-bold">{exp.role}</h4>
                                </div>
                                <div className="flex flex-col md:items-end gap-2 text-forest/50 text-sm font-medium">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {exp.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex gap-4 text-forest/70 leading-relaxed font-light">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
