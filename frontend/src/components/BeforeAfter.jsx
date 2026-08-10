import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percent = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [isDragging]);

  return (
    <section className="py-24 md:py-32 bg-primary-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Transformation
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading text-warm-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From Raw To Remarkable.
          </motion.h2>
          <motion.p 
            className="text-muted-purple font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience the difference professional retouching makes. Drag the slider to compare the original raw capture with the final, cinematic result.
          </motion.p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <motion.div 
            className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize rounded-xl border border-charcoal shadow-2xl"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop" 
                alt="After retouching" 
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 text-xs text-warm-white tracking-widest uppercase border border-charcoal">After</div>
            </div>

            {/* Before Image (Foreground overlay) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop&sepia=100&sat=-100" // Simulated raw/flat image
                alt="Before retouching" 
                className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 text-xs text-warm-white tracking-widest uppercase border border-charcoal">Before</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-gold flex items-center justify-center transform -translate-x-1/2 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-primary-black"></div>
                  <div className="w-0.5 h-3 bg-primary-black"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
