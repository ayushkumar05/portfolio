import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
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
                    <span className="font-mono text-sm text-accent bg-accent/5 px-3 py-1 rounded-full border border-teal-100">
                        &lt;software engineer /&gt;
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6"
                >
                    Ayush Kumar
                </motion.h1>

                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl font-semibold text-text-secondary mb-4 max-w-2xl mx-auto"
                >
                    Software Engineer | Distributed Systems &amp; Micro-frontends
                </motion.h2>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto"
                >
                    Building scalable React/TypeScript UIs, high-throughput Spring Boot APIs (10K+ RPM), and AI-driven RAG pipelines.
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-6"
                >
                    <a href="https://github.com/ayushkumar05" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-kumar-34b4b51b8/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:ayushk0520@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-light hover:shadow-[0_0_20px_var(--accent-glow)] transition-all">
                        <Mail size={18} />
                        <span>Email Me</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
