import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Regulatory Controls and Operational Risk Technology (RCORT)",
        company: "JPMorgan Chase & Co.",
        date: "April 2026 – Present",
        bullets: [
            "Micro-frontend architecture and high-throughput backend systems",
            "Handling 10K+ RPM with ETags and caching strategies",
            "DevOps optimization enabling AWS EKS/ECS CI/CD convergence"
        ]
    },
    {
        role: "CertifyNow & Enterprise Access",
        company: "JPMorgan Chase & Co.",
        date: "July 2024 – April 2026",
        bullets: [
            "Frontend modernization using React/TypeScript meeting WCAG 2.1 AA standards",
            "Developed AI automation pipelines using RAG/FAISS",
            "Scaled backend via binary-search lookups resulting in a 90% runtime reduction"
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
