import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer I",
        company: "JPMorgan Chase & Co.",
        date: "Jul 2024 – Present",
        bullets: [
            "Developed an application to streamline audit query resolution, reducing developer workload by 5% each quarter using a RAG pipeline for query generation and execution.",
            "Maintain and enhance an internal application for user access management, improving system functionality and handling access collisions efficiently.",
            "Created an internal application with a user-friendly interface for reading and editing complex XML data using Spring Boot and React."
        ]
    },
    {
        role: "Attachment Intern",
        company: "JPMorgan Chase & Co.",
        date: "Jan 2024 – Jun 2024",
        bullets: [
            "Developed a chatbot using RAG pipelines to provide support for an internal application managing role-based access control.",
            "Facilitated technical queries for the development team and functional queries for the product team."
        ]
    },
    {
        role: "Summer Intern",
        company: "JPMorgan Chase & Co.",
        date: "Jun 2023 – Jul 2023",
        bullets: [
            "Developed a highly scalable and complex application for a Financial Instruments Project.",
            "Implemented a flexible dynamic form component using React and Material-UI to handle various requirements along with Spring Boot API endpoints."
        ]
    },
    {
        role: "Product Developer Intern",
        company: "Speak Your Mind Education LLP",
        date: "Jan 2023 – Apr 2023",
        bullets: [
            "Built an MVP for an innovative EdTech Platform featuring face-recognition attendance, live streaming, and a doubt-resolution chatbot.",
            "Guided and managed a team of web development interns."
        ]
    },
    {
        role: "Web Developer Intern",
        company: "Appan Pyropark",
        date: "Aug 2022 – Oct 2022",
        bullets: [
            "Led a team in developing a full-stack e-commerce web application.",
            "Utilized Flask, vanilla HTML/CSS, and MongoDB."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-bg-secondary/40 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
                    <div className="w-16 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-teal-200 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 bg-accent rounded-full ring-4 ring-teal-50"></div>

                            <div className="bg-bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                <span className="inline-block font-mono text-sm font-medium text-accent mb-2">{exp.date}</span>
                                <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.role}</h3>
                                <h4 className="text-base text-text-secondary mb-4">{exp.company}</h4>
                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="text-text-secondary text-sm md:text-base flex items-start gap-2">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
