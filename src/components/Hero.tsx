import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';
import GradientMesh from './GradientMesh';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <GradientMesh />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4 inline-block"
                >
                    <span className="font-mono text-xs sm:text-sm text-accent bg-accent/5 px-3 py-1 rounded-full border border-border">
                        &lt;software engineer /&gt;
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-4 sm:mb-6"
                >
                    Ayush Kumar
                </motion.h1>

                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-text-secondary mb-3 sm:mb-4 max-w-2xl mx-auto px-2"
                >
                    Software Engineer | Distributed Systems &amp; Micro-frontends
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm sm:text-base md:text-lg text-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
                >
                    Engineering high-performance distributed systems, scalable React/TypeScript micro-frontends, and intelligent AI-driven applications. Passionate about solving complex architectural challenges.
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                >
                    <button
                        onClick={() => {
                            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-contrast rounded-full text-sm sm:text-base font-medium hover:bg-accent-light hover:shadow-[0_0_20px_var(--accent-glow)] transition-all cursor-pointer"
                    >
                        <Briefcase size={18} />
                        <span>Work Experience</span>
                    </button>

                    <button
                        onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border bg-bg-card/80 text-text-primary rounded-full text-sm sm:text-base font-medium hover:border-accent hover:text-accent transition-all cursor-pointer"
                    >
                        <span>View Projects</span>
                    </button>

                    <a
                        href="mailto:ayushk0520@gmail.com"
                        className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border bg-bg-card/80 text-text-primary rounded-full text-sm sm:text-base font-medium hover:border-accent hover:text-accent transition-all"
                    >
                        <Mail size={18} />
                        <span>Get in Touch</span>
                    </a>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <a href="https://github.com/ayushkumar05" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 text-text-secondary hover:text-accent rounded-full border border-border bg-bg-card/60 hover:border-accent transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-kumar-34b4b51b8/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 text-text-secondary hover:text-accent rounded-full border border-border bg-bg-card/60 hover:border-accent transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
