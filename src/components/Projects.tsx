import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Journee",
        description: "AI-powered trip planner using RAG/FAISS vector search to curate personalized travel itineraries.",
        tags: ["React", "Flask", "FAISS", "RAG"]
    },
    {
        title: "HydroHive",
        description: "Geospatial flood-risk analytics system using a terrain-aware XGBoost model for predictive mapping.",
        tags: ["Python", "XGBoost", "Geospatial", "React"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-bg-primary relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Projects</h2>
                    <div className="w-16 h-1 bg-accent rounded-full"></div>
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
                            className="bg-bg-card border border-teal-100 rounded-2xl p-8 hover:border-accent hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 group flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-text-primary mb-3">{project.title}</h3>
                            <p className="text-text-secondary text-sm md:text-base flex-grow mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-teal-50 text-cyan-700 text-xs px-2.5 py-1 rounded-full font-mono font-medium"
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
