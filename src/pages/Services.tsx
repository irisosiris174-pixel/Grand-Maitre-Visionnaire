import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { siteConfig, services } from '../data/config';

export function Services() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — NOS SERVICES */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">GRAND MAÎTRE VISIONNAIRE</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Un accompagnement spirituel complet
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Parler au Grand Maître
              </a>
              <a
                href="#nos-services"
                className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Prendre connaissance de nos services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. NOS SERVICES SPIRITUELS */}
      <section id="nos-services" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">DOMAINES D'ACCOMPAGNEMENT</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Découvrez nos services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Explorez les différents accompagnements proposés par le Grand Maître Visionnaire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-background-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(193,18,31,0.1)] flex flex-col"
              >
                <div className="h-56 overflow-hidden bg-background relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg z-20 border border-white/10 shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6 relative z-20 flex-grow flex flex-col justify-between -mt-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je souhaite obtenir des informations concernant le service : ${service.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center bg-primary-900/30 hover:bg-primary-500 text-primary-400 hover:text-white font-semibold text-sm py-3 rounded-xl transition-all border border-primary-500/30 hover:border-primary-500"
                  >
                    Demander une consultation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary-900/10 border border-primary-500/20 p-6 rounded-xl text-center max-w-4xl mx-auto">
            <p className="text-gray-300 text-sm">
              <strong className="text-primary-400">Note de confiance :</strong> Chaque situation est différente. Les services proposés relèvent d'une démarche spirituelle et traditionnelle et ne remplacent pas un avis médical, psychologique, juridique ou financier lorsque celui-ci est nécessaire.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMMENT SE DÉROULE UNE DÉMARCHE ? */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">LE PREMIER CONTACT</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Un parcours simple, discret et humain</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Nous souhaitons rendre votre première démarche aussi simple que possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { num: '01', title: 'PRENDRE CONTACT', desc: 'Écrivez sur WhatsApp et indiquez simplement la raison de votre prise de contact.' },
              { num: '02', title: 'ÉCHANGER', desc: 'Un premier échange permet de mieux comprendre vos préoccupations.' },
              { num: '03', title: 'ÊTRE ORIENTÉ', desc: 'Selon votre demande, nous vous indiquons le service correspondant et les informations pratiques.' },
              { num: '04', title: 'COMMENCER', desc: 'Après avoir obtenu les informations nécessaires, vous décidez librement de poursuivre.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-900/20 border-2 border-primary-500 flex items-center justify-center text-primary-500 font-bold text-xl mb-4 relative z-10">
                  {step.num}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-0"></div>
                )}
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              <MessageCircle size={20} />
              Commencer une conversation
            </a>
          </div>
        </div>
      </section>

      {/* 5. NOS ENGAGEMENTS & CTA FINAL */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE MANIÈRE DE VOUS ACCUEILLIR</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Une relation fondée sur la confiance</h2>

              <div className="space-y-6">
                {[
                  { title: "Écoute", desc: "Votre situation mérite d'être entendue avec attention avant toute orientation." },
                  { title: "Respect", desc: "Nous accueillons chaque personne avec respect, quelle que soit son histoire." },
                  { title: "Discrétion", desc: "Les sujets personnels sont abordés avec retenue et confidentialité." },
                  { title: "Personnalisation", desc: "Chaque demande est considérée dans son contexte particulier." },
                  { title: "Tradition", desc: "Notre approche s'inscrit dans un univers spirituel et traditionnel." },
                  { title: "Liberté de décision", desc: "Vous restez libre de décider de poursuivre ou non une démarche." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-primary-500/20 p-1.5 rounded-full h-fit text-primary-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-900/10 border border-primary-500/20 p-10 rounded-3xl text-center shadow-xl">
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">VOTRE DÉMARCHE COMMENCE PAR UN ÉCHANGE</span>
              <h3 className="text-3xl font-bold text-white mb-6">Vous souhaitez parler de votre situation ?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Que vous sachiez exactement ce que vous recherchez ou que vous ayez simplement besoin de poser quelques questions, vous pouvez commencer par nous écrire. Un premier message suffit.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2"
                >
                  <MessageCircle size={20} /> Parler au Grand Maître sur WhatsApp
                </a>
                <Link
                  to="/produits"
                  className="w-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white py-4 rounded-xl font-bold transition-all"
                >
                  Voir nos produits traditionnels
                </Link>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Votre chemin mérite d'être éclairé avec sagesse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
