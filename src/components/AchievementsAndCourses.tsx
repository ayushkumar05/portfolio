import { motion } from 'framer-motion';
import { Award, Trophy, BookOpen } from 'lucide-react';

const achievements = [
    {
        title: "Rising Star Award",
        organization: "JPMorgan Chase & Co.",
        date: "2025",
        description: "Awarded to the top 1% of engineers across APAC for outstanding technical contributions and engineering excellence.",
        icon: Trophy
    },
    {
        title: "Geo-Spatial Hackathon Finalist",
        organization: "Government of India",
        date: "2023",
        description: "Ranked 4th out of 1,200+ national participating engineering teams for terrain-aware predictive flood inundation modeling.",
        icon: Award
    }
];

const technicalCourses = [
    "Machine Learning with Python — IBM Skills Network",
    "Fundamentals of Computer Networks — Microsoft",
    "Prerequisites of Azure Administration — Microsoft",
    "QSTP Introduction to Blockchain — GDG BITS Goa"
];

export default function AchievementsAndCourses() {
    return (
        <section id="achievements" className="py-20 bg-bg-secondary relative transition-colors duration-300 backdrop-blur-[1px]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">Recognition</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Honors &amp; Achievements</h2>
                    <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                    <p className="text-text-muted text-base md:text-lg max-w-2xl">
                        Industry awards, national hackathon recognitions, and specialized coursework.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {achievements.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                                className="bg-bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-sm hover:border-accent hover:shadow-md transition-all flex flex-col"
                            >
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                                        <Icon size={22} />
                                    </div>
                                    <span className="font-mono text-xs font-semibold text-accent bg-accent/5 px-2.5 py-1 rounded-full border border-border">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                                    {item.title}
                                </h3>
                                <div className="text-sm font-medium text-text-muted mb-3">
                                    {item.organization}
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Technical Coursework */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="bg-bg-card/70 border border-border rounded-2xl p-6 sm:p-7 shadow-sm"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={18} className="text-accent" />
                        <h3 className="text-base sm:text-lg font-bold text-text-primary">
                            Specialized Technical Coursework
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {technicalCourses.map((course, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                                <span className="text-accent mt-0.5">•</span>
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
