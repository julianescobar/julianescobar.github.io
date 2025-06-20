import { useRef } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

function Portfolio({ hiddenContact, hiddenSocial }) {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header hiddenContact={hiddenContact} onNavClick={scrollToSection} />
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={contactRef}>
        <Footer bg="bg-dark2" hiddenSocial={hiddenSocial} />
      </section>
    </>
  );
}

export default Portfolio;
