import skills from '../data/skills.json';

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Habilidades</h2>

        {skills.map((skill, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.score}/10</span>
            </div>
            <div className="w-full bg-gray-300 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${skill.score * 10}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;