import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'competence', 'projet', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'home', label: 'Accueil' },
    { href: 'competence', label: 'Compétences' },
    { href: 'projet', label: 'Projets' },
    { href: 'about', label: 'À Propos' },
    { href: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0d1117]/98 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/50'
        : 'bg-gradient-to-b from-[#0a0e1a]/95 to-[#0a0e1a]/80 backdrop-blur-xl border-b border-sky-500/20 shadow-lg shadow-black/20'
    }`}>
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo with better visibility */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-white hover:text-sky-400 transition-all duration-300 hover:scale-105 cursor-pointer drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]"
        >
          <span className="bg-gradient-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
            Loevan.dev
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`relative text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-sky-400 drop-shadow-[0_2px_4px_rgba(56,189,248,0.5)]'
                    : 'text-white/90 hover:text-white hover:drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0'
      }`}>
        <ul className="px-4 py-4 space-y-2 bg-[#0d1117]/95 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ animationDelay: `${index * 50}ms` }}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;