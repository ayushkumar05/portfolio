import { motion } from 'framer-motion';

export default function Navbar() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-teal-100"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-mono font-bold text-accent text-xl tracking-tighter">
                    AK
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => scrollTo('experience')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Experience</button>
                    <button onClick={() => scrollTo('skills')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Skills</button>
                    <button onClick={() => scrollTo('projects')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Projects</button>
                    <a href="mailto:ayush@example.com" className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-light hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
