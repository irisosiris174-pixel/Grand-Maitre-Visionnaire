import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../data/config';
import { SuccessModal } from '../components/SuccessModal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Erreur réseau');
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pour toute demande de consultation, d'information sur nos services ou produits, 
            n'hésitez pas à nous contacter. WhatsApp est notre moyen de communication privilégié pour une réponse rapide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-background-card p-8 rounded-2xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageCircle className="text-[#25D366]" />
                Contact Rapide
              </h3>
              <p className="text-gray-400 mb-6">
                Privilégiez WhatsApp pour une réponse dans les plus brefs délais.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <MessageCircle size={24} />
                Démarrer la conversation
              </a>
            </div>

            <div className="space-y-6 px-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-500">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Téléphone direct</div>
                  <div className="text-lg font-medium">{siteConfig.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-500">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-lg font-medium">{siteConfig.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Adresse</div>
                  <div className="text-lg font-medium">{siteConfig.address}</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background-card p-8 rounded-2xl border border-white/5 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-gray-400">Téléphone / WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-gray-400">Sujet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-400">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer ou nous contacter via WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center items-center gap-2 bg-primary-700 hover:bg-primary-500 disabled:opacity-50 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              {status === 'loading' ? (
                'Envoi en cours...'
              ) : (
                <>
                  <Send size={20} />
                  Envoyer ma demande
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>

      <SuccessModal
        isOpen={status === 'success'}
        onClose={() => setStatus('idle')}
      />
    </div>
  );
}
