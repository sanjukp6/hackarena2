import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Zap, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Themes', href: '#themes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#team' },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a href="#home" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center"
              >
                <Zap className="w-7 h-7 text-black" />
              </motion.div>
              <span className="font-display text-2xl font-bold text-white">
                HackArena<span className="text-orange-400">.1.0</span>
              </span>
            </a>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              National Level Hackathon organized by the Department of Computer Science & Engineering,
              BIET Davangere under the UNICS Forum. Join us for 24 hours of innovation, coding, and glory.
            </p>

            <div className="flex items-center gap-3 text-gray-400 mb-4">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>BIET, Davangere, Karnataka, India</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-red-400" />
              <a href="mailto:hackarena@bietdvg.edu" className="hover:text-white transition-colors">
                hackarena@bietdvg.edu
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-orange-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6">Connect</h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Register CTA */}
            <motion.a
              href="https://unstop.com/hackathon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold text-sm rounded-full"
            >
              <Zap className="w-4 h-4" />
              Coming Soon
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-1">
              <span>© {new Date().getFullYear()} BIET Davangere.</span>
              <span className="flex items-center gap-1">
                Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
                by UNICS Forum
              </span>
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </footer>
  );
}
