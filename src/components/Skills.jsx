import React, { useState } from 'react';
import skills from '../data/skills.json';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { t } = useTranslation();
  const categories = ['Todos', ...skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'Todos'
      ? skills.flatMap((s) =>
          s.skills.map((sk) => ({ ...sk, category: s.category }))
        )
      : skills
          .find((s) => s.category === selectedCategory)
          ?.skills.map((sk) => ({ ...sk, category: selectedCategory })) || [];

  return (
    <section id="skills" className="py-16 px-4 bg-dark text-white">
      <div className="max-w-4xl mx-auto">        
        <SectionTitle title={t('skills')} className="text-center mb-4"></SectionTitle>
        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
           <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 text-sm rounded-full border transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? ' bg-white/10 text-white border-gray-100'
                  : 'bg-dark2 text-gray-300 border-gray-600 hover:border-gray-100 cursor-pointer transition duration-200'
              }`}
            >
              {cat}
            </button>

          ))}
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-dark2 p-4 rounded-lg shadow-md flex gap-4 items-start"
            >
              <img
                src={`/src/assets/img/skills/${skill.logo}`}
                alt={skill.name}
                className="w-10 h-10 object-contain invert"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
