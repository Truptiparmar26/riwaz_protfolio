import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['about', 'services', 'gallery', 'blog', 'contact'];
      let current = '/';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 150;
          if (window.scrollY >= top) {
            current = '/#' + section;
          }
        }
      }
      setActiveSection(current);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Blog', path: '/#blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[100] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        style={{ scaleX }}
      />

      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center shrink-0 gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
              <img 
                src="/favicon.png" 
                alt="RS Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-heading font-bold text-warm-white tracking-wide leading-none group-hover:text-gold transition-colors duration-500">
                Riwaz Studio
              </span>
              <span className="text-[8px] md:text-[10px] text-gold tracking-[0.3em] uppercase mt-1.5 font-bold">
                Editing Atelier
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={`text-sm uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full border ${
                      activeSection === link.path
                        ? 'text-gold border-gold/40 bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'text-warm-white border-transparent hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleTheme}
              className="text-warm-white hover:text-gold transition-colors duration-300 p-2"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a
              href="#contact"
              className="px-6 py-2 border border-gold text-gold text-sm uppercase tracking-wider hover:bg-gold hover:text-primary-black transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="text-warm-white hover:text-gold transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-warm-white hover:text-gold transition-colors"
            >
              <HiMenuAlt4 size={30} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-primary-black flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-warm-white hover:text-gold transition-colors"
            >
              <HiX size={32} />
            </button>
            <ul className="flex flex-col items-center justify-center space-y-8 w-full px-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`inline-block text-xl font-heading uppercase tracking-[0.2em] pl-[0.2em] transition-all duration-300 px-6 py-2 rounded-full border ${
                      activeSection === link.path
                        ? 'text-gold border-gold/40 bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'text-warm-white border-transparent hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-8 w-full flex justify-center">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-8 py-3 border border-gold text-gold text-sm md:text-lg uppercase tracking-[0.2em] pl-[calc(2rem+0.2em)] pr-8 hover:bg-gold hover:text-primary-black transition-all duration-300"
                >
                  Let's Work Together
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
