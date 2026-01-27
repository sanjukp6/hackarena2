import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Sponsor } from '@/types';

const sponsors: Sponsor[] = [
  { id: '1', name: 'Rakuten', logo: '/rakuten-logo.jpg' },
  { id: '2', name: 'Rapido', logo: '/rapido-logo.png' },
  { id: '3', name: 'Inube', logo: '/inube-logo.png' },
  { id: '4', name: 'Logic Brackets', logo: '/logicbrackets-logo.jpg' },
  { id: '5', name: 'Cleo', logo: '/cleo-logo.jpg' },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-16 md:py-28 bg-black overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16 px-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full mb-6"
        >
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">
            Premium Partners
          </span>
          <Star className="w-4 h-4 text-yellow-400" />
        </motion.div>

        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]">
            Our Sponsors
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto">
          Proudly supported by industry leaders powering innovation
        </p>
      </motion.div>

      {/* Sponsors Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-2 border-yellow-500/40 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                {/* Pulsing glow background */}
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10"
                />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Logo Image */}
                <div className="relative flex items-center justify-center h-16 md:h-24">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 md:mt-16 mx-auto w-48 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
      />
    </section>
  );
}
