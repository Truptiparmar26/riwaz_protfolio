import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative w-full min-h-screen flex items-center justify-center bg-primary-black overflow-hidden pt-20">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-primary-black overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-primary-black to-transparent blur-[100px] pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-6 md:px-12 h-full min-h-screen relative z-10 flex flex-col items-center justify-center pointer-events-none text-center">
        
        {/* Content */}
        <motion.div style={{ y: yParallax, opacity: opacityFade }} className="flex flex-col items-center justify-center z-20 w-full max-w-4xl pb-12 md:pb-0 pointer-events-auto mt-8 md:mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-4 md:mb-6 flex items-center justify-center gap-3 md:gap-4">
            <div className="h-[1px] w-6 md:w-16 bg-gold/50 hidden sm:block"></div>
            <span className="text-[9px] md:text-xs font-semibold tracking-[0.3em] text-gold uppercase">RIWAZ STUDIO</span>
            <div className="h-[1px] w-6 md:w-16 bg-gold/50 hidden sm:block"></div>
          </motion.div>

          {/* Top Intro */}
          <motion.div 
            className="text-lg md:text-2xl font-body text-warm-white mb-4 flex items-center justify-center gap-2 self-center w-full text-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-light">Hi, I'm</span>
            <span className="font-semibold underline decoration-gold decoration-2 underline-offset-4">John Shah</span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-warm-white leading-[1.1] tracking-tight mb-8 w-full text-center">
            <motion.span className="block font-black" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Cinematic Editor &
            </motion.span>
            <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-warm-white to-gold pb-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
              Visual Storyteller.
            </motion.span>
          </h1>
          
          {/* Typewriter Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} 
            className="mb-8 md:mb-12 w-full text-center"
          >
            <div className="text-xl md:text-3xl font-heading text-warm-white mb-4 flex items-center justify-center gap-3">
              <span className="text-gold font-bold">›</span>
              <TypeAnimation
                sequence={[
                  'Crafting cinematic visuals', 1000,
                  'Refining your storytelling', 1000,
                  'Building digital experiences', 1000,
                  'Turning raw moments into art', 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium text-gray-200"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Combining advanced editing techniques, color grading, and motion graphics to build engaging, scalable, and high-performance visual stories.
            </p>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row w-full justify-center gap-3 sm:gap-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <a href="#gallery" className="w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 bg-gold text-primary-black font-heading tracking-widest uppercase text-[10px] md:text-xs hover:bg-warm-white transition-colors duration-300 text-center" data-cursor="view">
              VIEW GALLERY
            </a>
            <a href="#contact" className="w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 border border-charcoal text-warm-white font-heading tracking-widest uppercase text-[10px] md:text-xs hover:border-gold hover:text-gold transition-colors duration-300 text-center" data-cursor="open">
              WORK WITH ME
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-purple mb-4">SCROLL TO EXPLORE &darr;</span>
      </motion.div>
    </section>
  );
};

export default Hero;
