import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Projects() {
  const [filter, setFilter] = useState('tous');
  const [headerRef, headerVisible] = useScrollReveal();
  const [filtersRef, filtersVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);
  const [ctaRef, ctaVisible] = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "GarageV2 - Gestion de Garage",
      description: "Application web permettant de gérer des véhicules, des pièces et des interventions de maintenance.",
      learning: "Logique CRUD, structuration d'une application full-stack, gestion de données relationnelles, organisation du code",
      image: "🚗",
      tags: ["React", "TypeScript", "Node.js", "Prisma", "SQLite"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Conception et développement de mon portfolio étudiant pour valoriser mon profil et mes compétences.",
      learning: "Structuration d'un projet frontend, responsive design, UX/UI, mise en valeur d'un profil étudiant",
      image: "🎨",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-sky-500 to-blue-500"
    },
    {
      id: 4,
      title: "Base de Données - Compétitions de Football",
      description: "Conception et modélisation d'une base de données complète pour gérer équipes, joueurs, matchs, arbitres, blessures et récompenses.",
      learning: "Modélisation de données (MCD/MLD/MPD), rigueur, logique relationnelle, requêtes SQL complexes",
      image: "⚽",
      tags: ["SQL", "MCD", "MLD", "MPD"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 7,
      title: "Projet d'Étude - Green IT",
      description: "Étude sur l'impact environnemental de l'informatique et les solutions Green IT.",
      learning: "Analyse, structuration d'un sujet complexe, réflexion critique, sensibilisation environnementale",
      image: "🌱",
      tags: ["Recherche", "Green IT", "Écologie"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-lime-500 to-green-600"
    },
    {
      id: 8,
      title: "RevisionApp - Fiches de Révision",
      description: "Application web permettant de créer, organiser et réviser des fiches de révision pour optimiser l'apprentissage.",
      learning: "Gestion de contenu dynamique, UX orientée productivité, CRUD avancé, organisation de données",
      image: "📝",
      tags: ["React", "Node.js", "Tailwind CSS"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 9,
      title: "PronoStats - Probabilités de Paris Sportifs",
      description: "Site d'analyse et de calcul de probabilités pour les paris en ligne, avec visualisation de statistiques.",
      learning: "Algorithmes de probabilité, analyse de données, visualisation de stats, logique métier complexe",
      image: "🎲",
      tags: ["React", "JavaScript", "API", "Statistiques"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-red-500 to-rose-500"
    },
    {
      id: 10,
      title: "LifeManager - Gestion de Vie Personnelle",
      description: "Application tout-en-un pour gérer ses finances, tâches, objectifs et habitudes du quotidien.",
      learning: "Architecture d'app complexe, gestion multi-modules, persistance de données, dashboard interactif",
      image: "🗂️",
      tags: ["React", "Node.js", "Tailwind CSS", "SQLite"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 11,
      title: "VintedBot - Analyse de Prix Vinted",
      description: "Bot d'analyse du prix moyen du marché sur des articles Vinted pour optimiser l'achat-revente.",
      learning: "Web scraping, analyse de marché, automatisation, traitement de données en temps réel",
      image: "🤖",
      tags: ["Python", "Web Scraping", "API", "Automatisation"],
      category: "personnel",
      badge: "Projet personnel",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 12,
      title: "Jeu Vidéo en Python avec MongoDB",
      description: "Développement d'un jeu en ligne de commande avec système de combat automatisé, vagues infinies et classement des meilleurs scores.",
      learning: "Persistance des données avec MongoDB, architecture modulaire, logique de jeu, gestion de classement",
      image: "🎮",
      tags: ["Python", "MongoDB", "Architecture", "Jeu"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 13,
      title: "Le Temple des Dieux Oubliés",
      description: "Jeu d'aventure 2D en Python avec Pygame. Exploration d'un temple antique avec 3 salles thématiques (Grecque, Égyptienne, Nordique) et énigmes à résoudre.",
      learning: "Architecture modulaire POO, moteur de jeu Pygame, gestion d'états, système de sauvegarde JSON, graphismes et effets visuels",
      image: "🏛️",
      tags: ["Python", "Pygame", "POO", "Architecture"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 14,
      title: "Système de Combat Pokémon",
      description: "Implémentation d'un système de combat Pokémon en Java utilisant l'héritage et le polymorphisme avec types élémentaires (Feu, Eau, Plante).",
      learning: "Héritage et polymorphisme Java, conception orientée objet, gestion des multiplicateurs de dégâts, architecture de classes",
      image: "⚔️",
      tags: ["Java", "POO", "Héritage", "Polymorphisme"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 15,
      title: "Road Trip Europe",
      description: "Site web de présentation de circuits road trip à travers l'Europe avec animations JavaScript interactives.",
      learning: "HTML/CSS responsive, animations JavaScript, présentation visuelle attractive, structure de site web",
      image: "🚗",
      tags: ["HTML", "CSS", "JavaScript", "Animations"],
      category: "scolaire",
      badge: "Projet scolaire",
      color: "from-blue-500 to-sky-500"
    }
  ];

  const categories = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'personnel', label: 'Projets personnels' },
    { id: 'scolaire', label: 'Projets scolaires' },
  ];

  const filteredProjects = filter === 'tous'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projet" className="py-16 md:py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez mes projets personnels et d&rsquo;apprentissage réalisés pour développer mes compétences.
          </p>
        </div>

        {/* Filter buttons */}
        <div ref={filtersRef} className={`flex justify-center gap-3 mb-10 flex-wrap stagger-children ${filtersVisible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm overflow-hidden hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image/icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <span className="text-7xl relative z-10">{project.image}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {project.description}
                </p>

                {/* Learning section */}
                <div className="mb-4 p-3 rounded-lg bg-sky-500/5 border border-sky-500/20">
                  <p className="text-xs text-sky-400 font-semibold mb-1">Ce que ce projet m&rsquo;a appris :</p>
                  <p className="text-xs text-slate-400">{project.learning}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project badge */}
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 text-sm font-medium text-sky-300">
                    {project.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div ref={ctaRef} className={`mt-16 text-center p-8 rounded-2xl border border-slate-800 bg-slate-900/40 reveal-scale ${ctaVisible ? 'visible' : ''}`}>
          <p className="text-slate-300 mb-2 text-xl font-semibold">
            Disponible pour une alternance ou un stage
          </p>
          <p className="text-slate-400 mb-6 text-sm">
            Motivé pour apprendre et évoluer au sein d&rsquo;une équipe.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50"
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
