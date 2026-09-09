import { Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <h2 className="text-white text-xl font-semibold mb-6">Ayush Kumar</h2>

                <div className="flex items-center gap-6 mb-8">
                    <a href="https://github.com/ayushkumar05" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-kumar-34b4b51b8/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:ayushk0520@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <p className="text-slate-500 text-sm">
                    &copy; {currentYear} Ayush Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
