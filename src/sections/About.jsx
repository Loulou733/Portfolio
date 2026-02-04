import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useScrollReveal } from '../hooks/useScrollReveal';

function About() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [bioRef, bioVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [interestsRef, interestsVisible] = useScrollReveal();
  const experiences = [
    {
      year: "2024-2025",
      title: "Bachelor Informatique - 2ᵉ année",
      description: "Approfondissement en développement web, programmation et bases de données. Réalisation de nombreux projets personnels pour progresser.",
      icon: "🎓"
    },
    {
      year: "2023-2024",
      title: "Bachelor Informatique - 1ère année",
      description: "Découverte des fondamentaux : algorithmique, programmation, réseaux et systèmes",
      icon: "📚"
    },
    {
      year: "2020-2023",
      title: "Bac Général - Spécialité NSI",
      description: "Lycée avec spécialité Numérique et Sciences Informatiques. Première approche de la programmation et de l'algorithmique.",
      icon: "🏫"
    }
  ];

  const interests = [
    { icon: "💻", title: "Développement Web", description: "Apprentissage des frameworks modernes" },
    { icon: "🎨", title: "UI/UX Design", description: "Création d'interfaces intuitives" },
    { icon: "🤝", title: "Travail en équipe", description: "Collaborer sur des projets concrets" },
    { icon: "📚", title: "Apprentissage continu", description: "Veille techno et progression" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Mon parcours, mes compétences et ma recherche d&rsquo;alternance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Bio */}
          <div ref={bioRef} className={`space-y-6 reveal-left ${bioVisible ? 'visible' : ''}`}>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold mb-4 text-sky-400">Mon parcours</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Bonjour ! Je suis <span className="text-white font-semibold">Loevan</span>,
                  étudiant en 2ᵉ année de Bachelor Informatique, passionné par le développement et les nouvelles technologies.
                </p>
                <p>
                  J&rsquo;aime apprendre et relever de nouveaux défis techniques.
                  Chaque projet personnel que je réalise est pour moi l&rsquo;occasion de progresser,
                  de mettre en pratique mes connaissances et de découvrir de nouvelles technologies.
                </p>
                <p className="bg-sky-500/10 border border-sky-500/30 rounded-lg p-4">
                  <span className="text-sky-400 font-semibold">Mon objectif :</span> Intégrer une entreprise en
                  <span className="text-white font-semibold"> alternance</span> ou en
                  <span className="text-white font-semibold"> stage</span> afin de développer mes compétences dans un cadre professionnel
                  et contribuer à des projets concrets.
                </p>
              </div>

              {/* Social links placeholder */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/Loulou733"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/loevan-le-saint-764100388/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="mailto:loevanlspro@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <HiOutlineMail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Timeline */}
          <div ref={timelineRef} className={`space-y-6 reveal-right ${timelineVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-6 text-sky-400">Mon parcours scolaire</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-slate-800 last:pb-0 hover:border-sky-500/50 transition-colors duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500 border-4 border-[#020617]" />

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{exp.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                          <span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-2 py-1 rounded">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests section */}
        <div ref={interestsRef}>
          <h3 className={`text-2xl font-bold mb-8 text-center text-sky-400 reveal ${interestsVisible ? 'visible' : ''}`}>Ce qui me passionne</h3>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${interestsVisible ? 'visible' : ''}`}>
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-sm text-slate-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
