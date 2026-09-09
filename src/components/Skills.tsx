import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Frontend Architecture",
        items: ["React 18", "TypeScript", "Micro-frontends", "Zustand", "TanStack Query", "Tailwind CSS", "JavaScript"]
    },
    {
        category: "Backend & Distributed Systems",
        items: ["Spring Boot", "Java", "Python", "Apache Kafka", "Redis", "PostgreSQL", "Flask", "REST APIs", "MongoDB"]
    },
    {
        category: "AI Infrastructure & Search",
        items: ["RAG Pipelines", "LangChain", "Vector Databases", "Semantic Search", "LLM Orchestration", "Python"]
    },
    {
        category: "Cloud, DevOps & Quality",
        items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "JUnit", "WebRTC"]
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
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Skills</h2>
                    <div className="w-16 h-1 bg-accent rounded-full"></div>
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
