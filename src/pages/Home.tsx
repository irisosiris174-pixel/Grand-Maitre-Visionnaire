import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake, Eye, Sparkles, Send } from 'lucide-react';
import { siteConfig, services, products, testimonials, faqs } from '../data/config';
import { useState } from 'react';
import { SuccessModal } from '../components/SuccessModal';

export function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur réseau');

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — LA VISION ÉCLAIRE LE CHEMIN */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-left justify-center"
            >
              <span className="text-primary-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 block">
                GRAND MAÎTRE VISIONNAIRE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
                LA <span className="text-primary-500">VISION</span> ÉCLAIRE <br className="hidden sm:inline" /> LE CHEMIN.
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Le Grand Maître Visionnaire vous reçoit, vous écoute et vous accompagne 
                dans vos préoccupations personnelles, spirituelles et existentielles.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,18,31,0.5)] justify-center"
                >
                  <MessageCircle size={20} />
                  Parler sur WhatsApp
                </a>
                <Link
                  to="/services"
                  className="flex items-center gap-2 border border-white/20 hover:border-primary-500 hover:bg-primary-900/20 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 justify-center group"
                >
                  Découvrir nos services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center w-full h-full min-h-[450px] lg:min-h-[550px]"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <img
                  src="/images/Hero.png"
                  alt="Grand Maître Visionnaire Hero"
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. À PROPOS — UNE PRÉSENCE AU SERVICE DE L’ÉCOUTE */}
      <section className="py-24 bg-background-alt relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE UNIVERS</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">À propos du Grand Maître Visionnaire</h2>
            <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>Le Grand Maître Visionnaire propose un espace dédié à celles et ceux qui souhaitent prendre du recul, mieux comprendre une situation ou être accompagnés dans une démarche spirituelle.</p>
              <p>Notre approche repose avant tout sur <strong>l'écoute, la discrétion, le respect de la personne et la considération de chaque histoire dans sa singularité</strong>.</p>
              <p>Dans un monde où tout va rapidement, prendre le temps d'être écouté peut déjà constituer une étape importante.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300">À travers les consultations et les différentes formes d'accompagnement proposées, le Grand Maître Visionnaire s'inscrit dans une tradition où la parole, l'observation, la transmission et les pratiques spirituelles occupent une place importante.</p>
              <p className="text-gray-300">Chaque personne arrive avec son propre parcours, ses interrogations et ses attentes. C'est pourquoi nous privilégions une démarche personnalisée plutôt qu'une réponse standardisée.</p>
              <p className="text-gray-300">Qu'il s'agisse d'une question sentimentale, familiale, professionnelle ou spirituelle, la consultation commence par l'écoute et l'échange.</p>
              <p className="font-semibold text-white text-xl">Ici, votre parole a sa place.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group h-full min-h-[350px]"
            >
              <img 
                src="/images/A propos.jpg" 
                alt="À propos du Grand Maître Visionnaire" 
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 min-h-[350px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Eye, title: "ÉCOUTE", desc: "Un temps consacré à comprendre votre situation et vos préoccupations." },
              { icon: ShieldCheck, title: "CONFIDENTIALITÉ", desc: "Les échanges sont abordés avec discrétion et respect de votre vie personnelle." },
              { icon: Sparkles, title: "TRADITION", desc: "Une approche inspirée de la spiritualité et des savoirs traditionnels." },
              { icon: HeartHandshake, title: "PERSONNALISATION", desc: "Chaque accompagnement est adapté au contexte présenté lors de la consultation." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors text-center"
              >
                <div className="mx-auto bg-primary-900/20 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-primary-500">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/a-propos" className="inline-flex items-center gap-2 border border-white/20 hover:border-primary-500 hover:bg-primary-900/20 px-8 py-3 rounded-xl transition-colors font-medium">
              Découvrir notre approche
            </Link>
          </div>
        </div>
      </section>

      {/* 3. NOS SERVICES — UN ACCOMPAGNEMENT ADAPTÉ À VOS PRÉOCCUPATIONS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOS SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Des accompagnements spirituels pour différentes situations de vie</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Les préoccupations qui nous amènent à rechercher un accompagnement peuvent être nombreuses. 
              Le Grand Maître Visionnaire propose différents services spirituels et traditionnels destinés aux personnes qui souhaitent échanger, être orientées ou entreprendre une démarche personnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(193,18,31,0.1)] flex flex-col"
              >
                <div className="h-56 overflow-hidden bg-background relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-6 relative z-20 flex-grow flex flex-col justify-between -mt-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  </div>
                  <Link to="/services" className="text-primary-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all group/link">
                    En savoir plus <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary-900/5 border border-primary-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h4 className="text-2xl font-bold mb-4">Besoin d'en parler ?</h4>
            <p className="text-gray-300 mb-6">Chaque situation est différente. Les services proposés relèvent d'une démarche spirituelle et traditionnelle.</p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Parler de votre situation sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 4. NOS PRODUITS TRADITIONNELS */}
      <section className="py-24 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">ESPACE TRADITIONNEL</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos produits traditionnels</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Découvrez une sélection de produits proposés dans l'univers traditionnel et spirituel du Grand Maître Visionnaire. 
              Pour connaître les modalités d'utilisation, la disponibilité et les conditions de commande, contactez-nous sur WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors flex flex-col"
              >
                <div className="h-48 bg-black/40 overflow-hidden relative">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2 leading-tight">{product.name}</h3>
                    <p className="text-primary-400 font-semibold mb-3">{product.price}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  </div>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je souhaite obtenir des informations sur le produit : ${product.name}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-white/5 hover:bg-white/10 text-white text-center rounded-lg text-sm font-medium transition-colors border border-white/10"
                  >
                    Commander sur WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <Link to="/produits" className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white px-8 py-3 rounded-xl transition-colors font-medium">
              Voir tous les produits
            </Link>
          </div>
          
          <p className="text-center text-gray-500 text-xs max-w-4xl mx-auto">
            Les produits présentés appartiennent à une tradition spirituelle et culturelle. Les descriptions ne constituent pas des promesses de résultats ni des indications médicales. Pour toute question de santé, consultez un professionnel de santé qualifié.
          </p>
        </div>
      </section>

      {/* 5. POURQUOI NOUS CHOISIR */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE ENGAGEMENT</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Une approche fondée sur l'écoute et le respect</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Au-delà des pratiques et des traditions, nous accordons une importance particulière à la manière dont chaque personne est accueillie. Notre priorité est de créer un cadre dans lequel vous pouvez parler librement de vos préoccupations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { num: '01', title: 'Écoute et confidentialité', desc: 'Votre parole mérite d\'être entendue. Nous privilégions une relation basée sur l\'écoute, la discrétion et le respect de votre vie personnelle.' },
              { num: '02', title: 'Une approche personnalisée', desc: 'Aucune histoire ne ressemble parfaitement à une autre. Chaque consultation commence par la compréhension de votre situation.' },
              { num: '03', title: 'Respect des traditions', desc: 'Une spiritualité inscrite dans une histoire et une transmission. Notre approche s\'inspire des savoirs transmis au fil des générations.' },
              { num: '04', title: 'Un contact simple et direct', desc: 'WhatsApp vous permet de poser vos premières questions et de vous renseigner facilement sur les consultations et produits.' },
              { num: '05', title: 'Proximité humaine', desc: 'Derrière chaque consultation, il y a une personne. Nous privilégions un échange humain, loin des discours impersonnels.' },
              { num: '06', title: 'Discrétion absolue', desc: 'Parce que certaines questions restent personnelles, les sujets liés à votre vie sont abordés avec la plus grande discrétion.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-900/10 rounded-bl-full -mr-4 -mt-4"></div>
                <span className="text-primary-500 font-bold text-4xl opacity-50 block mb-4">{item.num}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-medium mb-6">Vous avez une question ? Commencez simplement par nous écrire.</p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-xl transition-colors font-medium"
            >
              Échanger avec le Grand Maître
            </a>
          </div>
        </div>
      </section>

      {/* 6. TÉMOIGNAGES */}
      <section className="py-24 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">EXPÉRIENCES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ils partagent leur expérience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Chaque personne vit son accompagnement d'une manière différente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.slice(0, 2).map((testi, i) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="text-primary-500 mb-4">
                  <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-gray-300 italic mb-6 text-lg">« {testi.text} »</p>
                <div>
                  <p className="font-bold text-white">— {testi.author}, {testi.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/temoignages" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              Voir d'autres expériences <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">QUESTIONS FRÉQUENTES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Vous souhaitez en savoir plus ?</h2>
            <p className="text-gray-400 text-lg">Avant de prendre contact, vous trouverez ici quelques réponses aux questions les plus fréquentes.</p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, idx) => (
              <details key={idx} className="group bg-background-card border border-white/5 rounded-xl p-6 open:bg-white/5 transition-all">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg marker:content-none">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-400 mt-4 leading-relaxed pl-2">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
              Consulter toutes les questions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PRISE DE CONTACT & 9. FORMULAIRE */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5" id="contact">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">PRENDRE CONTACT</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Parlons de votre situation</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Vous avez une question, souhaitez demander une consultation ou souhaitez simplement obtenir davantage d'informations ? Vous pouvez commencer par un échange simple et direct. <strong>Il n'est pas nécessaire de tout raconter dans votre premier message. Quelques mots suffisent pour commencer.</strong>
              </p>
              
              <div className="bg-primary-900/10 border border-primary-500/30 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#25D366]">
                  <MessageCircle /> WhatsApp - Contact Prioritaire
                </h3>
                <p className="text-gray-300 mb-6">Le moyen le plus simple pour nous joindre. Écrivez directement au Grand Maître Visionnaire.</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={20} />
                  Démarrer une conversation WhatsApp
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-xl mb-4 border-b border-white/10 pb-2">Autres moyens de contact</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Appel direct</p>
                    <p className="text-xl font-medium">{siteConfig.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-xl font-medium text-primary-400 hover:text-primary-300 transition-colors">{siteConfig.email}</a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Localisation</p>
                    <p className="text-xl font-medium">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-white/5 p-8 rounded-2xl shadow-xl h-fit">
              <h3 className="text-2xl font-bold mb-2">Envoyez-nous votre demande</h3>
              <p className="text-gray-400 mb-8">Vous préférez nous écrire depuis le site ? Remplissez ce formulaire.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Nom complet</label>
                  <input required type="text" placeholder="Votre nom et prénom" className="w-full bg-background-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input required type="email" placeholder="votre@email.com" className="w-full bg-background-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Téléphone / WhatsApp</label>
                    <input required type="tel" placeholder="Votre numéro" className="w-full bg-background-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Sujet</label>
                  <input required type="text" placeholder="Objet de votre demande" className="w-full bg-background-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Votre message</label>
                  <textarea required rows={4} placeholder="Décrivez brièvement votre demande..." className="w-full bg-background-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  En envoyant ce formulaire, vous acceptez que les informations transmises soient utilisées uniquement afin de répondre à votre demande.
                </p>

                <button 
                  type="submit" 
                  disabled={formStatus === 'loading'}
                  className="w-full bg-primary-700 hover:bg-primary-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    'Envoi de votre demande...'
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                {formStatus === 'error' && (
                  <div className="bg-red-900/30 border border-red-500/30 text-red-400 p-4 rounded-lg text-sm mt-4">
                    Nous n'avons pas pu envoyer votre demande. Veuillez réessayer ou nous contacter directement sur WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <SuccessModal
          isOpen={formStatus === 'success'}
          onClose={() => setFormStatus('idle')}
        />
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-20 bg-primary-900/20 border-y border-primary-500/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-primary-400 font-bold tracking-widest text-xs uppercase mb-4 block">GRAND MAÎTRE VISIONNAIRE</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Parfois, le premier pas consiste simplement à parler.</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Une question vous préoccupe ? Une situation mérite d'être éclaircie ? Vous souhaitez simplement obtenir davantage d'informations ? Le Grand Maître Visionnaire vous accueille avec écoute, respect et discrétion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              Écrire sur WhatsApp
            </a>
            <Link
              to="/services"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all w-full sm:w-auto justify-center"
            >
              Découvrir les services
            </Link>
          </div>
          <p className="text-primary-300 font-medium italic">Votre chemin mérite d'être éclairé avec sagesse.</p>
        </div>
      </section>
    </div>
  );
}
