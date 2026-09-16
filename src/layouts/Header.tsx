import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'À propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
    { name: 'Produits', path: '/produits' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-500 border-b border-transparent',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-primary-500 transition-colors duration-300">
            GRAND MAÎTRE <span className="text-primary-500">VISIONNAIRE</span>
          </span>
          <span className="text-xs text-gray-400 tracking-widest mt-1 uppercase">
            Sagesse • Vision • Transformation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary-500 relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all hover:after:w-full",
                location.pathname === link.path ? "text-primary-500 after:w-full" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary-700 hover:bg-primary-500 text-white px-6 py-2.5 rounded hover:shadow-[0_0_15px_rgba(193,18,31,0.4)] transition-all duration-300 group"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold tracking-wide">Consulter sur WhatsApp</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 hover:text-primary-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background-alt border-b border-white/10 shadow-2xl lg:hidden flex flex-col px-4 py-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium tracking-wide",
                  location.pathname === link.path ? "text-primary-500" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-700 text-white px-6 py-4 rounded font-semibold mt-4 tracking-wide"
            >
              <MessageCircle size={20} />
              Consulter sur WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
