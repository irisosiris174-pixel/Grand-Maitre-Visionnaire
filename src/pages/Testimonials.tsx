import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { siteConfig, testimonials } from '../data/config';

export function Testimonials() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — EXPÉRIENCES PARTAGÉES */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">TÉMOIGNAGES</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Ils partagent leur expérience
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chaque personne arrive avec sa propre histoire et vit son accompagnement d'une manière différente. 
              Certaines d'entre elles ont accepté de partager quelques mots sur ce qu'elles ont retenu de leur consultation ou de leur démarche.
            </p>
            <p className="text-gray-400 mb-10 text-sm font-medium tracking-wide">
              ÉCOUTE • DISCRÉTION • ACCOMPAGNEMENT • RESPECT
            </p>

            <div className="flex justify-center">
              <a
                href="#temoignages"
                className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Lire les témoignages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NOTRE PRINCIPE DE PUBLICATION */}
      <section className="py-24 bg-background-alt relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">ENGAGEMENT & TRANSPARENCE</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Un espace d'expression respectueux</h2>
            <div className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto space-y-4 mb-10">
              <p>Dans le domaine de la spiritualité et de l'accompagnement traditionnel, <strong>la discrétion est une valeur essentielle.</strong></p>
              <p>Nous veillons donc à ce que chaque témoignage publié :</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              {[
                { title: 'Autorisation préalable', desc: 'Ne soit partagé qu\'avec l\'accord de la personne concernée.' },
                { title: 'Protection de la vie privée', desc: 'Ne mentionne aucune information personnelle ou situation détaillée permettant d\'identifier la personne.' },
                { title: 'Authenticité', desc: 'Reflète de manière sincère le ressenti de la personne à l\'issue de sa consultation.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-background-card border border-white/5 p-6 rounded-xl">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LES RETOURS D'EXPÉRIENCE */}
      <section id="temoignages" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">VOIX DE NOS CLIENTS</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Quelques mots sur leur démarche</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testi, i) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background-card p-10 rounded-2xl border border-white/5 relative flex flex-col h-full"
              >
                <div className="absolute top-6 left-6 text-primary-500/20">
                  <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="relative z-10 flex-grow pt-8">
                  <p className="text-gray-200 text-lg md:text-xl italic mb-8 leading-relaxed">
                    « {testi.text} »
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6 mt-4 flex items-center justify-between relative z-10">
                  <div>
                    <p className="font-bold text-white text-lg">— {testi.author}</p>
                    <p className="text-primary-400 text-sm">{testi.location}</p>
                  </div>
                  {testi.service && (
                    <div className="bg-primary-900/20 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full border border-primary-500/20">
                      {testi.service}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 max-w-3xl mx-auto italic">
              Note : Ces témoignages sont partagés à titre indicatif afin d'illustrer la manière dont se déroule l'accueil et l'échange. Chaque parcours reste unique et individuel.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CE QU'IL FAUT RETENIR */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ce qu'il faut retenir de ces échanges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background border border-white/5 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-white mb-4 text-primary-400">L'importance de l'écoute</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Une grande partie des personnes qui nous contactent soulignent l'importance du premier échange. Avoir la possibilité de poser des mots sur une situation constitue très souvent une première étape essentielle.
              </p>
            </div>
            <div className="bg-background border border-white/5 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-white mb-4 text-primary-400">Le non-jugement</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Dans une démarche d'accompagnement spirituel, l'accueil bienveillant est primordial. Il s'agit de comprendre votre situation, et non de l'évaluer ou de la juger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 bg-primary-900/10 relative overflow-hidden border-t border-primary-500/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Et vous, quelle est votre situation ?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Si vous traversez une période de questionnement ou si vous souhaitez aborder une situation particulière, vous pouvez nous contacter. Le premier contact permet de faire le point, sans aucune obligation de poursuivre.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Écrire au Grand Maître
            </a>
            <Link
              to="/services"
              className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white py-4 px-8 rounded-xl font-bold transition-all flex items-center justify-center"
            >
              Découvrir nos services
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-primary-300 font-medium italic">
            Une démarche discrète, humaine et respectueuse.
          </p>
        </div>
      </section>
    </div>
  );
}
