import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';

export function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — UNE APPROCHE FONDÉE SUR LA VISION ET L'ÉCOUTE */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">GRAND MAÎTRE VISIONNAIRE</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Écouter. Comprendre. Orienter.
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Dans chaque parcours de vie, il existe des périodes de questionnement, de transition et d'incertitude. Le Grand Maître Visionnaire propose un espace où chacun peut prendre le temps de parler de sa situation.
            </p>
            <p className="text-lg font-medium text-white mb-10">
              Une présence humaine au service de l'écoute, de la spiritualité et de la transmission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Parler au Grand Maître
              </a>
              <Link
                to="/services"
                className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NOTRE HISTOIRE */}
      <section className="py-24 bg-background-alt relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">UNE DÉMARCHE DE TRANSMISSION</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Une spiritualité qui place l'humain au centre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <p>Le Grand Maître Visionnaire évolue dans un univers où la spiritualité, la tradition et l'écoute occupent une place essentielle.</p>
              <p>Son approche s'adresse aux personnes qui souhaitent prendre un temps de recul face à une situation personnelle, affective, familiale, professionnelle ou spirituelle.</p>
              <p>La consultation est avant tout un moment d'échange.</p>
              <p>Avant de chercher une réponse, il est essentiel de comprendre la question. Avant d'orienter, il faut écouter. Et avant toute démarche, il faut considérer la personne dans son histoire, son environnement et ses préoccupations.</p>
              <p>C'est cette vision qui guide notre manière d'accueillir chaque personne.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group h-full min-h-[350px]"
            >
              <img 
                src="/images/galery1.jpg" 
                alt="Une démarche de transmission" 
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 min-h-[350px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LA VISION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE PHILOSOPHIE</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Voir au-delà de la question pour mieux comprendre la situation</h2>
            <div className="text-gray-400 max-w-3xl mx-auto text-lg space-y-4">
              <p>La vision ne consiste pas simplement à chercher des réponses. Elle consiste aussi à prendre le temps d'observer, d'écouter et de comprendre ce qui se trouve derrière une préoccupation.</p>
              <p>Une question sentimentale peut être liée à une période de changement. Une difficulté professionnelle peut soulever des interrogations plus profondes. Une situation familiale peut nécessiter avant tout de retrouver un espace de dialogue.</p>
              <p>C'est pourquoi l'accompagnement proposé repose sur une approche attentive à la personne et à son contexte.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'ÉCOUTER', subtitle: 'Donner une véritable place à votre parole.', desc: 'Chaque consultation commence par l\'écoute. Vos préoccupations sont accueillies avec attention afin de mieux comprendre votre situation.' },
              { num: '02', title: 'COMPRENDRE', subtitle: 'Prendre du recul avant d\'agir.', desc: 'Comprendre une situation demande parfois de l\'observer sous plusieurs angles. L\'échange permet de mettre des mots sur les questions qui vous préoccupent.' },
              { num: '03', title: 'ORIENTER', subtitle: 'Vous accompagner dans votre réflexion.', desc: 'L\'objectif est de vous offrir un espace d\'échange et une orientation adaptée à la démarche que vous souhaitez entreprendre.' }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background-card p-8 rounded-2xl border border-white/5 relative hover:border-primary-500/30 transition-all"
              >
                <div className="text-primary-500 font-bold text-5xl opacity-20 absolute top-6 right-6">{principle.num}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{principle.title}</h3>
                <p className="text-primary-400 font-medium mb-4 text-sm">{principle.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRADITION ET TRANSMISSION */}
      <section className="py-24 bg-primary-900/5 relative border-y border-primary-500/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">TRADITION & TRANSMISSION</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Une spiritualité profondément liée à la transmission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 h-full min-h-[360px]"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group row-span-2">
                <img 
                  src="/images/galery1.jpg" 
                  alt="Tradition et transmission 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[360px]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group h-44">
                <img 
                  src="/images/galery2.jpg" 
                  alt="Tradition et transmission 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group h-44">
                <img 
                  src="/images/galery3.jpg" 
                  alt="Tradition et transmission 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <p>Les traditions spirituelles africaines reposent sur une relation particulière entre l'être humain, son histoire, sa communauté, son environnement et les générations qui l'ont précédé.</p>
              <p>Elles accordent une place importante à la transmission des connaissances, à la parole, aux symboles, aux pratiques traditionnelles et à la recherche d'équilibre.</p>
              <p>Le Grand Maître Visionnaire s'inscrit dans cet univers de transmission et propose un accompagnement destiné aux personnes qui souhaitent découvrir ou approfondir cette dimension traditionnelle de la spiritualité.</p>
              <p className="font-medium text-white pt-2">Notre démarche cherche à préserver une relation simple avec ces traditions : respectueuse, humaine et accessible.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. NOTRE MANIÈRE D'ACCUEILLIR */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">L'EXPÉRIENCE HUMAINE</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Parce qu'une consultation commence avant toute réponse</h2>
            <div className="text-gray-400 max-w-3xl mx-auto text-lg space-y-4">
              <p>Lorsque vous prenez contact, vous n'êtes pas simplement un nom ou une demande. Vous êtes une personne avec une histoire, des expériences, des préoccupations et parfois des questions difficiles à exprimer.</p>
              <p>Nous accordons donc une importance particulière à la qualité du premier échange. Vous pouvez prendre le temps d'expliquer votre situation avec vos propres mots. Il n'est pas nécessaire de tout raconter immédiatement. Quelques mots peuvent suffire pour commencer.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ÉCOUTE", desc: "Prendre le temps de comprendre votre demande." },
              { title: "RESPECT", desc: "Accueillir chaque personne sans jugement." },
              { title: "DISCRÉTION", desc: "Traiter les échanges personnels avec confidentialité et retenue." },
              { title: "PROXIMITÉ", desc: "Maintenir un contact simple et humain." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card p-6 rounded-2xl border border-white/5 text-center"
              >
                <h4 className="font-bold text-lg mb-2 text-primary-400">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. À QUI S'ADRESSE NOTRE ACCOMPAGNEMENT ? */}
      <section className="py-24 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">POUR VOUS</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Un espace pour celles et ceux qui cherchent à comprendre</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">L'accompagnement du Grand Maître Visionnaire peut s'adresser aux personnes qui souhaitent échanger autour de différentes préoccupations de leur vie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Préoccupations personnelles", desc: "Lorsque vous traversez une période de questionnement et souhaitez prendre du recul." },
              { title: "Vie affective", desc: "Lorsque votre situation sentimentale soulève des interrogations ou des préoccupations." },
              { title: "Vie familiale", desc: "Lorsque certaines situations familiales nécessitent un espace d'écoute et de réflexion." },
              { title: "Vie professionnelle", desc: "Lorsque vous traversez une période de changement ou de questionnement dans votre parcours professionnel." },
              { title: "Spiritualité", desc: "Lorsque vous souhaitez approfondir votre relation à la tradition, à la spiritualité ou à certaines pratiques." },
              { title: "Transition et changement", desc: "Lorsque vous entrez dans une nouvelle période de votre vie et souhaitez être accompagné." }
            ].map((item, idx) => (
              <div key={idx} className="bg-background border border-white/5 p-6 rounded-xl hover:border-primary-500/20 transition-colors">
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NOS VALEURS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">CE QUI NOUS GUIDE</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Des valeurs simples, une relation authentique</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Respect', desc: 'Chaque personne possède son histoire, ses convictions et son propre chemin. Nous accueillons cette singularité avec respect.' },
              { num: '02', title: 'Confidentialité', desc: 'Les questions personnelles nécessitent un cadre discret. La confidentialité constitue un principe essentiel de la relation.' },
              { num: '03', title: 'Écoute', desc: 'Une bonne compréhension commence par une écoute attentive. Nous privilégions l\'échange avant toute orientation.' },
              { num: '04', title: 'Transmission', desc: 'La connaissance traditionnelle repose sur la transmission. Nous accordons une importance particulière au respect des savoirs hérités.' },
              { num: '05', title: 'Humanité', desc: 'Derrière chaque demande se trouve une personne. Notre approche cherche à conserver une relation chaleureuse et humaine.' },
              { num: '06', title: 'Responsabilité', desc: 'Nous considérons l\'accompagnement spirituel comme une démarche qui doit être menée avec sérieux, mesure et respect.' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-primary-500 font-bold text-xl">{value.num}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRÉSENCE & ENGAGEMENT */}
      <section className="py-24 bg-background-alt relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">BOHICON • BÉNIN</span>
              <h2 className="text-3xl font-bold mb-6">Une présence ancrée dans son environnement</h2>
              <div className="space-y-4 text-gray-300 mb-8">
                <p>Installé à <strong>Bohicon, au Bénin</strong>, le Grand Maître Visionnaire accueille les personnes qui souhaitent prendre contact pour une consultation, un accompagnement ou obtenir des informations sur les services et produits proposés.</p>
                <p>La relation commence simplement : un message, une question, un premier échange.</p>
                <p>Selon les possibilités proposées, certaines démarches peuvent également être organisées à distance. Pour connaître les modalités actuelles, contactez directement le Grand Maître Visionnaire.</p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                <MessageCircle size={18} /> Nous contacter sur WhatsApp
              </a>
            </div>

            <div className="bg-primary-900/10 border border-primary-500/20 p-8 rounded-2xl">
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE ENGAGEMENT</span>
              <h2 className="text-2xl font-bold mb-6">Une approche loin des discours excessifs</h2>
              <div className="space-y-4 text-gray-300 mb-6 text-sm leading-relaxed">
                <p>La spiritualité est un domaine profondément personnel. Nous ne cherchons pas à présenter des réponses universelles à des situations qui sont, par nature, différentes d'une personne à l'autre.</p>
                <p>Notre approche privilégie la conversation, l'écoute et la compréhension de chaque situation.</p>
                <p>Nous encourageons également chacun à prendre ses décisions avec discernement et à faire appel, lorsque cela est nécessaire, aux professionnels qualifiés dans les domaines médicaux, psychologiques, juridiques ou financiers.</p>
              </div>
              <p className="font-bold text-lg text-primary-400 italic">
                « Accompagner ne signifie pas décider à la place de l'autre. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MOT DU GRAND MAÎTRE */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Sparkles className="w-12 h-12 text-primary-500" />
          </div>
          <blockquote className="text-2xl md:text-4xl font-bold text-white mb-10 leading-tight">
            « Chaque personne possède un chemin unique. Certaines étapes sont simples, d'autres demandent davantage de réflexion. Mon rôle est d'écouter, de partager une vision et d'accompagner chacun avec respect et discrétion sur le chemin qu'il choisit de parcourir. »
          </blockquote>
          <div className="uppercase tracking-widest font-bold text-primary-500 mb-2">Grand Maître Visionnaire</div>
          <div className="text-gray-400 text-sm">Sagesse • Vision • Transformation</div>
        </div>
      </section>
    </div>
  );
}
