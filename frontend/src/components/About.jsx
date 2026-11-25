import { motion } from 'framer-motion';

const About = () => {
  const timelineSteps = [
    { num: '01', title: 'Understand' },
    { num: '02', title: 'Create' },
    { num: '03', title: 'Refine' },
    { num: '04', title: 'Deliver' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-primary-black transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Section - High-End Studio Visual */}
          <div className="w-full lg:w-1/2 relative h-full">
            <motion.div 
              className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-md shadow-2xl group border border-charcoal/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
                alt="Cinema Craft & Visual Storytelling - Riwaz Studio" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                data-cursor="view"
              />

              {/* Floating Luxury Craftsmanship Pill */}
              <div className="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-black/60 border border-gold/30 px-4 py-2 rounded-full hidden sm:flex items-center gap-2.5 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-warm-white">Riwaz Studio • Craft & Vision</span>
              </div>
            </motion.div>
            
            {/* Elegant luxury framing accent */}
            <div className="absolute top-0 right-0 bottom-0 left-0 border border-gold/30 -translate-x-3 -translate-y-3 z-0 hidden lg:block transition-colors duration-300 pointer-events-none"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-gold/60"></span>
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
                The Person Behind The Edit
              </h4>
            </motion.div>
            
            <motion.div 
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl lg:text-[2.1rem] text-warm-white font-heading leading-tight transition-colors duration-300">
                “I believe great editing is about bringing out the beauty and emotion already there.”
              </p>
              
              <p className="text-muted-purple font-light text-sm md:text-base leading-relaxed transition-colors duration-300">
                Every detail, color, and adjustment should have a purpose.
              </p>
              
              <p className="text-muted-purple font-light text-sm md:text-base leading-relaxed transition-colors duration-300">
                Through Riwaz Studio, I transform ideas and raw moments into visuals that feel intentional, cinematic and memorable.
              </p>
              
              {/* Executive Signature */}
              <div className="pt-2 flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-gold"></span>
                <div>
                  <p className="font-heading italic text-xl md:text-2xl text-gold">Tejas Patel</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-purple mt-0.5 font-medium">Founder & Lead Editor, Riwaz Studio</p>
                </div>
              </div>
            </motion.div>

            {/* Subtle Divider with gold diamond */}
            <motion.div 
              className="flex items-center w-full mb-10"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-[1px] flex-1 bg-charcoal transition-colors duration-300"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-gold mx-4 shrink-0 transition-colors duration-300"></div>
              <div className="h-[1px] flex-1 bg-charcoal transition-colors duration-300"></div>
            </motion.div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
              {timelineSteps.map((step, index) => (
                <motion.div 
                  key={step.num}
                  className="flex items-center gap-3 md:gap-4 group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/70 group-hover:bg-gold group-hover:scale-125 transition-all duration-300 shrink-0"></div>
                  <span className="text-gold font-heading text-lg md:text-xl font-bold group-hover:text-gold-light transition-colors duration-300">{step.num}</span>
                  <div className="h-[1px] w-8 md:w-12 bg-charcoal group-hover:w-14 group-hover:bg-gold/40 shrink-0 transition-all duration-300"></div>
                  <h5 className="text-warm-white tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold group-hover:text-gold transition-colors duration-300">{step.title}</h5>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
