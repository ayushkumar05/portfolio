import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const primaryExperiences = [
    {
        role: "Software Engineer I",
        company: "JPMorgan Chase & Co.",
        location: "Bengaluru, India",
        date: "07/2024 – Present",
        highlight: "AI Systems, Distributed Backend & Micro-frontends",
        bullets: [
            "Architected an enterprise Python AI coding harness adopting adaptive model routing across tiered LLMs and verified AST code knowledge graphs; cut token expenditure by 48% via intent tiering, context pruning, and zero-model cached script execution.",
            "Engineered sandboxed agent runtimes executing autonomous refactors in isolated Git worktrees with strict AST-diff boundaries and CI test gates, supporting developers across CLI, Web, and VS Code via FastAPI SSE streaming and distributed S3/SQLite caching.",
            "Spearheaded the technical design and delivery of an asynchronous, event-driven RAG pipeline to automate regulatory audit queries, reducing query turnaround from 3 weeks to under 4 hours with 99.4% retrieval precision.",
            "Architected the consolidation of 4 legacy monoliths into a unified React/TypeScript micro-frontend platform with Module Federation, accelerating team feature velocity by 45% and reducing build times by 60%.",
            "Designed mission-critical Java/Spring Boot microservices handling 15K+ RPM (peak 3K RPS), enforcing strict optimistic locking via ETags and multi-tiered Redis caching to eliminate race conditions and cut p99 latency by 65% (450ms → 75ms).",
            "Modernized core institutional trading portals using Salt Design System and strict WCAG 2.1 AA accessibility standards, elevating accessibility compliance scores by 25% and CSAT from 75% to 94% across 10K+ daily institutional users.",
            "Led the convergence of 12 disparate AWS EKS and ECS deployment pipelines into a single GitOps CI/CD engine, slashing production release times from 4 days to under 45 minutes with automated canary rollbacks and zero downtime."
        ]
    },
    {
        role: "Software Engineering Intern",
        company: "JPMorgan Chase & Co.",
        location: "Bengaluru, India",
        date: "06/2023 – 06/2024",
        highlight: "Vector Search & Distributed Services",
        bullets: [
            "Architected a high-concurrency RBAC knowledge assistant utilizing fine-tuned bi-encoder embeddings and FAISS vector indexing, serving 50K+ internal users and deflecting 60% of Tier-1 manual IT escalations.",
            "Developed a distributed financial instruments service to process 10K+ daily trades, introducing a Redis caching layer to offload database reads and meet a strict 99.9% availability SLA."
        ]
    }
];

const olderExperiences = [
    {
        role: "Product Developer Intern",
        company: "Speak Your Mind Education LLP",
        location: "Remote / Hybrid",
        date: "01/2023 – 04/2023",
        bullets: [
            "Delivered an MVP EdTech platform supporting 500+ concurrent users, featuring WebRTC live streaming, face-recognition attendance, and an integrated doubt-resolution chatbot.",
            "Led agile sprints and mentored a team of 4 web development interns, establishing CI/CD pipelines and strict code review standards."
        ]
    },
    {
        role: "Web Developer Intern",
        company: "Appan Pyropark",
        location: "Remote",
        date: "08/2022 – 10/2022",
        bullets: [
            "Led a 3-person engineering team in architecting a full-stack e-commerce web application from inception to production deployment.",
            "Leveraged Flask REST APIs and MongoDB for high-performance product indexing, integrated with a responsive, mobile-first frontend."
        ]
    }
];

export default function Experience() {
    const [showOlder, setShowOlder] = useState(false);

    return (
        <section id="experience" className="py-24 relative transition-colors duration-300 backdrop-blur-[1px]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">Career Journey</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Work Experience</h2>
                    <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                    <p className="text-text-muted text-base md:text-lg max-w-2xl">
                        Engineering enterprise AI runtimes, distributed systems, micro-frontends, and high-availability services.
                    </p>
                </motion.div>

                {/* Primary Timeline */}
                <div className="relative border-l-2 border-[var(--app-timeline-line)] ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                    {primaryExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 bg-accent rounded-full ring-4 ring-[var(--app-timeline-dot-ring)]"></div>

                            <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-border-hover transition-all duration-200">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="font-mono text-sm font-medium text-accent">{exp.date}</span>
                                    <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                        <Sparkles size={11} />
                                        {exp.highlight}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-1">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-sm md:text-base text-text-muted mb-5">
                                    <span className="font-medium text-text-secondary">{exp.company}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>
                                <ul className="space-y-3">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="text-text-secondary text-sm md:text-base flex items-start gap-3 leading-relaxed">
                                            <span className="text-accent mt-1.5 shrink-0 select-none">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expandable Older Internships Section */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowOlder(!showOlder)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-bg-card text-text-secondary hover:text-accent hover:border-accent text-sm font-medium transition-all shadow-sm cursor-pointer"
                    >
                        <span>{showOlder ? "Hide Early Internships" : "View Early Career Internships (2022 – 2023)"}</span>
                        <motion.span
                            animate={{ rotate: showOlder ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>

                    <AnimatePresence>
                        {showOlder && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden mt-8 text-left"
                            >
                                <div className="relative border-l-2 border-dashed border-[var(--app-timeline-line)] ml-4 md:ml-6 pl-8 md:pl-12 space-y-8">
                                    {olderExperiences.map((exp, index) => (
                                        <div key={index} className="relative">
                                            <div className="absolute -left-[39px] md:-left-[55px] top-6 w-3 h-3 bg-text-muted/60 rounded-full ring-4 ring-[var(--app-timeline-dot-ring)]"></div>
                                            <div className="bg-bg-card/70 border border-border/80 rounded-2xl p-6 shadow-sm">
                                                <span className="inline-block font-mono text-xs font-medium text-text-muted mb-1.5">{exp.date}</span>
                                                <h3 className="text-lg font-semibold text-text-primary mb-1">{exp.role}</h3>
                                                <div className="text-sm text-text-muted mb-3">{exp.company} • {exp.location}</div>
                                                <ul className="space-y-2">
                                                    {exp.bullets.map((bullet, i) => (
                                                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                            <span className="text-text-muted mt-1 shrink-0">•</span>
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
