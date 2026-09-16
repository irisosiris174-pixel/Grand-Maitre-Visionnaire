import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Message envoyé avec succès !",
  message = "Votre demande a bien été transmise au Grand Maître Visionnaire. Nous l'examinerons avec attention et nous reviendrons vers vous dans les plus brefs délais."
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0e0e14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(37,211,102,0.15)] z-10 text-center overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* Glowing Accent Circle */}
            <div className="mx-auto w-20 h-20 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,211,102,0.3)]">
              <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              {message}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Bonjour Grand Maître Visionnaire, je viens de soumettre une demande sur votre site web.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg text-sm"
              >
                <MessageCircle size={18} />
                Discuter sur WhatsApp
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-200 font-semibold transition-all text-sm"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
