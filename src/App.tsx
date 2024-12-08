import Navbar from './layout/Navbar.tsx';
import Hero from './layout/Hero.tsx';
import About from './layout/About.tsx';
import Projects from './layout/Projects.tsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};
export default App;
