import { motion } from 'framer-motion';

const educationData = [
    {
        degree: "Computer Science Engineering",
        institution: "SRM Institute of Science and Technology (SRM-IST)",
        date: "2020 - 2024 | Chennai, India"
    },
    {
        degree: "High School",
        institution: "St Johns High School",
        date: "Graduated July 2020 | Chandigarh, India"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-bg-secondary relative transition-colors duration-300 backdrop-blur-[1px] border-t border-border/40">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">Academic Foundation</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Education</h2>
                    <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                    <p className="text-text-muted text-base md:text-lg max-w-2xl">
                        Degree and foundational background in Computer Science &amp; Engineering.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
                        >
                            <span className="inline-block font-mono text-sm font-medium text-accent mb-2">{edu.date}</span>
                            <h3 className="text-xl font-semibold text-text-primary mb-1">{edu.degree}</h3>
                            <h4 className="text-base text-text-muted">{edu.institution}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
