import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [modal, setModal] = useState(null);

  const quickLinks = [
    { label: 'Accueil', href: 'home' },
    { label: 'Compétences', href: 'competence' },
    { label: 'Projets', href: 'projet' },
    { label: 'À Propos', href: 'about' },
    { label: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={18} />, url: 'https://github.com/Loulou733' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={18} />, url: 'https://www.linkedin.com/in/loevan-le-saint-764100388/' },
    { name: 'Email', icon: <HiOutlineMail size={18} />, url: 'mailto:loevanlspro@gmail.com' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d1117] border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent mb-4">
              Loevan.dev
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Étudiant en Bachelor Informatique, passionné par le développement et l&rsquo;apprentissage de nouvelles technologies.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible pour une alternance ou un stage
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Restons connectés</h4>
            <p className="text-slate-400 text-sm mb-4">
              Suivez-moi sur les réseaux sociaux ou envoyez-moi un message !
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:loevanlspro@gmail.com"
              className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
            >
              loevanlspro@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Loevan.dev - Tous droits réservés
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setModal('mentions')}
              className="text-slate-500 hover:text-sky-400 text-sm transition-colors duration-300"
            >
              Mentions légales
            </button>
            <button
              onClick={() => setModal('politique')}
              className="text-slate-500 hover:text-sky-400 text-sm transition-colors duration-300"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-[#0d1117] border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                {modal === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
              </h2>
              <button
                onClick={() => setModal(null)}
                className="text-slate-400 hover:text-white text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            {modal === 'mentions' && (
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <h3 className="text-white font-semibold">Éditeur du site</h3>
                <p>
                  Ce site est édité par Loevan Le Saint, étudiant en Bachelor Informatique.<br />
                  Email : loevanlspro@gmail.com
                </p>

                <h3 className="text-white font-semibold">Hébergement</h3>
                <p>
                  Les informations concernant l&rsquo;hébergeur seront ajoutées lors de la mise en ligne du site.
                </p>

                <h3 className="text-white font-semibold">Propriété intellectuelle</h3>
                <p>
                  L&rsquo;ensemble du contenu de ce site (textes, images, code source) est la propriété de Loevan Le Saint,
                  sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>

                <h3 className="text-white font-semibold">Responsabilité</h3>
                <p>
                  L&rsquo;éditeur ne saurait être tenu responsable des erreurs ou omissions présentes sur le site,
                  ni des dommages résultant de l&rsquo;utilisation des informations fournies.
                </p>
              </div>
            )}

            {modal === 'politique' && (
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <h3 className="text-white font-semibold">Collecte des données</h3>
                <p>
                  Ce site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :
                  nom, adresse email, sujet et message. Aucune donnée n&rsquo;est collectée automatiquement.
                </p>

                <h3 className="text-white font-semibold">Utilisation des données</h3>
                <p>
                  Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos messages.
                  Elles ne sont ni vendues, ni partagées avec des tiers.
                </p>

                <h3 className="text-white font-semibold">Service tiers</h3>
                <p>
                  Le formulaire de contact utilise le service EmailJS pour l&rsquo;envoi des messages.
                  Les données transitent par leurs serveurs conformément à leur politique de confidentialité.
                </p>

                <h3 className="text-white font-semibold">Cookies</h3>
                <p>
                  Ce site n&rsquo;utilise aucun cookie ni aucun traceur analytique.
                </p>

                <h3 className="text-white font-semibold">Vos droits</h3>
                <p>
                  Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès, de rectification et de suppression
                  de vos données. Pour exercer ces droits, contactez-moi à loevanlspro@gmail.com.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
