import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Solidity"]
    },
    {
        category: "Backend & Distributed Systems",
        items: ["FastAPI", "Spring Boot", "Node.js", "Flask", "Microservices", "REST APIs", "Kafka"]
    },
    {
        category: "Databases & Caching",
        items: ["PostgreSQL", "Oracle", "Redis", "SQLite", "Neo4j", "Vector Databases (FAISS, ChromaDB)"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EKS, ECS, S3)", "Docker", "Kubernetes", "CI/CD", "Git"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-secondary relative overflow-hidden transition-colors duration-300 backdrop-blur-[1px]">
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">Technical Arsenal</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Technical Skills</h2>
                    <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                    <p className="text-text-muted text-base md:text-lg max-w-2xl">
                        Core languages, frameworks, distributed architectures, and cloud infrastructure I leverage to build mission-critical systems.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {skillsData.map((skillGroup, groupIdx) => (
                        <div key={groupIdx}>
                            <h3 className="text-lg font-semibold text-text-primary mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.03,
                                            ease: "backOut"
                                        }}
                                        className="px-4 py-1.5 rounded-full border border-border bg-bg-card text-sm font-medium text-text-primary hover:border-accent hover:text-accent hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
