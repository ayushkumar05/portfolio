import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDark = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

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
            className="fixed top-0 w-full z-50 bg-bg-primary/70 backdrop-blur-xl border-b border-border"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-mono font-bold text-accent text-xl tracking-tighter">
                    AK
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => scrollTo('experience')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Experience</button>
                    <button onClick={() => scrollTo('skills')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Skills</button>
                    <button onClick={() => scrollTo('projects')} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Projects</button>
                    <button onClick={toggleDark} className="text-text-secondary hover:text-accent transition-colors">
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <a href="mailto:ayushk0520@gmail.com" className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-light hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
