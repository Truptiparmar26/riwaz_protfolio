import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin, FaPhoneAlt, FaRegClock, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-black pt-24 pb-8 border-t border-charcoal relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading text-warm-white tracking-widest uppercase mb-6">
              RIWAZ<span className="text-gold">.</span>
            </h2>
            <p className="text-muted-purple font-light text-sm leading-relaxed mb-8 pr-4">
              Turning fleeting moments into timeless visuals. We specialize in high-end retouching, color grading, and bringing your creative vision to life.
            </p>
            <div className="inline-flex items-center gap-4 bg-glass border border-charcoal rounded-2xl px-5 py-3">
              <FaRegClock className="text-muted-purple text-lg shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-purple uppercase tracking-widest mb-0.5">
                  Gujarat, India: <span className="text-warm-white font-medium">{timeString}</span>
                </span>
                <span className="text-[10px] text-warm-white font-bold uppercase tracking-widest">
                  IST
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-2 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-warm-white font-heading text-lg tracking-widest uppercase mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-muted-purple hover:text-gold text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-[1px] bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-purple hover:text-gold text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-[1px] bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-purple hover:text-gold text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-[1px] bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-purple hover:text-gold text-sm font-light transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-[1px] bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-warm-white font-heading text-xl tracking-[0.15em] uppercase mb-8">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
              <a href="mailto:riwazstudioofficial@gmail.com" className="group flex items-start gap-5">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full bg-secondary-black border border-charcoal flex items-center justify-center text-[#d4af37] group-hover:bg-secondary-black transition-colors duration-300 shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] text-muted-purple uppercase tracking-[0.2em] mb-1.5 font-medium">Email</span>
                  <span className="text-[15px] text-warm-white group-hover:text-warm-white transition-colors duration-300 font-light tracking-wide break-all">riwazstudioofficial@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918780464627" className="group flex items-start gap-5">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full bg-secondary-black border border-charcoal flex items-center justify-center text-[#d4af37] group-hover:bg-secondary-black transition-colors duration-300 shrink-0">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] text-muted-purple uppercase tracking-[0.2em] mb-1.5 font-medium">Call Us</span>
                  <span className="text-[15px] text-warm-white group-hover:text-warm-white transition-colors duration-300 font-light tracking-wide">+91 87804 64627</span>
                </div>
              </a>

              <a href="https://wa.me/918780464627" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-5">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full bg-secondary-black border border-charcoal flex items-center justify-center text-[#d4af37] group-hover:bg-secondary-black transition-colors duration-300 shrink-0">
                  <FaWhatsapp size={18} />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] text-muted-purple uppercase tracking-[0.2em] mb-1.5 font-medium">WhatsApp</span>
                  <span className="text-[15px] text-warm-white group-hover:text-warm-white transition-colors duration-300 font-light tracking-wide">+91 87804 64627</span>
                </div>
              </a>

              <a href="https://instagram.com/riwazstudio_" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-5">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full bg-secondary-black border border-charcoal flex items-center justify-center text-[#d4af37] group-hover:bg-secondary-black transition-colors duration-300 shrink-0">
                  <FaInstagram size={18} />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] text-muted-purple uppercase tracking-[0.2em] mb-1.5 font-medium">Instagram</span>
                  <span className="text-[15px] text-warm-white group-hover:text-warm-white transition-colors duration-300 font-light tracking-wide">@riwazstudio_</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-charcoal pt-8 text-xs text-muted-purple uppercase tracking-widest font-light">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Riwaz Studio. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a href="#" className="hover:text-warm-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-warm-white transition-colors duration-300">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="ml-0 sm:ml-4 flex items-center gap-2 text-warm-white hover:text-[#d4af37] transition-colors duration-300 focus:outline-none group"
            >
              Back to top 
              <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
