import React, { useState, useRef, useLayoutEffect } from 'react';
import projects from '../data/projects.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEye } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);
const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default'
});

const imageMap = {};
for (const path in projectImages) {
  const fileName = path.split('/').pop();
  imageMap[fileName] = projectImages[path];
}

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (id) => {
    if (window.innerWidth < 768) {
      setSelectedProject(selectedProject === id ? null : id);
    }
  };

  return (
    <section id="projects" className="py-16 px-4 bg-dark2 text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">        
        <SectionTitle title={t('projects')} className="text-center mb-2"></SectionTitle>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-8 text-sm">
        Los siguientes proyectos fueron desarrollados y entregados por mí durante mi etapa como parte del equipo de iPalmera S.A. Actualmente no están bajo mi administración directa.
      </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isFlipped = selectedProject === project.id;
            return (
              <div
                key={project.id}
                className="flip-card perspective relative"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div
                  className={`flip-card-inner transition-transform duration-700 ease-in-out ${
                    isFlipped ? 'rotate-y-180' : ''
                  } md:hover:rotate-y-180`}
                >
                  {/* Front */}
                  <div className="flip-card-front bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                      ⭐ 
                    </div>
                  )}
                    <img
                      src={`/img/projects/${project.image}`}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            project.url ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}
                        >
                          {project.url ? 'Online' : 'Archivado'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-sm bg-gray-700 text-white px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Botón solo visible en móvil */}
                      <button
                        onClick={() => handleCardClick(project.id)}
                        className="md:hidden inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-sky-600 rounded hover:bg-sky-500 transition"
                      >
                        {isFlipped ? 'Ocultar' : 'Ver más →'}
                      </button>
                    </div>
                  </div>

                  {/* Back */}
              <div className="flip-card-back absolute inset-0 bg-gray-900 text-white p-6 rounded-lg overflow-y-auto flex items-center justify-center">
                 {project.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                      ⭐ 
                    </div>
                  )}
                   <button
      onClick={() => handleCardClick(project.id)}
      className="md:hidden absolute top-0 right-3 text-gray-400 hover:text-white text-2xl font-bold"
    >
      &times;
    </button>
  <div className="max-w-lg w-full text-center relative">
    
   

    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

    <p className="text-gray-300 mb-4">{project.details}</p>

    {project.url ? (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sky-400 hover:underline gap-2"
        title="Ver proyecto"
      >
        <FaEye className="text-lg" />
        <span className="text-white text-sm">Visitar sitio web</span>
      </a>
    ) : (
      <p className="text-sm text-gray-500 italic">
        Este proyecto actualmente no está disponible en línea.
      </p>
    )}
  </div>
</div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
