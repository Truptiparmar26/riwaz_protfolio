import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We begin by analyzing the raw image, understanding your vision, and identifying the core mood and technical requirements."
  },
  {
    num: "02",
    title: "Refine",
    desc: "Basic corrections are applied: exposure balancing, color correction, and foundational cleanup to prepare the canvas."
  },
  {
    num: "03",
    title: "Transform",
    desc: "The artistic phase. High-end retouching, dodging and burning, and creative color grading are meticulously applied."
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Final quality checks, sharpening, and exporting in required formats to ensure the visual is production-ready."
  }
];

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: premiumEase
    }
  })
};

const Process = () => {
  return (
    <section className="py-24 md:py-32 bg-primary-black border-t border-secondary-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
          <motion.div className="overflow-hidden mb-4">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              Workflow
            </motion.h4>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-warm-white tracking-tight"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase, delay: 0.1 }}
            >
              The Creative Process.
            </motion.h2>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              className="relative pl-10 md:pl-0 md:pt-10 md:border-t md:border-charcoal group transition-colors duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
            >
              {/* Mobile Vertical Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[9px] top-6 w-[2px] h-[calc(100%+3rem)] bg-charcoal md:hidden z-0 transition-colors duration-500 group-hover:bg-gold/30"></div>
              )}
              
              {/* Gold Node - Perfectly aligned for both mobile and desktop */}
              <div className="absolute top-[6px] left-0 md:top-0 md:left-0 w-5 h-5 bg-gold rounded-full ring-4 ring-primary-black shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 group-hover:scale-125 group-hover:bg-warm-white md:-translate-y-1/2 z-10"></div>
              
              {/* Faint Background Number */}
              <h3 className="text-5xl md:text-6xl font-heading text-warm-white opacity-10 mb-4 select-none transition-all duration-500 group-hover:text-gold group-hover:opacity-40">
                {step.num}
              </h3>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-2xl font-heading text-warm-white mb-3 group-hover:text-gold transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-sm md:text-base text-muted-purple font-light leading-relaxed group-hover:text-muted-purple/80 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Process;
