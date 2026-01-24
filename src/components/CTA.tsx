import { motion } from 'framer-motion';
import { Rocket, Users, Trophy, Clock, Sparkles } from 'lucide-react';

const stats = [
  { icon: Clock, value: '24', label: 'Hours', color: 'cyan' },
  { icon: Users, value: '500+', label: 'Hackers', color: 'purple' },
  { icon: Trophy, value: '₹1L+', label: 'Prizes', color: 'pink' },
  { icon: Sparkles, value: '5', label: 'Themes', color: 'amber' },
];

export function CTA() {
  return (
    <section className="relative py-16 md:py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        />
      </div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full mb-4 md:mb-8"
          >
            <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Limited Slots Available</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6"
          >
            Ready to{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dominate
              </span>
              <motion.span
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12"
          >
            Join the elite. Code with legends. Build the future.
            <span className="text-white font-semibold"> 24 hours. One mission. Infinite possibilities.</span>
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
                purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
                pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400',
                amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
              };
              const classes = colorClasses[stat.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${classes} border backdrop-blur-xl`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3`} />
                  <p className="font-display text-3xl md:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-full overflow-hidden cursor-default"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_100%]"
              />

              {/* Content */}
              <span className="relative z-10 font-display font-bold text-lg md:text-xl text-black">
                Registration Open Soon
              </span>
              <Sparkles className="w-6 h-6 text-black relative z-10" />
            </motion.div>

            <p className="text-gray-500 text-sm">
              Stay tuned for registration updates!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
