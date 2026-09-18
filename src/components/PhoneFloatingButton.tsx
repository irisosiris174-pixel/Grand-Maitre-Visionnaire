import { Phone } from 'lucide-react';
import { siteConfig } from '../data/config';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PhoneFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8500);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="lg:hidden fixed bottom-6 left-6 z-50 flex items-center">
      <motion.a
        href={`tel:${siteConfig.phoneRaw}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group bg-gradient-to-br from-primary-700 to-primary-900 border border-primary-500/40 text-white p-4 rounded-full shadow-[0_0_20px_rgba(193,18,31,0.4)] hover:shadow-[0_0_25px_rgba(193,18,31,0.7)] transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={`Appeler ${siteConfig.phone}`}
      >
        <div className="absolute inset-0 rounded-full bg-primary-500/30 blur-md group-hover:bg-primary-500/50 transition-colors duration-500" />
        <Phone size={26} className="relative z-10 text-white animate-[pulse_3s_ease-in-out_infinite]" />
      </motion.a>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="ml-4 bg-background-card border border-primary-500/30 text-white text-sm py-2 px-4 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span>Appeler : <strong className="text-primary-500 font-semibold">{siteConfig.phone}</strong></span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
