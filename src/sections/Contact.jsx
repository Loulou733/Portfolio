import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef();
  const [headerRef, headerVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const maxLengths = { name: 100, email: 150, subject: 200, message: 2000 };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length > maxLengths[name]) return;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const sanitized = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, v.trim()])
    );
    if (Object.values(sanitized).some(v => v === '')) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      })
      .catch(() => {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      });
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail className="text-sky-400" size={24} />,
      title: "Email",
      value: "loevanlspro@gmail.com",
      link: "mailto:loevanlspro@gmail.com"
    },
    {
      icon: <HiOutlineLocationMarker className="text-sky-400" size={24} />,
      title: "Localisation",
      value: "Paris, France",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub size={20} />, url: "https://github.com/Loulou733", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/in/loevan-le-saint-764100388/", color: "hover:text-blue-400" },
    { name: "Email", icon: <HiOutlineMail size={20} />, url: "mailto:loevanlspro@gmail.com", color: "hover:text-sky-400" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Contactez-Moi
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Intéressé par mon profil pour une alternance ou un stage ? Contactez-moi !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <div ref={leftRef} className={`space-y-6 reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Informations de contact</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{info.title}</p>
                      <p className="text-sm font-medium text-slate-300 group-hover:text-sky-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  Suivez-moi
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability status */}
              <div className="mt-8 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-sm text-green-400 font-semibold">
                      Recherche active : Alternance / Stage
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 ml-4">
                    Motivé pour apprendre et contribuer à vos projets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Envoyez-moi un message</h3>

              <div className="space-y-4">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Subject input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="De quoi voulez-vous parler ?"
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    formStatus === 'sending'
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-sky-500 hover:bg-sky-600 text-white hover:shadow-lg hover:shadow-sky-500/50'
                  }`}
                >
                  {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <p className="text-sm text-green-400 text-center font-medium">
                      ✓ Message envoyé avec succès !
                    </p>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <p className="text-sm text-red-400 text-center font-medium">
                      ✗ Erreur lors de l&rsquo;envoi. Réessayez plus tard.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
