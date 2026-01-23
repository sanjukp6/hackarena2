import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { CyberGrid } from './CyberGrid';
import { Calendar, MapPin, Clock, ChevronDown, Sparkles, Terminal } from 'lucide-react';

const terminalPhrases = [
  'Building the future...',
  '24 hours of innovation_',
  'Code. Create. Conquer.',
  'Where ideas become reality',
  'Hack the impossible_',
];

const TypingTerminal = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = terminalPhrases[currentPhrase];

    if (isTyping) {
      if (displayText.length < phrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % terminalPhrases.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentPhrase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="inline-flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-xl font-mono text-xs md:text-base max-w-[90vw]"
    >
      <Terminal className="w-3 h-3 md:w-4 md:h-4 text-orange-400 flex-shrink-0" />
      <span className="text-gray-400">$</span>
      <span className="text-orange-300 truncate">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-2 h-5 bg-orange-400"
      />
    </motion.div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-28T10:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 md:gap-3">
      {Object.entries(timeLeft).map(([key, value]) => (
        <motion.div
          key={key}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + Object.keys(timeLeft).indexOf(key) * 0.1 }}
          className="relative"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group hover:border-orange-400/60 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />
            <span className="font-display text-xl md:text-2xl font-bold text-orange-400 relative z-10">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider relative z-10">
              {key}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const words = ['INNOVATE.', 'CODE.', 'CONQUER.'];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0">
        <CyberGrid />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-red-500/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-red-500/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/50" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 md:pt-12"
      >

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-full border border-orange-500/30 mb-2 md:mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-orange-300 text-xs md:text-sm font-medium">Registrations Open Soon</span>
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-orange-400" />
        </motion.div>

        {/* College Branding */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mb-3 md:mb-4"
        >
          {/* All Three Logos in a Row */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* BIET Logo */}
            <motion.img
              src="/biet-logo.png"
              alt="BIET Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            {/* UNICS Logo */}
            <motion.img
              src="/unics-logo.png"
              alt="UNICS Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            {/* Binary Blooms Logo */}
            <motion.img
              src="/binary-blooms-logo.png"
              alt="Binary Blooms Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>

          {/* College Name */}
          <div className="flex flex-col text-center">
            <span className="text-[10px] md:text-xs font-semibold text-orange-400 tracking-wide">
              BAPUJI EDUCATIONAL ASSOCIATION (REGD)
            </span>
            <span className="text-xs md:text-sm font-bold text-white leading-tight">
              BAPUJI INSTITUTE OF ENGINEERING AND TECHNOLOGY
            </span>
          </div>
        </motion.div>

        {/* Main Title with 3D Letter Animation */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-2 md:mb-3"
        >
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="inline-block mx-1 md:mx-4">
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  className={`inline-block font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black ${wordIndex === 0
                    ? 'text-orange-400'
                    : wordIndex === 1
                      ? 'text-white'
                      : 'bg-gradient-to-r from-red-400 via-orange-500 to-amber-400 bg-clip-text text-transparent'
                    }`}
                  style={{
                    textShadow: wordIndex === 0
                      ? '0 0 30px rgba(249, 115, 22, 0.5)'
                      : wordIndex === 2
                        ? '0 0 30px rgba(239, 68, 68, 0.5)'
                        : 'none',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-2 mb-3"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
            National Level Hackathon at{' '}
            <span className="font-bold text-white">BIET,Davangere</span>
          </p>
          <p className="text-base md:text-lg text-gray-500">
            Department of Computer Science & Engineering, under the{' '}
            <span className="text-red-400 font-semibold">UniCS Forum</span>
          </p>
        </motion.div>

        {/* Typing Terminal */}
        <div className="flex justify-center mb-4">
          <TypingTerminal />
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-2 mb-3"
        >
          {/* Date & Duration Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-orange-500/30 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 text-sm"
          >
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-white font-medium">28 Feb - 1 Mar, 2026</span>
            <span className="text-gray-500">|</span>
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-white font-medium">24 Hours</span>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-red-500/30 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 text-sm"
          >
            <MapPin className="w-4 h-4 text-red-400" />
            <span className="text-white font-medium">BIET Davangere</span>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider">Event Starts In</p>
          <CountdownTimer />
        </motion.div>


      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#themes"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
