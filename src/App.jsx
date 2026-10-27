import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Education from './components/sections/Education.jsx';
import Projects from './components/sections/Projects.jsx';
import Goal from './components/sections/Goal.jsx';
import Contact from './components/sections/Contact.jsx';

// A página é uma sequência de seções, na mesma ordem da navegação.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Goal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
