import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Shield, Info, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data/config';

export function LegalNotice() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 pb-20 bg-background text-gray-200">
      {/* Hero Header */}
      <section className="relative py-16 bg-background-alt border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-bold tracking-widest text-xs uppercase mb-3 block">
              INFORMATIONS LÉGALES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Informations réglementaires et conditions générales relatives au site du Grand Maître Visionnaire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>

          <div className="space-y-12 bg-background-card/40 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-sm">
            {/* Section 1: Éditeur du site */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Building2 className="text-primary-500" size={20} />
                1. Éditeur du Site
              </h2>
              <div className="bg-background-alt p-6 rounded-2xl border border-white/5 space-y-3 text-sm text-gray-300">
                <p><strong className="text-white">Nom du site / Marque :</strong> {siteConfig.name}</p>
                <p><strong className="text-white">Activité :</strong> Conseils spirituels, consultations traditionnelles & vente de produits spirituels et traditionnels.</p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Localisation :</strong>
                  <MapPin size={16} className="text-primary-500" /> {siteConfig.address}
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Téléphone :</strong>
                  <Phone size={16} className="text-primary-500" /> +229 {siteConfig.phone}
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">WhatsApp :</strong>
                  <span className="text-[#25D366] font-semibold">{siteConfig.whatsappDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">E-mail :</strong>
                  <Mail size={16} className="text-primary-500" /> {siteConfig.email}
                </p>
              </div>
            </div>

            {/* Section 2: Nature des prestations */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="text-primary-500" size={20} />
                2. Nature des Prestations & Avertissement
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                  Les consultations, conseils et accompagnements proposés par le Grand Maître Visionnaire relèvent d'une démarche spirituelle, culturelle et traditionnelle.
                </p>
                <p className="p-4 bg-primary-900/10 border border-primary-500/20 rounded-xl text-gray-200">
                  <strong className="text-primary-400">Important :</strong> Les conseils et produits spirituels ne se substituent en aucun cas à un avis ou traitement médical, psychologique, juridique ou financier professionnel. En cas de problème médical grave, nous vous invitons à consulter un médecin praticien certifié.
                </p>
              </div>
            </div>

            {/* Section 3: Propriété Intellectuelle */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="text-primary-500" size={20} />
                3. Propriété Intellectuelle
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                L'ensemble des contenus figurant sur ce site (textes, images, visuels, logos, illustrations) sont la propriété exclusive du Grand Maître Visionnaire ou font l'objet d'un droit d'utilisation.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Toute reproduction, distribution, modification ou publication de ces éléments sans autorisation préalable est strictement interdite.
              </p>
            </div>

            {/* Section 4: Hébergement */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                4. Hébergement du Site
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Le site est hébergé sur des serveurs sécurisés et fait l'objet de mesures de protection visant à garantir sa continuité de service et sa sécurité.
              </p>
            </div>

            {/* Section 5: Responsabilité */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                5. Limitation de Responsabilité
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Le Grand Maître Visionnaire s'efforce de fournir des informations précises et régulièrement mises à jour. Toutefois, il ne saurait être tenu responsable des interruptions du service ou des erreurs d'interprétation découlant de l'utilisation du site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
