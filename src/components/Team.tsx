import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, GraduationCap, Users, Crown, Sparkles, Mail, MessageCircle } from 'lucide-react';
import { useRef } from 'react';
import type { Coordinator } from '@/types';

const coordinators: Coordinator[] = [
  {
    id: '1',
    name: 'Dr. Nirmala C R',
    role: 'Program Coordinator',
    designation: 'HOD CSE & Dean Placement',
    category: 'program',
  },
  {
    id: 'principal',
    name: 'Dr. Aravinda',
    role: 'Principal',
    category: 'leadership',
  },
  {
    id: 'director',
    name: 'Prof. Y Vrushabhendrappa',
    role: 'Director',
    category: 'leadership',
  },
  {
    id: '2',
    name: 'Dr. Santhosh K C',
    role: 'UNICS Forum Coordinator',
    category: 'forum',
  },
  {
    id: '3',
    name: 'Prof. Shankar Sarji',
    role: 'UNICS Forum Coordinator',
    category: 'forum',
  },
  {
    id: '4',
    name: 'Prof. Anu C S',
    role: 'UNICS Forum Coordinator',
    category: 'forum',
  },
  {
    id: '5',
    name: 'Prof. Vishwanth V K',
    role: 'Faculty Coordinator',
    category: 'faculty',
  },
  {
    id: '6',
    name: 'Prof. Nomitha',
    role: 'Faculty Coordinator',
    category: 'faculty',
  },
  {
    id: '7',
    name: 'Nachiketh V S',
    role: 'Student Coordinator',
    phone: '9916504140',
    category: 'student',
  },
  {
    id: '8',
    name: 'Sanju K P',
    role: 'Student Coordinator',
    phone: '8618706393',
    category: 'student',
  },
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const groupedCoordinators = {
    program: coordinators.filter((c) => c.category === 'program'),
    leadership: coordinators.filter((c) => c.category === 'leadership'),
    forum: coordinators.filter((c) => c.category === 'forum'),
    faculty: coordinators.filter((c) => c.category === 'faculty'),
    student: coordinators.filter((c) => c.category === 'student'),
  };

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full mb-8"
          >
            <Users className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-bold text-sm uppercase tracking-widest">
              The Dream Team
            </span>
            <Users className="w-5 h-5 text-orange-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl font-black mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-amber-400">
              Meet The Organizers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The brilliant minds making HackArena 1.0 possible
          </motion.p>
        </motion.div>

        {/* Program Coordinator - Featured */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Leadership & Program Coordinator
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent" />
          </div>

          {/* Grid for HOD and Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* HOD Card */}
            {groupedCoordinators.program.map((coordinator) => (
              <motion.div
                key={coordinator.id}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full p-4 md:p-5 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-red-500/30 overflow-hidden">
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                          <Crown className="w-8 h-8 text-red-400" />
                        </div>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-[10px] font-bold text-white">
                        HEAD
                      </div>
                    </motion.div>

                    {/* Info */}
                    <div>
                      <h4 className="font-display text-lg md:text-xl font-black text-white mb-1">
                        {coordinator.name}
                      </h4>
                      <p className="text-red-400 font-semibold text-sm mb-0.5">
                        {coordinator.role}
                      </p>
                      {coordinator.designation && (
                        <p className="text-gray-400 text-xs">
                          {coordinator.designation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}

            {/* Principal and Director Cards */}
            {groupedCoordinators.leadership.map((leader) => (
              <motion.div
                key={leader.id}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full p-4 md:p-5 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-amber-500/30 overflow-hidden">
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 p-1">
                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                          <Crown className="w-8 h-8 text-amber-400" />
                        </div>
                      </div>
                      {/* Role indicator */}
                      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-[10px] font-bold text-black">
                        {leader.role === 'Principal' ? 'PRINCIPAL' : 'DIRECTOR'}
                      </div>
                    </motion.div>

                    {/* Info */}
                    <div>
                      <h4 className="font-display text-lg md:text-xl font-black text-white mb-1">
                        {leader.name}
                      </h4>
                      <p className="text-amber-400 font-semibold text-sm">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Forum Coordinators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              UNICS Forum Coordinators
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {groupedCoordinators.forum.map((coordinator, index) => (
              <motion.div
                key={coordinator.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="relative h-full p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-orange-500/20 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500" />

                  {/* Avatar */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-10 h-10 md:w-14 md:h-14 mx-auto mb-2 md:mb-3 rounded-lg md:rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-0.5"
                  >
                    <div className="w-full h-full rounded-lg md:rounded-xl bg-gray-900 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-orange-400" />
                    </div>
                  </motion.div>

                  <h4 className="font-display text-xs md:text-base font-bold text-white text-center mb-0.5 md:mb-1">
                    {coordinator.name}
                  </h4>
                  <p className="text-orange-400 font-medium text-center text-xs md:text-sm">
                    Forum Coordinator
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faculty Coordinators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Faculty Coordinators
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
            {groupedCoordinators.faculty.map((coordinator, index) => (
              <motion.div
                key={coordinator.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative h-full p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-green-500/20 overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5"
                    >
                      <div className="w-full h-full rounded-lg md:rounded-xl bg-gray-900 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-green-400" />
                      </div>
                    </motion.div>

                    <div className="min-w-0">
                      <h4 className="font-display text-[10px] md:text-base font-bold text-white mb-0 md:mb-0.5 leading-tight">
                        {coordinator.name}
                      </h4>
                      <p className="text-green-400 font-medium text-xs md:text-sm">
                        Faculty Coordinator
                      </p>
                    </div>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Coordinators - Redesigned without initials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
              Student Coordinators
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 via-red-500/50 to-transparent" />
          </div>

          {/* Feature Cards for Students */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedCoordinators.student.map((coordinator, index) => (
              <motion.div
                key={coordinator.id}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  rotateY: index === 0 ? 5 : -5,
                }}
                className="group perspective-1000"
              >
                <div className="relative overflow-hidden rounded-[2rem] transform-gpu">
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 p-[3px] rounded-[2rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 animate-spin-slow blur-sm" />
                  </div>

                  {/* Card content */}
                  <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 md:p-5">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />

                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                          Student Lead
                        </div>
                        <h4 className="font-display text-lg md:text-xl font-black text-white mb-0.5">
                          {coordinator.name}
                        </h4>
                        <p className="text-gray-400">
                          Student Coordinator
                        </p>
                      </div>

                      {/* Contact Actions */}
                      <div className="flex flex-col gap-2">
                        {/* Phone Button */}
                        <motion.a
                          href={`tel:${coordinator.phone}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full group/btn"
                        >
                          <div className="relative px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 overflow-hidden transition-all duration-300 hover:border-orange-500/60">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white transition-colors" />
                                <span className="text-xs font-bold text-white group-hover/btn:text-white">{coordinator.phone}</span>
                              </div>
                              <span className="text-[10px] text-gray-400 group-hover/btn:text-white/70 uppercase tracking-tighter">Call Now</span>
                            </div>
                          </div>
                        </motion.a>

                        {/* WhatsApp Button */}
                        <motion.a
                          href={`https://wa.me/91${coordinator.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full group/btn"
                        >
                          <div className="relative px-3 py-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 overflow-hidden transition-all duration-300 hover:border-green-500/60">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-2">
                              <MessageCircle className="w-4 h-4 text-green-400 group-hover/btn:text-white transition-colors" />
                              <span className="text-xs font-bold text-green-400 group-hover/btn:text-white transition-colors">WhatsApp</span>
                            </div>
                          </div>
                        </motion.a>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-[2rem]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Need help? Reach out to us</p>
                  <p className="font-bold text-white">hackarena@bfriengineeringedu.org</p>
                </div>
              </div>
              <motion.a
                href="mailto:biet.hackarena@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-orange-500/30 transition-shadow text-sm"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
