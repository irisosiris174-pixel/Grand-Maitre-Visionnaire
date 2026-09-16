import { Link } from 'react-router-dom';
import { siteConfig, services } from '../data/config';
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#08080a] border-t border-white/10 pt-16 pb-8 mt-auto z-10 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Description & Social/Action icons */}
          <div className="space-y-5">
            <Link to="/" className="block">
              <span className="text-xl font-bold tracking-widest text-primary-500 uppercase block">
                GRAND MAÎTRE <span className="text-white">VISIONNAIRE</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Prêtre spirituel traditionnel et maître visionnaire basé au Bénin.
              Héritier d'une tradition ancestrale de grands initiés, il met ses dons
              et la sagesse du Fâ au service de la résolution de vos préoccupations
              spirituelles, sentimentales et personnelles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded-full bg-primary-900/30 border border-primary-500/30 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                title="Appeler"
                className="w-10 h-10 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-500 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-primary-500 font-semibold mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'À Propos du Grand Maître', path: '/a-propos' },
                { label: 'Tous les Services', path: '/services' },
                { label: 'Pourquoi nous choisir', path: '/pourquoi-nous' },
                { label: 'Témoignages', path: '/temoignages' },
                { label: 'Nos Produits', path: '/produits' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Prendre Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm flex items-center gap-1.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Nos Prestations */}
          <div>
            <h4 className="text-primary-500 font-semibold mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2">
              NOS PRESTATIONS
            </h4>
            <ul className="space-y-2.5 mb-5">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="text-primary-500 font-semibold text-sm hover:text-primary-400 transition-colors inline-flex items-center gap-1.5 group"
            >
              Voir tous les {services.length} services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 4: Contact & Accès */}
          <div>
            <h4 className="text-primary-500 font-semibold mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2">
              CONTACT & ACCÈS
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-colors text-sm"
                >
                  <Phone size={18} className="text-primary-500 shrink-0" />
                  <span>+229 {siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#25D366] transition-colors text-sm"
                >
                  <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                  <span>WhatsApp : {siteConfig.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-colors text-sm"
                >
                  <Mail size={18} className="text-primary-500 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm pt-1">
                <Clock size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Disponible 7j/7</p>
                  <p className="text-xs text-gray-400">De 08h00 à 22h00 (Bénin)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer copyright line */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Grand Maître Visionnaire. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <Link to="/politique-de-confidentialite" className="hover:text-primary-500 transition-colors">Politique de confidentialité</Link>
            <Link to="/mentions-legales" className="hover:text-primary-500 transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
