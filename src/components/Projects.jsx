import React, { useState } from 'react';
import projects from '../data/projects.json';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
       {projects.map((project) => (
  <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={`/src/assets/projects/${project.image}`}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>        
        <span
          className={`text-xs px-2 py-1 rounded ${
            project.url
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {project.url ? 'Online' : 'Archivado'}
        </span>
      </div>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => setSelectedProject(project)}
        className="text-blue-600 hover:underline"
      >
        Ver más →
      </button>
    </div>
  </div>
))}

        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={`/src/assets/projects/${selectedProject.image}`}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-800 mb-4">{selectedProject.details}</p>     

            {selectedProject.url ? (
  <a
    href={selectedProject.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-blue-600 hover:underline"
  >
    Ver proyecto →
  </a>
) : (
  <p className="text-sm text-gray-500 italic">Este proyecto actualmente no está disponible en línea.</p>
)}
  
            
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;