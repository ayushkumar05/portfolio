import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

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
                        Degree and formal foundation in Computer Science &amp; Engineering.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-accent transition-all"
                >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                                <GraduationCap size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                                    B.Tech in Computer Science and Engineering
                                </h3>
                                <div className="text-base font-medium text-text-secondary">
                                    SRM Institute of Science and Technology
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                                <Award size={13} />
                                GPA: 8.80
                            </span>
                            <span className="font-mono text-xs text-text-muted bg-bg-card px-3 py-1 rounded-full border border-border">
                                2020 – 2024
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-text-muted pt-2 border-t border-border/40">
                        <MapPin size={14} className="text-accent" />
                        <span>Chennai, India</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
