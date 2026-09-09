import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Default to light mode unless explicitly set to dark
        if (localStorage.theme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
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
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'Experience', id: 'experience' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Education', id: 'education' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <div className="font-mono font-bold text-accent text-xl tracking-tighter">
                    AK
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">
                            {link.label}
                        </button>
                    ))}
                    <button onClick={toggleDark} className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent/10 transition-all relative w-10 h-10 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isDark ? "sun" : "moon"}
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                    <a href="mailto:ayushk0520@gmail.com" className="px-4 py-2 bg-accent text-accent-contrast rounded-full text-sm font-medium hover:bg-accent-light hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
                        Contact
                    </a>
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button onClick={toggleDark} className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent/10 transition-all relative w-10 h-10 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isDark ? "sun" : "moon"}
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent/10 transition-all">
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map(link => (
                                <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left text-base font-medium text-text-secondary hover:text-accent transition-colors py-2 px-2 rounded-lg hover:bg-accent/5">
                                    {link.label}
                                </button>
                            ))}
                            <a href="mailto:ayushk0520@gmail.com" className="mt-2 px-4 py-3 bg-accent text-accent-contrast rounded-xl text-sm font-medium text-center hover:bg-accent-light transition-all">
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
