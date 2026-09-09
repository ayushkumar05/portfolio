import { motion } from 'framer-motion';

const achievements = [
    "Finalist for the Geo-spatial hackathon conducted by the Department of Science and Technology, India (2023)",
    "Shortlisted under top 15 projects for Data Science Community SRM Hackathon (2022)",
    "Rising Star Award, JPMorgan Chase & Co. (2025)" // from the first resume
];

const courses = [
    "Fundamentals of Computer Network (Microsoft)",
    "Prerequisites of Azure Administration (Microsoft)",
    "QSTP Introduction to blockchain (Google Developers Group BITs Goa)",
    "Machine Learning with Python (IBM Skills network)"
];

export default function AchievementsAndCourses() {
    return (
        <section id="achievements-courses" className="py-24 bg-bg-primary relative">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Achievements</h2>
                    <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
                    <ul className="space-y-4">
                        {achievements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-accent mt-1">✦</span>
                                <span className="text-text-secondary text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Courses</h2>
                    <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
                    <ul className="space-y-4">
                        {courses.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-accent mt-1">✦</span>
                                <span className="text-text-secondary text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
