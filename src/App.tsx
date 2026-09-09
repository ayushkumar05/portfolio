import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsAndCourses from './components/AchievementsAndCourses';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="relative min-h-screen text-text-primary selection:bg-accent-light selection:text-white transition-colors duration-300">
      <Background3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <AchievementsAndCourses />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
