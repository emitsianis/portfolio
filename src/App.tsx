import Navbar from './layout/Navbar.tsx';
import Hero from './layout/Hero.tsx';
import About from './layout/About.tsx';
import Skills from './layout/Skills.tsx';
import Contact from './layout/Contact.tsx';
import Footer from './layout/Footer.tsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
