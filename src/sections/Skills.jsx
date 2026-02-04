import { useState } from 'react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [headerRef, headerVisible] = useScrollReveal();
  const [tabsRef, tabsVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  const techCount = useCountUp(30, 1500, statsVisible);
  const projectCount = useCountUp(8, 1500, statsVisible);
  const yearCount = useCountUp(2, 1500, statsVisible);
  const motivationCount = useCountUp(100, 1500, statsVisible);

  const skillsData = {
    frontend: [
      { name: "HTML/CSS/JavaScript", level: "Utilisé dans plusieurs projets", color: "from-orange-500 to-orange-600", icon: "🌐" },
      { name: "Framework JS (React)", level: "Utilisé dans plusieurs projets", color: "from-sky-500 to-sky-600", icon: "⚛️" },
      { name: "UX/UI Design", level: "Notions acquises", color: "from-pink-500 to-rose-500", icon: "🎨" },
    ],
    backend: [
      { name: "Python", level: "Utilisé dans plusieurs projets", color: "from-blue-500 to-blue-600", icon: "🐍" },
      { name: "C#", level: "Notions acquises", color: "from-purple-500 to-purple-600", icon: "💻" },
      { name: "Java", level: "Notions acquises", color: "from-red-500 to-red-600", icon: "☕" },
      { name: "PHP (Framework)", level: "Notions acquises", color: "from-indigo-500 to-indigo-600", icon: "🐘" },
      { name: "Macro VBA", level: "Bases", color: "from-green-500 to-green-600", icon: "📊" },
      { name: "PowerShell / Scripting", level: "Notions acquises", color: "from-blue-600 to-blue-700", icon: "⚙️" },
    ],
    tools: [
      { name: "Linux", level: "Utilisé dans plusieurs projets", color: "from-yellow-500 to-orange-500", icon: "🐧" },
      { name: "Windows Client", level: "Utilisé régulièrement", color: "from-blue-500 to-blue-600", icon: "🪟" },
      { name: "Windows Server / AD", level: "Notions acquises", color: "from-blue-600 to-blue-700", icon: "🖥️" },
      { name: "Mac OS", level: "Bases", color: "from-gray-500 to-gray-600", icon: "🍎" },
      { name: "Git / GitHub / GitLab", level: "Utilisé dans tous mes projets", color: "from-orange-600 to-red-600", icon: "📦" },
      { name: "VS Code / Visual Studio", level: "Utilisé quotidiennement", color: "from-blue-400 to-blue-500", icon: "💻" },
      { name: "Cloud", level: "Notions acquises", color: "from-sky-400 to-sky-500", icon: "☁️" },
      { name: "Supervision", level: "Notions acquises", color: "from-amber-500 to-amber-600", icon: "📡" },
      { name: "Domotique", level: "Découverte", color: "from-green-400 to-green-500", icon: "🏠" },
    ],
    network: [
      { name: "Concepts Réseaux", level: "Bases solides", color: "from-blue-500 to-blue-600", icon: "🌐" },
      { name: "Cisco", level: "Notions acquises", color: "from-teal-500 to-teal-600", icon: "📡" },
      { name: "Hardware", level: "Notions acquises", color: "from-gray-500 to-gray-600", icon: "🔧" },
      { name: "iOS / Android", level: "Découverte", color: "from-green-500 to-green-600", icon: "📱" },
      { name: "Cybersécurité", level: "Notions acquises", color: "from-red-600 to-red-700", icon: "🔒" },
    ],
    database: [
      { name: "SQL / SGBD", level: "Bases solides", color: "from-blue-500 to-blue-600", icon: "💾" },
      { name: "MCD / MLD / MPD", level: "Utilisé dans plusieurs projets", color: "from-green-500 to-green-600", icon: "📊" },
      { name: "Big Data", level: "Notions acquises", color: "from-violet-500 to-violet-600", icon: "📈" },
      { name: "Conception Architecture", level: "Notions acquises", color: "from-slate-500 to-slate-600", icon: "🏗️" },
    ],
    softskills: [
      { name: "Gestion de Projet", level: "Notions acquises", color: "from-purple-500 to-purple-600", icon: "📋" },
      { name: "Méthode Agile & Scrum", level: "Notions acquises", color: "from-cyan-500 to-cyan-600", icon: "🔄" },
      { name: "Anglais", level: "Niveau B1+", color: "from-red-500 to-blue-500", icon: "🇬🇧" },
      { name: "Veille Technologique", level: "Pratiquée régulièrement", color: "from-teal-500 to-teal-600", icon: "🔍" },
    ],
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Langages', icon: '⚙️' },
    { id: 'tools', label: 'Outils & OS', icon: '🛠️' },
    { id: 'network', label: 'Réseaux & Infra', icon: '🌐' },
    { id: 'database', label: 'Base de Données', icon: '💾' },
    { id: 'softskills', label: 'Soft Skills', icon: '🤝' },
  ];

  const stats = [
    { value: techCount, suffix: '+', label: 'Technologies' },
    { value: projectCount, suffix: '+', label: 'Projets' },
    { value: yearCount, suffix: '+', label: "Années d'étude" },
    { value: motivationCount, suffix: '%', label: 'Motivation' },
  ];

  return (
    <section id="competence" className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Technologies et outils que j&rsquo;apprends et utilise dans mes projets personnels et scolaires.
          </p>
        </div>

        {/* Category tabs */}
        <div ref={tabsRef} className={`flex justify-center gap-3 mb-10 flex-wrap stagger-children ${tabsVisible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50 scale-105'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:scale-105'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`} key={activeCategory}>
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-xs text-slate-400">{skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children ${statsVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
