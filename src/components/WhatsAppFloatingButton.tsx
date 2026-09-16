import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(siteConfig.whatsappMessage);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="mr-4 bg-background-card border border-white/10 text-white text-sm py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(193,18,31,0.2)]"
          >
            Besoin d'une consultation ? Écrivez-nous
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-md group-hover:bg-primary-500/40 transition-colors duration-500" />
        <MessageCircle size={28} className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]" />
      </motion.button>
    </div>
  );
}
