import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const Counter = ({ end, suffix = "", title, textString = "" }) => {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && countRef.current && !textString) {
      gsap.to(countRef.current, {
        innerHTML: end,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.out",
      });
    }
  }, [isInView, end, textString]);

  return (
    <div className="flex flex-col items-start text-left">
      <h3 className="text-4xl md:text-[2.75rem] font-heading text-gold mb-2 leading-none flex items-center">
        {textString ? (
          <span>{textString}</span>
        ) : (
          <><span ref={countRef}>0</span>{suffix}</>
        )}
      </h3>
      <p className="text-[10px] md:text-xs text-muted-purple uppercase tracking-[0.2em] font-medium">{title}</p>
    </div>
  );
};

const Introduction = () => {
  return (
    <section id="introduction" className="py-24 md:py-32 relative bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet The Editor
            </motion.h4>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-white leading-tight">
                Behind every frame is a story.
              </h2>
              
              <div className="text-muted-purple space-y-6 font-light text-base md:text-lg max-w-lg leading-relaxed">
                <p>
                  John Shah is a creative editor focused on transforming raw footage and imagery into polished visual experiences that connect, inspire, and leave an impression.
                </p>
                <div className="w-3 h-3 rounded-full bg-charcoal opacity-50"></div>
              </div>

              <div className="pt-2 pb-6">
                <h3 className="text-xl font-medium text-warm-white tracking-wide">John Shah</h3>
                <p className="text-gold text-xs tracking-widest uppercase mt-1 font-bold">Professional Editor</p>
                <p className="text-[10px] text-muted-purple tracking-wider mt-1">Founder / Creative Mind behind Riwaz Studio</p>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="pt-8 border-t border-charcoal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                <Counter end={5} suffix="+" title="Creative Experience" />
                <Counter end={100} suffix="+" title="Projects Crafted" />
                <Counter end={50} suffix="+" title="Happy Clients" />
                <Counter textString="∞" title="Creative Ideas" />
              </div>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            
            {/* Background Decorative Lines */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border-[0.5px] border-gold/20 rounded-full z-0 pointer-events-none hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-[0.5px] border-gold/20 rounded-none z-0 pointer-events-none hidden lg:block"></div>

            <motion.div 
              className="relative w-full max-w-md lg:max-w-[500px] aspect-[4/5] bg-primary-black z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            >
              {/* Corner Accents matching screenshot */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold/60 z-20"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold/60 z-20"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Editor Workspace" 
                className="w-full h-full object-cover p-2"
                data-cursor="view"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Introduction;
