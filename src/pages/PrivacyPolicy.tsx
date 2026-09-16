import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

export function PrivacyPolicy() {
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
              PROTECTION DES DONNÉES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              La discrétion et le respect de votre vie privée sont au cœur de l'engagement du Grand Maître Visionnaire.
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
            {/* Intro Box */}
            <div className="flex items-start gap-4 p-6 bg-primary-900/10 border border-primary-500/20 rounded-2xl">
              <ShieldCheck className="text-primary-500 shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Engagement de Confiance</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Toutes les informations et échanges transmis dans le cadre de vos consultations ou demandes de renseignements demeurent strictement confidentiels et protégés avec la plus grande discrétion.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="text-primary-500" size={20} />
                1. Collecte des Informations
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous collectons uniquement les données strictement nécessaires au traitement de vos demandes de consultation ou d'achat de produits traditionnels. Ces informations incluent :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
                <li>Votre nom, prénom ou nom d'usage shared lors de la prise de contact.</li>
                <li>Vos coordonnées (numéro de téléphone, identifiant WhatsApp, adresse e-mail).</li>
                <li>Les détails relatifs à votre demande de consultation ou commande de produits.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="text-primary-500" size={20} />
                2. Utilisation des Données
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vos informations personnelles sont exclusivement utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
                <li>Organiser et assurer le suivi de vos consultations spirituelles et conseils.</li>
                <li>Gérer et expédier vos commandes de produits traditionnels.</li>
                <li>Répondre directement à vos messages via WhatsApp ou formulaire de contact.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="text-primary-500" size={20} />
                3. Non-Divulgation & Confidentialité
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Aucune de vos informations personnelles ne sera vendue, louée, échangée ou cédée à des tiers. Les détails de votre situation personnelle partagés lors des échanges sont traités sous le sceau de la discrétion absolue.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                4. Durée de Conservation
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Les données relatives à vos échanges et consultations sont conservées uniquement pendant la durée nécessaire à l'accomplissement de la démarche ou selon vos instructions explicites.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                5. Vos Droits
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conformément aux principes de protection de la vie privée, vous disposez à tout moment d'un droit d'accès, de rectification et de suppression de vos données personnelles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pour exercer ce droit, il vous suffit d'envoyer un simple message via WhatsApp au{' '}
                <span className="text-primary-400 font-semibold">{siteConfig.whatsappDisplay}</span> ou par e-mail à{' '}
                <span className="text-primary-400 font-semibold">{siteConfig.email}</span>.
              </p>
            </div>

            {/* Contact Card */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Une question sur vos données ?</h4>
                <p className="text-xs text-gray-400">Écrivez-nous directement pour toute demande de clarification.</p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite poser une question concernant la confidentialité des données.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition-all text-sm shrink-0"
              >
                <MessageCircle size={18} />
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
