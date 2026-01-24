import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Landmark, HeartPulse, ShieldCheck, Lightbulb } from 'lucide-react';
import type { Theme } from '@/types';

const themes: Theme[] = [
  {
    id: 'digital-inclusion',
    title: 'Digital Inclusion & Resilient Intelligence',
    icon: 'globe',
    description: 'Bridging the digital divide with accessible technology, smart infrastructure, and AI-driven solutions for underserved communities.',
  },
  {
    id: 'fintech',
    title: 'Algorithmic Finance & Embedded Fintech',
    icon: 'landmark',
    description: 'Next-gen financial algorithms, embedded banking, decentralized finance, and intelligent trading systems.',
  },
  {
    id: 'bioconvergence',
    title: 'Bioconvergence & Precision Health',
    icon: 'heart',
    description: 'Merging biology with technology for personalized medicine, genomics, AI diagnostics, and advanced healthcare solutions.',
  },
  {
    id: 'zero-trust',
    title: 'Zero-Trust Architecture & Adversarial AI',
    icon: 'shield',
    description: 'Building robust security systems, adversarial machine learning, threat detection, and zero-trust network models.',
  },
  {
    id: 'open',
    title: 'Open Innovation',
    icon: 'lightbulb',
    description: 'A wildcard track for solving unconventional problems using emerging tech like Web3, AR/VR, or IoT. Bring your most creative and boundary-pushing ideas that don\'t fit into traditional categories but offer high value.',
  },
];

const iconComponents: Record<string, React.ReactNode> = {
  globe: <Globe className="w-8 h-8" />,
  landmark: <Landmark className="w-8 h-8" />,
  heart: <HeartPulse className="w-8 h-8" />,
  shield: <ShieldCheck className="w-8 h-8" />,
  lightbulb: <Lightbulb className="w-8 h-8" />,
};

const themeColors: Record<string, {
  gradient: string;
  border: string;
  glow: string;
  icon: string;
  bg: string;
}> = {
  'digital-inclusion': {
    gradient: 'from-cyan-400 to-blue-600',
    border: 'border-cyan-500/30 hover:border-cyan-400',
    glow: 'group-hover:shadow-cyan-500/30',
    icon: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  fintech: {
    gradient: 'from-green-400 to-emerald-600',
    border: 'border-green-500/30 hover:border-green-400',
    glow: 'group-hover:shadow-green-500/30',
    icon: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  bioconvergence: {
    gradient: 'from-rose-400 to-pink-600',
    border: 'border-rose-500/30 hover:border-rose-400',
    glow: 'group-hover:shadow-rose-500/30',
    icon: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  'zero-trust': {
    gradient: 'from-purple-400 to-violet-600',
    border: 'border-purple-500/30 hover:border-purple-400',
    glow: 'group-hover:shadow-purple-500/30',
    icon: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  open: {
    gradient: 'from-amber-400 to-orange-600',
    border: 'border-amber-500/30 hover:border-amber-400',
    glow: 'group-hover:shadow-amber-500/30',
    icon: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
};

export function Themes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section
      id="themes"
      ref={ref}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              Choose Your Domain
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            Hackathon{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 bg-clip-text text-transparent">
              Themes
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose your battleground. Build solutions that matter in these key domains.
          </p>
        </motion.div>

        {/* Themes Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const colors = themeColors[theme.id];
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className={`group relative ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black border ${colors.border} backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${colors.glow}`}>
                  {/* Animated gradient border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-5`} />
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 ${colors.icon}`}
                  >
                    {iconComponents[theme.icon]}
                    {/* Pulse ring on hover */}
                    <div className={`absolute inset-0 rounded-2xl border ${colors.border} opacity-0 group-hover:opacity-100 group-hover:animate-ping`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`font-display text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3`}>
                    {theme.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {theme.description}
                  </p>

                  {/* Bottom line accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
