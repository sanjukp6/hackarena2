import { motion } from 'framer-motion';
import type { Sponsor } from '@/types';

const sponsors: Sponsor[] = [
  { id: '1', name: 'Rakuten', logo: 'RAKUTEN' },
  { id: '2', name: 'Rapido', logo: 'RAPIDO' },
  { id: '3', name: 'Inube', logo: 'INUBE' },
  { id: '4', name: 'Logic Brackets', logo: 'LOGIC BRACKETS' },
];

export function Sponsors() {
  // Multiply sponsors for seamless loop
  const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="py-12 md:py-24 bg-black overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-16 px-4"
      >
        <h2 className="font-display text-2xl md:text-5xl font-bold mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400">
            Our Sponsors
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Powering innovation with industry leaders</p>
      </motion.div>

      {/* Infinite Marquee - Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 md:gap-6 whitespace-nowrap"
        >
          {marqueeSponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 group cursor-pointer">
              <div className="relative px-6 py-3 md:px-12 md:py-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="font-display text-sm md:text-xl font-bold text-gray-500 group-hover:text-yellow-400 transition-colors duration-300">
                  {sponsor.logo}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee - Row 2 (Reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-3 md:gap-6 whitespace-nowrap"
        >
          {marqueeSponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 group cursor-pointer">
              <div className="relative px-6 py-3 md:px-12 md:py-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="font-display text-sm md:text-xl font-bold text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                  {sponsor.logo}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
