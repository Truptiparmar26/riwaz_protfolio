import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 3500; 
    const interval = 30; 
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Custom easeOutExpo for smooth progress
      const progressRatio = currentStep / steps;
      const easedProgress = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);
      
      const currentProgress = Math.min(Math.floor(easedProgress * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFinished(true);
        setTimeout(() => {
          if (setLoading) setLoading(false);
        }, 1200); // Wait for cinematic flash and curtain drop
      }
    }, interval);

    return () => clearInterval(timer);
  }, [setLoading]);

  const formattedProgress = progress < 10 ? `0${progress}%` : `${progress}%`;

  const wordRiwaz = "RIWAZ".split("");
  const wordStudio = "STUDIO.".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0, 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Subtle center gold glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(5,5,5,0) 70%)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-6 h-full">
          
          <div className="flex flex-col items-center justify-center w-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: isFinished ? 'brightness(1.4) drop-shadow(0 0 20px rgba(212,175,55,0.5))' : 'brightness(1) drop-shadow(0 0 10px rgba(212,175,55,0.2)) blur(0px)'
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mb-8 md:mb-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
            >
              <img 
                src="/favicon.png" 
                alt="Riwaz Studio Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Main Title Letter by Letter */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 text-3xl md:text-5xl lg:text-6xl font-heading text-warm-white tracking-[0.15em] uppercase text-center mb-8"
              style={{ textShadow: '0 0 30px rgba(212,175,55,0.1)' }}
            >
              <div className="flex">
                {wordRiwaz.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block relative overflow-hidden group">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold/40 to-warm-white bg-[length:200%_auto] animate-shimmer">{char}</span>
                  </motion.span>
                ))}
              </div>
              <div className="flex">
                {wordStudio.map((char, index) => (
                  <motion.span key={`studio-${index}`} variants={letterVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold/40 to-warm-white bg-[length:200%_auto] animate-shimmer">
                    {char === '.' ? <span className="text-gold">{char}</span> : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Elegant Divider */}
            <motion.div 
              className="flex items-center gap-4 w-full max-w-[200px] md:max-w-[280px] mb-8 opacity-60"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold/50"></div>
              <div className="w-1 h-1 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] shrink-0"></div>
              <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-gold/50"></div>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="text-[10px] md:text-xs font-body font-light tracking-[0.4em] uppercase text-center transition-colors duration-1000"
              style={{ color: isFinished ? '#D4AF37' : 'var(--color-muted)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
            >
              CRAFTING THE FRAME...
            </motion.p>
            
            {/* Progress Section */}
            <div className="w-full mt-16 md:mt-24 opacity-80">
              <motion.div 
                className="flex justify-between items-end mb-3 px-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="text-[9px] md:text-[10px] font-body tracking-[0.3em] uppercase text-muted-purple">
                  Initializing Experience...
                </span>
                <span className="text-[10px] md:text-xs font-body text-gold tracking-widest tabular-nums">
                  {formattedProgress}
                </span>
              </motion.div>

              <motion.div 
                className="w-full h-[1px] bg-charcoal/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  style={{ width: `${progress}%` }}
                  layout
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
