import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (setLoading) setLoading(false);
          }, 400); // short delay before completely removing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-primary-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative flex flex-col items-center w-full max-w-sm px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading text-warm-white tracking-[0.2em] uppercase mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            RIWAZ STUDIO
          </motion.h1>

          <div className="w-full flex justify-between items-end mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-purple">
              Crafting the frame...
            </span>
            <span className="text-xs font-heading text-gold">
              {Math.min(progress, 100)}%
            </span>
          </div>

          {/* Loading Line */}
          <div className="w-full h-[1px] bg-charcoal overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
