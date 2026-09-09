import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsAndCourses from './components/AchievementsAndCourses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-light selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <AchievementsAndCourses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
