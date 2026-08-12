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
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="w-full lg:w-[40%] lg:pr-12">
            <h2 className="text-3xl font-heading text-warm-white tracking-widest uppercase mb-6">
              RIWAZ<span className="text-gold">.</span>
            </h2>
            <p className="text-muted-purple font-light text-sm leading-relaxed mb-8 pr-4">
              Turning fleeting moments into timeless visuals. We specialize in high-end retouching, color grading, and bringing your creative vision to life.
            </p>
            <div className="inline-flex items-center gap-4 bg-secondary-black/30 backdrop-blur-md border border-charcoal/60 rounded-full px-6 py-2.5 hover:border-gold/30 hover:bg-secondary-black/50 transition-all duration-500 shadow-lg group">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-black border border-charcoal/80 text-muted-purple group-hover:text-gold transition-colors duration-500 shadow-inner shrink-0">
                <FaRegClock size={16} />
              </div>
              <div className="flex flex-col justify-center pr-2">
                <div className="flex items-center gap-2 mb-1">
                   <span className="text-[9px] text-muted-purple uppercase tracking-[0.2em] font-bold">
                     Gujarat, India (IST)
                   </span>
                   <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  </span>
                </div>
                <span className="text-[15px] font-heading tracking-widest text-warm-white leading-none">
                  {timeString}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-[20%] flex flex-col md:items-center lg:items-start">
            <div className="w-fit">
              <h3 className="text-warm-white font-heading text-lg tracking-widest uppercase mb-6 md:text-center lg:text-left">Explore</h3>
              <ul className="space-y-4 flex flex-col md:items-center lg:items-start">
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
          </div>

          {/* Start a Project */}
          <div className="w-full lg:w-[30%] flex flex-col md:items-center lg:items-start">
            <div className="w-full max-w-sm flex flex-col md:items-center lg:items-start">
              <h3 className="text-warm-white font-heading text-lg tracking-widest uppercase mb-6 md:text-center lg:text-left">Start a Project</h3>
              
              <p className="text-muted-purple font-light text-sm mb-8 leading-relaxed md:text-center lg:text-left">
                Ready to bring your creative vision to life? We are currently taking on new projects and would love to hear from you.
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-4 border border-charcoal/80 text-warm-white hover:text-primary-black hover:bg-gold hover:border-gold px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 mb-12 group">
                Let's Talk
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              
              {/* Minimal Social Links */}
              <div className="flex flex-col md:items-center lg:items-start w-full">
                <h4 className="text-warm-white font-heading text-xs tracking-[0.2em] uppercase mb-5 opacity-70">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/riwazstudio_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-charcoal/50 flex items-center justify-center text-muted-purple hover:text-primary-black hover:bg-gold hover:border-gold transition-all duration-500" aria-label="Instagram">
                    <FaInstagram size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/tejas-vasani-982355424" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-charcoal/50 flex items-center justify-center text-muted-purple hover:text-primary-black hover:bg-gold hover:border-gold transition-all duration-500" aria-label="LinkedIn">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="https://wa.me/918780464627" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-charcoal/50 flex items-center justify-center text-muted-purple hover:text-primary-black hover:bg-gold hover:border-gold transition-all duration-500" aria-label="WhatsApp">
                    <FaWhatsapp size={16} />
                  </a>
                  <a href="mailto:riwazstudioofficial@gmail.com" className="w-10 h-10 rounded-full border border-charcoal/50 flex items-center justify-center text-muted-purple hover:text-primary-black hover:bg-gold hover:border-gold transition-all duration-500" aria-label="Email">
                    <FaEnvelope size={16} />
                  </a>
                  <a href="tel:+918780464627" className="w-10 h-10 rounded-full border border-charcoal/50 flex items-center justify-center text-muted-purple hover:text-primary-black hover:bg-gold hover:border-gold transition-all duration-500" aria-label="Phone">
                    <FaPhoneAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-charcoal pt-8 text-xs text-muted-purple uppercase tracking-widest font-light">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Riwaz Studio. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">

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
