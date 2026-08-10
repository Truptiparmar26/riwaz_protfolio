import { motion } from 'framer-motion';

const CTA = () => {
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
          YOUR STORY.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#997A15]">MY EDIT.</span>
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-muted-purple font-light max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have footage, an idea, or a story waiting to be shaped?
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
            className="px-8 py-4 bg-gold text-primary-black font-heading tracking-widest uppercase text-sm hover:bg-warm-white transition-colors duration-300 w-full sm:w-auto"
            data-cursor="open"
          >
            START A PROJECT &rarr;
          </a>
          <a 
            href="#work" 
            className="px-8 py-4 border border-charcoal text-warm-white font-heading tracking-widest uppercase text-sm hover:border-gold hover:text-gold transition-colors duration-300 w-full sm:w-auto"
          >
            VIEW MY WORK
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
