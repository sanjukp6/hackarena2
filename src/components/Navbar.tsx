import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import type { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Themes', href: '#themes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#team' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 origin-left z-[60]"
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Glitch Logo */}
            <a href="#home" className="relative group flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-black" />
              </motion.div>
              <span className="font-display text-xl md:text-2xl font-bold text-white glitch-text relative">
                HackArena
                <span className="text-orange-400">.1.0</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${activeSection === link.href.slice(1)
                    ? 'text-orange-400'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-orange-500/10 rounded-lg -z-10"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://unstop.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-black font-bold text-sm rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">Coming Soon</span>
              <Zap className="w-4 h-4 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 via-red-500 to-orange-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-orange-400" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${activeSection === link.href.slice(1)
                      ? 'bg-orange-500/20 text-orange-400 border-l-2 border-orange-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://unstop.com/hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-black font-bold rounded-full mt-4"
                >
                  Coming Soon
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
