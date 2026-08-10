import { motion } from 'framer-motion';

const About = () => {
  const timelineSteps = [
    { num: '01', title: 'Discover' },
    { num: '02', title: 'Create' },
    { num: '03', title: 'Refine' },
    { num: '04', title: 'Deliver' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-primary-black transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative h-full">
            <motion.div 
              className="relative z-10 w-full aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
                alt="John Shah at Work" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                data-cursor="view"
              />
            </motion.div>
            
            {/* Subtle border accent */}
            <div className="absolute top-0 right-0 bottom-0 left-0 border-[0.5px] border-charcoal -translate-x-4 -translate-y-4 z-0 hidden lg:block transition-colors duration-300"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Person Behind The Edit.
            </motion.h4>
            
            <motion.div 
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl lg:text-[2rem] text-warm-white font-heading leading-tight transition-colors duration-300">
                "I believe great editing is more than cutting clips together. It is about rhythm, emotion, timing, composition and storytelling."
              </p>
              <p className="text-muted-purple font-light text-sm md:text-base leading-relaxed transition-colors duration-300">
                Every transition, frame, color and sound should have a purpose.
              </p>
              <p className="text-muted-purple font-light text-sm md:text-base leading-relaxed transition-colors duration-300">
                Through Riwaz Studio, I transform ideas and raw moments into visuals that feel intentional, cinematic and memorable.
              </p>
              
              <div className="pt-4">
                <p className="font-heading italic text-xl text-gold">— John Shah</p>
              </div>
            </motion.div>

            {/* Divider with circle */}
            <motion.div 
              className="flex items-center w-full mb-10"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-[1px] flex-1 bg-charcoal transition-colors duration-300"></div>
              <div className="w-3 h-3 rounded-full bg-muted-purple mx-4 shadow-sm transition-colors duration-300"></div>
              <div className="h-[1px] flex-1 bg-charcoal transition-colors duration-300"></div>
            </motion.div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
              {timelineSteps.map((step, index) => (
                <motion.div 
                  key={step.num}
                  className="flex items-center gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                  <span className="text-gold font-heading text-lg md:text-xl">{step.num}</span>
                  <div className="h-[1px] w-8 md:w-12 bg-charcoal shrink-0 transition-colors duration-300"></div>
                  <h5 className="text-warm-white tracking-[0.2em] uppercase text-[10px] md:text-xs font-medium transition-colors duration-300">{step.title}</h5>
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
