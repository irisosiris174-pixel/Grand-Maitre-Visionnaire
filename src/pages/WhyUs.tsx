import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2, Heart, Shield, Briefcase, Users, Sparkles, Navigation } from 'lucide-react';
import { siteConfig } from '../data/config';

export function WhyUs() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Pourquoi choisir le Grand Maître Visionnaire ?
            </h1>
            <p className="text-2xl font-medium text-primary-400 mb-8">
              Vous avez une situation qui vous préoccupe. Commençons par en parler.
            </p>
            <div className="text-lg text-gray-300 mb-10 space-y-4 max-w-3xl mx-auto leading-relaxed">
              <p>Certaines périodes de la vie soulèvent des questions auxquelles il n’est pas toujours facile de répondre seul.</p>
              <p>Préoccupation affective, familiale, professionnelle, sentiment de blocage, besoin de protection ou simple recherche d’orientation : <strong>vous pouvez commencer par nous expliquer votre situation.</strong></p>
              <p>Le Grand Maître Visionnaire vous accueille dans une démarche fondée sur <strong>l’écoute, la discrétion et l’accompagnement personnalisé</strong>, inspirée de la tradition spirituelle.</p>
            </div>

            <div className="bg-primary-900/20 border border-primary-500/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <p className="text-xl font-bold mb-4">Votre premier échange est simple.</p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all w-full md:w-auto"
              >
                <MessageCircle size={20} /> Parlez-nous de votre situation sur WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. POURQUOI NOUS FAIRE CONFIANCE ? */}
      <section className="py-24 bg-background-alt relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pourquoi nous faire confiance ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Une approche humaine avant tout", subtitle: "Vous êtes écouté", desc: "Votre situation mérite d’être entendue avant toute orientation. Nous prenons le temps de comprendre votre demande, vos préoccupations et ce que vous recherchez.", highlight: "Pas de jugement. Pas de précipitation." },
              { title: "Une démarche personnalisée", subtitle: "Parce que votre situation vous appartient", desc: "Nous ne proposons pas une réponse identique à chaque personne. L’accompagnement est défini en fonction de votre demande et des échanges que nous avons avec vous.", highlight: "Votre histoire est le point de départ." },
              { title: "La discrétion au cœur des échanges", subtitle: "Vous pouvez parler en toute simplicité", desc: "Certaines questions sont personnelles et parfois difficiles à partager. Nous accordons une importance particulière à la confidentialité et à la discrétion dans nos échanges.", highlight: "Vous choisissez ce que vous souhaitez partager." },
              { title: "Une tradition abordée avec respect", subtitle: "Sagesse et transmission", desc: "Notre approche s’inspire de pratiques et de savoirs issus de la tradition spirituelle. Nous privilégions une démarche sobre, accessible et respectueuse.", highlight: "La tradition au service d’une démarche personnelle." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card p-8 rounded-2xl border border-white/5 hover:border-primary-500/20 transition-all flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <h4 className="text-primary-400 font-semibold mb-4 uppercase tracking-wider text-sm">{item.subtitle}</h4>
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="bg-primary-900/10 border-l-4 border-primary-500 p-4 rounded-r text-primary-200 font-medium">
                  {item.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CE QUE VOUS POUVEZ ATTENDRE */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ce que vous pouvez attendre de votre premier échange</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: '01', title: 'Être écouté', desc: 'Vous nous expliquez simplement ce qui vous amène.' },
              { num: '02', title: 'Être compris', desc: 'Nous échangeons avec vous afin de mieux cerner votre situation.' },
              { num: '03', title: 'Être orienté', desc: 'Nous vous présentons les possibilités d’accompagnement.' },
              { num: '04', title: 'Décider librement', desc: 'Vous prenez le temps de décider si vous souhaitez poursuivre.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card border border-white/5 p-6 rounded-2xl text-center"
              >
                <div className="text-primary-500 font-bold text-3xl mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-primary-900/10 py-4 px-6 rounded-lg border border-primary-500/20 max-w-md mx-auto">
            <strong className="text-primary-400">Aucune obligation de continuer après le premier échange.</strong>
          </div>
        </div>
      </section>

      {/* 4. POUR QUELLES SITUATIONS NOUS CONTACTER ? */}
      <section className="py-24 bg-background-alt relative border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pour quelles situations nous contacter ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Vous pouvez nous écrire notamment si vous recherchez un accompagnement autour de :</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, color: 'text-red-500', title: 'Vie affective', desc: 'Questions relationnelles, harmonie amoureuse, difficultés sentimentales.' },
              { icon: Shield, color: 'text-blue-500', title: 'Protection & purification', desc: 'Demandes liées aux pratiques traditionnelles de protection ou de purification.' },
              { icon: Briefcase, color: 'text-amber-500', title: 'Vie professionnelle', desc: 'Questions concernant un projet, une période de changement ou un sentiment de blocage.' },
              { icon: Users, color: 'text-green-500', title: 'Vie familiale', desc: 'Préoccupations relationnelles et recherche d’harmonie au sein de la famille.' },
              { icon: Sparkles, color: 'text-purple-500', title: 'Questions spirituelles', desc: 'Recherche d’orientation, consultation spirituelle ou voyance traditionnelle.' },
              { icon: CheckCircle2, color: 'text-teal-500', title: 'Démarche personnelle', desc: 'Besoin de prendre du recul, d’échanger et d’explorer une situation particulière.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-white/5 flex gap-4"
              >
                <div className={`mt-1 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UNE DÉMARCHE PENSÉE POUR VOUS RASSURER */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Une démarche pensée pour vous rassurer</h2>
          <p className="text-xl text-gray-300 mb-8">Vous n’avez pas besoin de savoir exactement quoi demander.</p>
          
          <div className="bg-primary-900/10 border border-primary-500/20 p-8 rounded-2xl mb-12 relative">
            <p className="text-gray-400 mb-4">Vous pouvez simplement commencer par :</p>
            <blockquote className="text-2xl font-bold text-white italic">
              « Bonjour, j’aimerais vous parler d’une situation qui me préoccupe. »
            </blockquote>
            <p className="text-gray-400 mt-4">Nous vous répondrons et vous pourrez ensuite expliquer votre demande à votre rythme.</p>
          </div>

          <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">WhatsApp est le moyen le plus direct</h3>
            <p className="text-3xl font-bold text-[#25D366] mb-6">{siteConfig.whatsappDisplay}</p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              <MessageCircle size={20} /> Parler au Grand Maître Visionnaire
            </a>
          </div>
        </div>
      </section>

      {/* 6. POURQUOI COMMENCER PAR WHATSAPP ? */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Pourquoi commencer par WhatsApp ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: 'Un échange direct', desc: 'Pas besoin de chercher la bonne rubrique ou de remplir un long formulaire.' },
              { icon: Shield, title: 'Un échange discret', desc: 'Vous pouvez exposer votre demande progressivement et poser vos questions avant de prendre une décision.' },
              { icon: Sparkles, title: 'Une prise de contact simple', desc: 'Quelques mots suffisent pour commencer.' },
              { icon: Navigation, title: 'Depuis le Bénin ou l’étranger', desc: 'Selon votre situation, certaines consultations peuvent être organisées à distance.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card p-6 rounded-2xl border border-white/5 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-900/20 text-primary-500 flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UNE EXPÉRIENCE BASÉE SUR TROIS PRINCIPES */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-12">Une expérience basée sur trois principes</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
            <div className="bg-primary-900/10 p-6 rounded-xl flex-1 w-full border border-primary-500/20">
              <h3 className="text-xl font-bold text-primary-500 mb-2">ÉCOUTER</h3>
              <p className="text-gray-300 text-sm">Comprendre votre demande avant de vous orienter.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary-500/50 w-8 h-8 shrink-0" />
            <div className="bg-primary-900/10 p-6 rounded-xl flex-1 w-full border border-primary-500/20">
              <h3 className="text-xl font-bold text-primary-500 mb-2">COMPRENDRE</h3>
              <p className="text-gray-300 text-sm">Prendre en considération votre situation dans son ensemble.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary-500/50 w-8 h-8 shrink-0" />
            <div className="bg-primary-900/10 p-6 rounded-xl flex-1 w-full border border-primary-500/20">
              <h3 className="text-xl font-bold text-primary-500 mb-2">ORIENTER</h3>
              <p className="text-gray-300 text-sm">Vous présenter une démarche adaptée à votre demande.</p>
            </div>
          </div>
          
          <p className="text-xl font-medium tracking-widest text-primary-400 uppercase">Sagesse • Vision • Transformation</p>
        </div>
      </section>

      {/* 8. CE QUE NOS CLIENTS APPRÉCIENT */}
      <section className="py-24 bg-background-alt relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Ce que nos clients apprécient</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { text: "Je suis venue avec beaucoup de questions. J’ai surtout apprécié le temps consacré à mon écoute.", author: "Marie, Cotonou" },
              { text: "Je ne me suis pas sentie jugée. Les échanges étaient simples et respectueux.", author: "S. K., Porto-Novo" },
              { text: "Je suis repartie avec une autre manière de regarder ma situation.", author: "Aïcha, Abomey-Calavi" },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-white/5 relative"
              >
                <svg className="w-8 h-8 text-primary-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-gray-300 italic mb-6">« {t.text} »</p>
                <p className="font-bold text-white">— {t.author}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mb-8 italic">Les témoignages publiés doivent correspondre à des retours réels et être utilisés avec l’autorisation des personnes concernées.</p>
          <Link to="/temoignages" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-3 rounded-xl font-semibold transition-all">
            Voir tous les témoignages
          </Link>
        </div>
      </section>

      {/* 9. UNE QUESTION AVANT DE COMMENCER ? */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Une question avant de commencer ?</h2>
          <p className="text-gray-400 mb-12">Voici les réponses aux questions que l’on nous pose le plus souvent.</p>

          <div className="text-left space-y-4 mb-12">
            {[
              { q: "Combien coûte une consultation ?", a: "Les tarifs dépendent du type d’accompagnement demandé. Nous vous communiquons les informations correspondantes lors de votre prise de contact." },
              { q: "Puis-je poser des questions avant de prendre rendez-vous ?", a: "Oui. Le premier échange permet justement de présenter votre demande et d’obtenir les informations nécessaires avant de décider." },
              { q: "Puis-je consulter à distance ?", a: "Certaines consultations peuvent être organisées à distance. Les modalités sont précisées lors de la prise de contact." },
              { q: "Dois-je raconter tous les détails de ma situation ?", a: "Non. Vous partagez uniquement les informations que vous souhaitez communiquer." },
              { q: "Les résultats sont-ils garantis ?", a: "Non. Chaque situation est différente et aucun résultat sentimental, financier, professionnel ou autre ne peut être garanti." },
              { q: "Puis-je changer d’avis après le premier échange ?", a: "Oui. Vous restez libre de décider si vous souhaitez poursuivre l’accompagnement." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-background-card border border-white/5 rounded-xl p-6 open:bg-white/5 transition-all">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg marker:content-none text-white">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-primary-500">
                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-400 mt-4 leading-relaxed pl-2">{faq.a}</div>
              </details>
            ))}
          </div>

          <Link to="/faq" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors">
            Consulter la FAQ complète <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
