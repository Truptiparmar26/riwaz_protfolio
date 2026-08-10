import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Cinematic Video Editing',
    desc: 'Professional editing for brand films, documentaries, and personal projects with an emphasis on storytelling and pacing.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    title: 'Advanced Color Grading',
    desc: 'Setting the exact mood and tone through professional color correction and creative cinematic grading.',
    img: 'https://images.unsplash.com/photo-1535016120720-40c746a6580c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    title: 'Motion Graphics & VFX',
    desc: 'Clean titles, dynamic animations, and visual effects that elevate the production value of any video.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '04',
    title: 'Short-Form & Reels',
    desc: 'High-retention, fast-paced edits specifically optimized for TikTok, Instagram Reels, and YouTube Shorts.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '05',
    title: 'Photo Retouching',
    desc: 'High-end photo editing, precise skin retouching, and creative enhancements for editorial and commercial use.',
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '06',
    title: 'Sound Design',
    desc: 'Immersive audio mixing and foley that brings depth, emotion, and realism to your visuals.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  }
];

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: premiumEase
    }
  })
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary-black transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div className="overflow-hidden mb-4">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              Services
            </motion.h4>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-warm-white tracking-tight leading-tight max-w-3xl"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase, delay: 0.1 }}
            >
              What I Create.
            </motion.h2>
          </div>
        </div>

        {/* Image Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group flex flex-col cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: 'easeOut' } }}
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md mb-6 bg-secondary-black border border-charcoal/50 shadow-lg transition-colors duration-300">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-heading text-warm-white group-hover:text-gold transition-colors duration-500 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-purple font-light leading-relaxed group-hover:text-muted-purple/80 transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
                
                {/* Minimalist Arrow Icon */}
                <div className="w-10 h-10 rounded-full border border-charcoal flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-sm">
                  <svg 
                    className="w-4 h-4 text-muted-purple group-hover:text-primary-black transform -rotate-45 group-hover:rotate-0 transition-all duration-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
