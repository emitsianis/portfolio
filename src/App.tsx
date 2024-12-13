import Navbar from './layout/Navbar.tsx';
import Hero from './layout/Hero.tsx';
import About from './layout/About.tsx';
import Skills from './layout/Skills.tsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
};
export default App;
