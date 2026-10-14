import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Journee",
        date: "03/2025",
        subtitle: "Distributed AI Itinerary Synthesis Engine",
        description: "Architected a distributed multi-day itinerary synthesis engine combining Neo4j graph traversals and FAISS dense vector search for sub-second retrievals. Engineered constraint-solving heuristics (budget, routing, time windows) with FastAPI REST APIs to serve React-driven workflows, generating constraint-aware travel recommendations that reduced manual user planning effort by 80%.",
        tags: ["Python", "FastAPI", "Neo4j", "FAISS", "React", "Vector Search"]
    },
    {
        title: "HydroHive",
        date: "05/2023",
        subtitle: "Geospatial Inundation Analytics Pipeline",
        description: "Engineered an automated real-time geospatial analytics pipeline ingesting satellite telemetry and hydrological sensor streams, predicting 72-hour flood inundation with 89% recall. Built distributed raster feature extraction pipelines using XGBoost on Survey of India datasets, improving prediction accuracy over baseline models by 15%.",
        tags: ["Python", "PyTorch", "GeoPandas", "XGBoost", "Machine Learning"]
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
                        High-performance AI engines, distributed graph search, and machine learning pipelines I've designed and engineered.
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
                            className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all duration-200 group flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <span className="font-mono text-xs font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                                    {project.date}
                                </span>
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-text-muted mb-4">
                                {project.subtitle}
                            </div>
                            <p className="text-text-secondary text-sm md:text-base flex-grow mb-6 leading-relaxed">
                                {project.description}
                            </p>
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
