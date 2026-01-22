import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, CheckCircle2, Flag, Trophy, Presentation, Zap } from 'lucide-react';
import type { TimelineEvent } from '@/types';

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '28th Feb',
    time: '10:00 AM',
    title: 'Hackathon Kickoff',
    description: 'Opening ceremony, team registration, and problem statement release.',
  },
  {
    id: '2',
    date: '28th Feb',
    time: '3:00 PM',
    title: 'Checkpoint 1',
    description: 'First progress review. Share your initial approach and design.',
  },
  {
    id: '3',
    date: '28th Feb',
    time: '8:00 PM',
    title: 'Checkpoint 2',
    description: 'Mid-hackathon review. Demonstrate working prototype.',
  },
  {
    id: '4',
    date: '1st March',
    time: '8:00 AM',
    title: 'Checkpoint 3',
    description: 'Final code submission and project documentation.',
  },
  {
    id: '5',
    date: '1st March',
    time: '11:00 AM',
    title: 'Top 10 Finals',
    description: 'Selected teams present their solutions to the jury.',
  },
  {
    id: '6',
    date: '1st March',
    time: 'Post Event',
    title: 'Prize Ceremony',
    description: 'Winners announcement and prize distribution ceremony.',
  },
];

const icons = [Rocket, CheckCircle2, CheckCircle2, Flag, Presentation, Trophy];

export function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-16 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-600/10 via-red-600/10 to-amber-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              24 Hour Journey
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            Event{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            From kickoff to victory. Every checkpoint counts.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2">
            {/* Animated progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-orange-400 via-red-500 to-amber-500"
            />
            {/* Glow effect */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 w-1 -translate-x-1/2 left-1/2 bg-gradient-to-b from-orange-400 via-red-500 to-amber-500 blur-sm opacity-50"
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const Icon = icons[index];
              const isLeft = index % 2 === 0;
              const isFirst = index === 0;
              const isLast = index === timelineEvents.length - 1;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${isFirst
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600'
                      : isLast
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-600'
                        : 'bg-gradient-to-br from-red-500 to-amber-600'
                      } shadow-lg ${isFirst
                        ? 'shadow-orange-500/50'
                        : isLast
                          ? 'shadow-yellow-500/50'
                          : 'shadow-red-500/50'
                      }`}>
                      <Icon className="w-6 h-6 text-black" />
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isFirst
                        ? 'bg-orange-400'
                        : isLast
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                        }`} style={{ animationDuration: '2s' }} />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-60px)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden`}
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Date & Time */}
                      <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-xs font-bold text-orange-400 border border-orange-500/30">
                          {event.date}
                        </span>
                        <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs font-medium text-gray-400 border border-gray-700">
                          {event.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-display text-xl md:text-2xl font-bold text-white mb-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-400 text-sm md:text-base ${isLeft ? 'md:text-right' : ''}`}>
                        {event.description}
                      </p>

                      {/* Corner accent */}
                      <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} bottom-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
