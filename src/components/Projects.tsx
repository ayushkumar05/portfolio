import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Journee",
        description: "Architected an AI-powered trip planner translating natural language into dynamic multi-day itineraries using a sophisticated RAG pipeline with FAISS-based vector search and OpenAI LLMs. Built scalable, asynchronous Flask REST APIs to serve complex React-driven workflows, generating context-aware travel recommendations while reducing latency by 40% through intelligent caching strategies.",
        tags: ["React", "Flask", "FAISS", "RAG", "Python", "Redis"]
    },
    {
        title: "HydroHive",
        description: "Developed a comprehensive geospatial flood-risk analytics platform integrating high-volume meteorological datasets and multispectral satellite imagery. Trained and deployed a robust terrain-aware XGBoost machine learning pipeline with advanced raster feature engineering, achieving 92% accuracy in 72-hour automated risk forecasting via Dockerized microservices.",
        tags: ["Python", "XGBoost", "Geospatial", "Docker", "Machine Learning"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative transition-colors duration-300 backdrop-blur-[1px]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">Featured Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Projects</h2>
                    <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                    <p className="text-text-muted text-base md:text-lg max-w-2xl">
                        Selected production applications, AI systems, and distributed platforms I've engineered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="bg-bg-card border border-border rounded-2xl p-8 hover:border-accent hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all duration-200 group flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-text-primary mb-3">{project.title}</h3>
                            <p className="text-text-secondary text-sm md:text-base flex-grow mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-[var(--app-tag-bg)] text-[var(--app-tag-text)] text-xs px-2.5 py-1 rounded-full font-mono font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
