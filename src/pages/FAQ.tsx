import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Clock, Navigation, ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig, faqs } from '../data/config';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — VOS QUESTIONS */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">INFORMATIONS PRATIQUES</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Avant de prendre contact, vous trouverez sur cette page les réponses aux questions qui nous sont le plus souvent posées concernant les consultations, les modalités et les produits.
            </p>

            <div className="flex justify-center">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Bonjour, j\'ai une question qui ne figure pas dans votre FAQ.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <MessageCircle size={20} /> Poser une autre question sur WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATÉGORIES D'INFORMATIONS */}
      <section className="py-12 bg-background-alt relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: MessageCircle, label: 'Les consultations' },
              { icon: Clock, label: 'Le déroulement' },
              { icon: Navigation, label: 'À distance ou présentiel' },
              { icon: ShieldCheck, label: 'Confidentialité' }
            ].map((cat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-4">
                <cat.icon className="w-8 h-8 text-primary-500 mb-2" />
                <span className="text-sm font-medium text-gray-300">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LISTE DES QUESTIONS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-background-card border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary-500/50 shadow-[0_0_20px_rgba(193,18,31,0.1)]' : 'border-white/5 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 ${openIndex === idx ? 'text-white' : 'text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'text-primary-500 rotate-180' : 'text-gray-500'}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed pt-2 border-t border-white/5">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-primary-900/10 border border-primary-500/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="text-primary-500" /> Une précision importante
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              L'accompagnement spirituel et les produits traditionnels proposés ne remplacent en aucun cas l'avis ou l'intervention d'un professionnel qualifié (médecin, psychologue, conseiller financier ou juridique). Le Grand Maître Visionnaire propose une démarche d'écoute et d'orientation basée sur la tradition. Chaque personne conserve son libre arbitre et la responsabilité de ses décisions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VOUS N'AVEZ PAS TROUVÉ VOTRE RÉPONSE ? */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Chaque situation est particulière et il est normal que vous ayez des questions spécifiques. N'hésitez pas à nous contacter directement.
          </p>
          
          <div className="bg-background border border-white/5 p-8 rounded-2xl inline-block max-w-2xl w-full mx-auto text-left shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Prenez contact sur WhatsApp</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  C'est le moyen le plus simple et le plus rapide d'obtenir une réponse adaptée à votre situation personnelle.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-[#20bd5a] transition-colors"
                >
                  Ouvrir WhatsApp ({siteConfig.whatsappDisplay}) <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
