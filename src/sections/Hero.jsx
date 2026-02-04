import { useState, useEffect } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "alternance ou d'un stage en développement";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [isVisible]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0d1117] to-[#020617]">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs md:text-sm text-sky-300 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Bachelor Informatique - 2e année</span>
            </div>

            {/* Title with typing */}
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent animate-gradient">
                À la recherche d&rsquo;une{' '}
              </span>
              <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="typing-cursor" />
            </h1>

            {/* Description */}
            <p className={`text-slate-300 text-lg mb-8 max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Étudiant passionné par l&rsquo;informatique, je réalise des projets personnels pour progresser et mettre en pratique mes connaissances techniques.
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={() => scrollToSection('projet')}
                className="group px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50 animate-glow"
              >
                Voir mes projets
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-lg border-2 border-sky-400 bg-sky-400/10 hover:bg-sky-400 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50"
              >
                Me contacter (alternance/stage)
              </button>
            </div>

            {/* Tech stack with stagger */}
            <div className={`space-y-3 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Stack principale</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 hover:border-sky-500/50 text-sm text-slate-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${1000 + index * 100}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar card */}
          <div className={`flex justify-center md:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-sky-500/30 overflow-hidden animate-float group-hover:border-sky-500/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-purple-500/10 to-transparent opacity-50" />
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    L
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-white mb-1">Loevan</p>
                    <p className="text-sm text-slate-400">Étudiant - Bachelor Informatique</p>
                  </div>
                </div>
                <div className="absolute top-10 left-10 w-2 h-2 bg-sky-400 rounded-full animate-ping" />
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-5 w-1 h-1 bg-sky-300 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
