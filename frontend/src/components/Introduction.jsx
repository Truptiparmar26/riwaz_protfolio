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
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gold mb-1.5 leading-none flex items-center">
        {textString ? (
          <span>{textString}</span>
        ) : (
          <><span ref={countRef}>0</span>{suffix}</>
        )}
      </h3>
      <p className="text-[10px] sm:text-xs text-warm-white/80 uppercase tracking-[0.18em] font-medium">{title}</p>
    </div>
  );
};

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 md:py-28 relative bg-primary-black transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center justify-between">
          
          {/* Portrait Image with adaptive frame: sleek dark border on white background, crisp white in dark mode */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <motion.div 
              className="relative w-full max-w-sm sm:max-w-md aspect-[681/1024] border-2 border-neutral-900 dark:border-white hover:border-gold dark:hover:border-gold shadow-2xl shadow-neutral-900/15 dark:shadow-black/80 overflow-hidden transition-all duration-500"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img 
                src="/tejas-patel.jpg" 
                alt="Tejas Patel - Founder & Creative Editor" 
                className="w-full h-full object-cover"
                data-cursor="view"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Meet The Editor Tag */}
              <motion.h4 
                className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold mb-4 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Meet The Editor
              </motion.h4>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold text-warm-white leading-[1.15] mb-6 tracking-tight">
                Behind every frame<br />is a story.
              </h2>
              
              {/* Paragraphs */}
              <div className="space-y-4 text-warm-white/80 font-light text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-xl mb-8">
                <p>
                  I’m Tejas, the founder and creative mind behind Riwaz Studio.
                </p>
                <p>
                  I work across photo editing, cinematic color grading, natural retouching, and creative visual work, with a focus on keeping every image polished, authentic, and timeless.
                </p>
              </div>

              {/* Author & Title */}
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-warm-white tracking-wide">Tejas Patel</h3>
                <p className="text-gold text-xs tracking-widest uppercase mt-1.5 font-bold">Founder & Creative Editor</p>
                <p className="text-xs sm:text-sm text-warm-white/60 tracking-wider mt-1">Founder / Creative Studio — Riwaz Studio</p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-8 max-w-lg">
                <Counter end={100} suffix="+" title="Photos Edited" />
                <Counter end={50} suffix="+" title="Projects Delivered" />
                <Counter end={30} suffix="+" title="Happy Clients" />
                <Counter textString="∞" title="Creative Ideas" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Introduction;
