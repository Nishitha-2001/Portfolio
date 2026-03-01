import { motion } from 'framer-motion';
import { Database, Layout, CheckCircle } from 'lucide-react';
import bankingImg from '../assets/banking.png';
import inventoryImg from '../assets/inventory.png';
import websiteImg from '../assets/website.png';

const projectsData = [
    {
        title: "Secure Banking Application",
        description: "A robust banking system built with Java and Spring Boot, focusing on secure transaction flows and reliable data management.",
        tech: ["Java", "Spring Boot", "SQL", "Security"],
        image: bankingImg,
        span: "md:col-span-7 md:row-span-2",
        icon: <Database className="w-5 h-5" />
    },
    {
        title: "Product Management CRUD",
        description: "A dynamic ReactJS application for real-time product inventory tracking, using JSON Server.",
        tech: ["ReactJS", "JSON Server", "Tailwind"],
        image: inventoryImg,
        span: "md:col-span-5 md:row-span-1",
        icon: <Layout className="w-5 h-5" />
    },
    {
        title: "Website Redesign Project",
        description: "Structural overhaul of a corporate site focused on improving user navigation and visual aesthetics.",
        tech: ["HTML5", "CSS3", "UI/UX"],
        image: websiteImg,
        span: "md:col-span-5 md:row-span-1",
        icon: <CheckCircle className="w-5 h-5" />
    }
];

const ProjectCard = ({ project, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`group relative overflow-hidden glass-card p-6 ${project.span} tilt-card flex flex-col`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-rich/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Preview Container */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl mb-8 border border-white/20 shadow-inner">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-deep/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-deep text-gold-champagne flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                    </div>
                    <h4 className="text-2xl font-serif text-emerald-deep font-bold tracking-tight">{project.title}</h4>
                </div>

                <p className="text-emerald-rich/70 text-sm font-light leading-relaxed mb-8 italic">
                    "{project.description}"
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[8px] tracking-[0.2em] font-bold uppercase bg-emerald-deep/5 text-emerald-rich px-3 py-1.5 rounded-full border border-emerald-rich/10">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold-rich/10 blur-[60px] rounded-full group-hover:translate-x-[-20%] group-hover:translate-y-[-20%] transition-transform duration-700" />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section-padding overflow-hidden">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-emerald-deep/5 pb-12">
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] tracking-[0.8em] uppercase text-gold-rich mb-6 font-bold"
                    >
                        Selected Works
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif italic text-emerald-deep"
                    >
                        Portfolio Archive
                    </motion.h3>
                </div>
                <div className="mt-8 md:mt-0 max-w-xs">
                    <p className="text-xs tracking-widest leading-relaxed text-emerald-rich/50 font-medium uppercase">
                        A collection of high-integrity software deployments exploring modern architectural boundaries.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {projectsData.map((project, idx) => (
                    <ProjectCard key={idx} project={project} idx={idx} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
