import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Sparkles, FileText, Crown, Star } from 'lucide-react';
import type { PrizeCategory } from '@/types';

const mainPrizes: PrizeCategory[] = [
  {
    id: 'winner',
    title: 'Winner',
    amount: '₹50,000',
    type: 'gold',
  },
  {
    id: 'runner-up',
    title: 'Runner-Up',
    amount: '₹30,000',
    type: 'silver',
  },
];

const specialPrizes: PrizeCategory[] = [
  {
    id: 'innovation',
    title: 'Best Innovation',
    amount: '₹10,000',
    type: 'special',
  },
  {
    id: 'abstract',
    title: 'Best Abstract',
    amount: '₹10,000',
    type: 'special',
  },
];

export function Prizes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      id="prizes"
      ref={ref}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />

      {/* Floating coins/stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute text-yellow-400/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          <Star className="w-6 h-6" />
        </motion.div>
      ))}

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6"
          >
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">
              Win Big
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-6xl font-black text-white mb-4 md:mb-6">
            Prize{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Pool
            </span>
          </h2>

          {/* Total Prize Pool - Hero Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block mt-4 md:mt-8"
          >
            <div className="relative px-6 py-4 md:px-20 md:py-12 rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 p-[2px]">
                <div className="w-full h-full bg-black rounded-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Total Prize Pool</p>
                  <p className="font-display text-4xl md:text-8xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    ₹1,00,000+
                  </p>
                </motion.div>
              </div>

              {/* Shine effect */}
              <motion.div
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              {/* Sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute top-4 right-4"
              >
                <Sparkles className="w-8 h-8 text-yellow-400/50" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16 max-w-4xl mx-auto">
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className={`relative h-full p-5 md:p-10 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 ${prize.type === 'gold'
                ? 'bg-gradient-to-br from-yellow-900/40 via-yellow-800/20 to-yellow-900/40 border-2 border-yellow-500/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/30'
                : 'bg-gradient-to-br from-gray-700/40 via-gray-600/20 to-gray-700/40 border-2 border-gray-500/50 hover:border-gray-400 hover:shadow-2xl hover:shadow-gray-500/30'
                }`}>
                {/* Background glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${prize.type === 'gold' ? 'bg-yellow-500/5' : 'bg-gray-500/5'
                  }`} />

                {/* Rank Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center ${prize.type === 'gold'
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`}>
                  <span className="text-2xl">{prize.type === 'gold' ? '🥇' : '🥈'}</span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${prize.type === 'gold'
                    ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 text-yellow-400'
                    : 'bg-gradient-to-br from-gray-400/20 to-gray-600/20 text-gray-400'
                    }`}
                >
                  {prize.type === 'gold' ? <Trophy className="w-10 h-10" /> : <Medal className="w-10 h-10" />}
                </motion.div>

                {/* Title */}
                <h3 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${prize.type === 'gold' ? 'text-yellow-400' : 'text-gray-300'
                  }`}>
                  {prize.title}
                </h3>

                {/* Amount */}
                <p className={`font-display text-5xl md:text-6xl font-black ${prize.type === 'gold'
                  ? 'bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent'
                  }`}>
                  {prize.amount}
                </p>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${prize.type === 'gold'
                  ? 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-gray-400 to-transparent'
                  } opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Categories Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-white">
            Special{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Categories
            </span>
          </h3>
        </motion.div>

        {/* Special Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {specialPrizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-900/40 to-orange-900/40 border border-red-500/30 hover:border-red-400 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center gap-5">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400"
                  >
                    {prize.title.includes('Innovation') ? (
                      <Sparkles className="w-8 h-8" />
                    ) : (
                      <FileText className="w-8 h-8" />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h4 className="font-display text-lg md:text-xl font-bold text-white mb-1">
                      {prize.title}
                    </h4>
                    <p className="font-display text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                      {prize.amount}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
