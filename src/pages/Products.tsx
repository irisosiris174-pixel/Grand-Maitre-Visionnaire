import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Briefcase, Smile, Heart, Sparkles } from 'lucide-react';
import { siteConfig, products } from '../data/config';

export function Products() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO — NOS PRODUITS TRADITIONNELS */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">ESPACE TRADITIONNEL</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Des produits inspirés de la tradition et de la spiritualité
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Commander sur WhatsApp
              </a>
              <a
                href="#nos-produits"
                className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Découvrir les produits
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. NOTRE SÉLECTION */}
      <section className="py-24 bg-background-alt relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">NOTRE SÉLECTION</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Un catalogue pensé pour vous accompagner</h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4 mb-8">
                <p>Les produits occupent une place particulière dans certaines pratiques traditionnelles et spirituelles.</p>
                <p>Notre catalogue rassemble différentes catégories de produits proposés dans l'univers du Grand Maître Visionnaire : produits de purification, objets traditionnels, produits associés à la vie affective, produits liés à la prospérité ainsi que différentes préparations traditionnelles.</p>
              </div>

              <div className="bg-primary-900/10 border border-primary-500/20 p-6 rounded-2xl">
                <p className="text-white font-medium">Une question sur un produit ? Vous pouvez nous écrire directement sur WhatsApp avant de commander.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group h-full min-h-[350px]"
            >
              <img
                src="/images/Produits/Avoir l'envie sexuel 25 000 FCFA.jpg"
                alt="Produit traditionnel - Notre sélection"
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 min-h-[350px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. NOS CATÉGORIES */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">EXPLORER</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trouvez ce qui correspond à votre recherche</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Protection & Tradition", desc: "Talismans, bagues et objets traditionnels proposés dans notre sélection." },
              { icon: Sparkles, title: "Purification", desc: "Encens et savons proposés dans l'univers traditionnel de la purification." },
              { icon: Heart, title: "Amour & Harmonie", desc: "Une sélection de produits associés aux préoccupations affectives et relationnelles." },
              { icon: Briefcase, title: "Prospérité & Réussite", desc: "Des produits traditionnels associés symboliquement à la réussite et à la prospérité." },
              { icon: Smile, title: "Bien-être & Vie intime", desc: "Une sélection destinée aux personnes recherchant des produits traditionnels autour de préoccupations intimes." }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card p-6 rounded-2xl border border-white/5 flex gap-4"
              >
                <div className="text-primary-500 shrink-0">
                  <cat.icon size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <a href="#nos-produits" className="text-primary-500 text-sm font-semibold hover:text-primary-400 transition-colors">Voir les produits</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CATALOGUE DES PRODUITS */}
      <section id="nos-produits" className="py-24 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">LA COLLECTION</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos produits traditionnels</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Découvrez les produits actuellement proposés. Pour connaître la disponibilité d'un produit, ses modalités d'utilisation, les conditions de commande et les possibilités de livraison, contactez-nous directement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors flex flex-col group hover:shadow-[0_10px_30px_rgba(193,18,31,0.05)]"
              >
                <div className="h-64 bg-black/40 overflow-hidden relative">
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent pt-12">
                    <span className="bg-primary-900/80 backdrop-blur border border-primary-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
                      {product.price}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-white leading-tight">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je souhaite obtenir des informations concernant le produit : ${product.name} (${product.price})`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-sm font-bold transition-colors"
                  >
                    <MessageCircle size={16} />
                    Commander sur WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMENT COMMANDER ? */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">COMMANDE SIMPLE</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Votre commande commence par un message</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Nous avons choisi de privilégier une commande directe sur WhatsApp afin de maintenir un échange simple et personnalisé.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { num: '01', title: 'Choisissez', desc: 'Parcourez notre catalogue et sélectionnez le produit qui vous intéresse.' },
              { num: '02', title: 'Cliquez', desc: 'Le bouton « Commander sur WhatsApp » ouvre directement une conversation.' },
              { num: '03', title: 'Confirmez', desc: 'Indiquez le produit souhaité et échangez concernant sa disponibilité.' },
              { num: '04', title: 'Recevez', desc: 'Nous vous communiquons les informations nécessaires (paiement, livraison).' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-card border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-900/20 text-primary-500 flex items-center justify-center font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AVERTISSEMENT IMPORTANT */}
      <section className="py-20 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Une démarche traditionnelle, avec discernement</h3>
            <div className="text-gray-400 text-sm space-y-4 leading-relaxed">
              <p>Les produits présentés sur cette page appartiennent à un catalogue de produits traditionnels et spirituels. Certaines appellations peuvent faire référence à des préoccupations liées à la santé, à la sexualité, à la fertilité ou à la situation financière.</p>
              <p>Ces produits ne doivent pas être présentés comme des traitements médicaux, des médicaments ou des garanties de résultat. Pour toute question de santé, nous vous recommandons de consulter un professionnel qualifié.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-primary-900/10 border border-primary-500/20 p-10 md:p-16 rounded-3xl text-center shadow-xl">
            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-3 block">GRAND MAÎTRE VISIONNAIRE</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Un produit vous intéresse ?</h3>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Ne restez pas dans le doute. Écrivez-nous directement sur WhatsApp pour vérifier la disponibilité d'un produit, demander des informations ou connaître les modalités de commande.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Bonjour Grand Maître Visionnaire, je souhaite obtenir des informations sur un produit traditionnel.')}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Commander sur WhatsApp
              </a>
              <Link
                to="/services"
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white py-4 px-8 rounded-xl font-bold transition-all flex items-center justify-center"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
