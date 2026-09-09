import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer I",
        company: "JPMorgan Chase & Co.",
        date: "Jul 2024 – Present",
        bullets: [
            "Architected the consolidation of multiple legacy monoliths into a unified React/TypeScript micro-frontend platform, accelerating deployment cycles by 40%.",
            "Designed high-throughput Java/Spring Boot REST APIs handling 10K+ RPM, implementing strict optimistic concurrency controls (ETags) to eliminate data collisions.",
            "Implemented the Transactional Outbox pattern across Oracle database schemas, guaranteeing at-least-once event delivery for quarterly risk ingestion.",
            "Modernized a React-based UI and improved WCAG accessibility compliance, increasing accessibility scores by 25% and CSAT from 75% to 93%.",
            "Led the convergence of disparate AWS EKS and ECS deployment pipelines into a single CI/CD workflow, reducing production release times from days to under 3 hours.",
            "Engineered an asynchronous, event-driven AI application utilizing a RAG pipeline to automate complex audit queries, saving ~3 weeks per quarter."
        ]
    },
    {
        role: "Software Engineering Intern",
        company: "JPMorgan Chase & Co.",
        date: "Jun 2023 – Jun 2024",
        bullets: [
            "Built a scalable role-based access chatbot using sentence transformer embeddings, serving 50K+ concurrent users and reducing manual IT escalation tickets by 60%.",
            "Developed a distributed financial instruments service to process 10K+ daily trades, introducing a Redis caching layer to offload database reads and meet a strict 99.9% availability SLA."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-bg-secondary relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
                    <div className="w-16 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-teal-200 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 bg-accent rounded-full ring-4 ring-teal-50"></div>

                            <div className="bg-bg-card border border-teal-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <span className="inline-block font-mono text-sm font-medium text-cyan-600 mb-2">{exp.date}</span>
                                <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.role}</h3>
                                <h4 className="text-base text-text-secondary mb-4">{exp.company}</h4>
                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="text-text-secondary text-sm md:text-base flex items-start gap-2">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span>{bullet}</span>
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
}
