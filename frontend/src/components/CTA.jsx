import { motion } from 'framer-motion';

const CTA = () => {
  const scrollToSection = (id, focusInput = false) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', `#${id}`);
      if (focusInput) {
        setTimeout(() => {
          const input = el.querySelector('input[name="name"]');
          if (input) input.focus();
        }, 700);
      }
    }
  };

  return (
    <section className="py-32 md:py-48 relative bg-primary-black overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[60%] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-warm-white leading-none mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          YOUR VISION.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#997A15]">MY CREATIVITY.</span>
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-muted-purple font-light max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind? Let’s create something memorable together.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            onClick={scrollToSection('contact', true)}
            className="px-8 py-4 bg-gold text-primary-black font-heading tracking-widest uppercase text-sm hover:bg-neutral-900 hover:text-gold dark:hover:bg-warm-white dark:hover:text-primary-black transition-colors duration-300 w-full sm:w-auto text-center"
            data-cursor="open"
          >
            START A PROJECT &rarr;
          </a>
          <a 
            href="#gallery" 
            onClick={scrollToSection('gallery')}
            className="px-8 py-4 border border-charcoal text-warm-white font-heading tracking-widest uppercase text-sm hover:border-gold hover:text-gold transition-colors duration-300 w-full sm:w-auto text-center"
          >
            VIEW MY GALLERY
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
