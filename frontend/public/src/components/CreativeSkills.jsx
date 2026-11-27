import { motion } from 'framer-motion';

const skillsList = [
  { 
    name: "Cinematic Editing", 
    desc: "Crafting narratives with perfect rhythm and pacing.",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    aspect: "aspect-square"
  },
  { 
    name: "Color Grading", 
    desc: "Establishing mood and tone through color science.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    aspect: "aspect-[3/4]"
  },
  { 
    name: "Motion Graphics", 
    desc: "Dynamic visual elements to enhance the storytelling.",
    img: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800",
    aspect: "aspect-[4/3]"
  },
  { 
    name: "Post-Production", 
    desc: "End-to-end workflow from raw footage to final export.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    aspect: "aspect-[3/4]"
  },
  { 
    name: "Social Content", 
    desc: "High-retention, engaging edits for digital platforms.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    aspect: "aspect-square"
  }
];

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: premiumEase
    }
  })
};

const CreativeSkills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-primary-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div className="overflow-hidden mb-4">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              Core Expertise
            </motion.h4>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-warm-white tracking-tight leading-tight max-w-3xl transition-colors duration-300"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase, delay: 0.1 }}
            >
              My Creative Arsenal.
            </motion.h2>
          </div>
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index} 
              className="break-inside-avoid relative overflow-hidden rounded-md group cursor-pointer bg-secondary-black border border-charcoal/50 shadow-lg transition-colors duration-300"
              custom={index % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
            >
              
              <div className={`relative w-full ${skill.aspect} overflow-hidden`}>
                {/* Dark overlay for text readability - Hardcoded to black for contrast over images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                
                {/* Image */}
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-gold text-xs font-bold tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    0{index + 1}
                  </span>
                  {/* Hardcoded to text-white and text-gray-200 to ensure readability against dark image overlay even in light mode */}
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                    {skill.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CreativeSkills;
