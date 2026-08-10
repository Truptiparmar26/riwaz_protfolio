import { motion } from 'framer-motion';

const reasons = [
  { 
    title: 'Creative Thinking', 
    desc: 'Approaching every project with a unique narrative perspective.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  { 
    title: 'Detail-Oriented Editing', 
    desc: 'Meticulous attention to pacing, sound, color, and transitions.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  },
  { 
    title: 'Cinematic Visual Style', 
    desc: 'Crafting visuals that feel rich, immersive, and premium.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  },
  { 
    title: 'Personalized Approach', 
    desc: 'Understanding your specific brand voice and target audience.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  },
  { 
    title: 'Professional Delivery', 
    desc: 'Reliable timelines and polished final outputs ready for any platform.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  }
];

const WhyRiwaz = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Difference
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading text-warm-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Riwaz Studio?
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-2xl bg-primary-black/40 backdrop-blur-sm border border-charcoal hover:border-gold/30 hover:bg-primary-black hover:shadow-2xl transition-all duration-500 cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-full bg-secondary-black border border-charcoal shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:border-gold/50 transition-all duration-500 shrink-0 relative z-10">
                <svg className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {reason.icon}
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-heading text-warm-white group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
              </div>
              <div className="flex-1 md:text-right relative z-10">
                <p className="text-muted-purple text-sm md:text-base font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRiwaz;
