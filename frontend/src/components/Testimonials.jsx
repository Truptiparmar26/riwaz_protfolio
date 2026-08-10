import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

// Mock data
const mockTestimonials = [
  {
    id: 1,
    clientName: "Sarah Jenkins",
    clientRole: "Fashion Photographer",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    message: "Riwaz Studio completely transformed my editorial shoot. The attention to detail in skin retouching is unmatched. They understand how to retain texture while creating a flawless finish."
  },
  {
    id: 2,
    clientName: "David Chen",
    clientRole: "Creative Director",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    message: "Working with Riwaz is a seamless experience. Their color grading brought a cinematic depth to our campaign that we couldn't achieve in-house. Highly recommended for premium brands."
  },
  {
    id: 3,
    clientName: "Emma Thompson",
    clientRole: "Wedding Photographer",
    clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    message: "I outsource all my high-end wedding portraits to Riwaz Studio. They consistently deliver moody, elegant edits that my clients absolutely adore. True artists."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === mockTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockTestimonials.length - 1 : prev - 1));
  };

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
            Client Voices
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading text-warm-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Words of Appreciation.
          </motion.h2>
        </div>

        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-4xl relative h-[300px] md:h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-secondary-black p-8 md:p-12 border border-charcoal rounded-2xl shadow-xl flex flex-col justify-center"
              >
                <div className="flex text-gold mb-6 justify-center md:justify-start">
                  {[...Array(mockTestimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-warm-white font-light italic mb-8 leading-relaxed text-center md:text-left">
                  "{mockTestimonials[currentIndex].message}"
                </p>
                
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <img 
                    src={mockTestimonials[currentIndex].clientImage} 
                    alt={mockTestimonials[currentIndex].clientName} 
                    className="w-12 h-12 rounded-full object-cover border border-charcoal"
                  />
                  <div className="text-left">
                    <h5 className="text-warm-white font-medium">{mockTestimonials[currentIndex].clientName}</h5>
                    <span className="text-xs text-muted-purple uppercase tracking-wider">{mockTestimonials[currentIndex].clientRole}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex gap-4 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 border border-charcoal flex items-center justify-center text-warm-white hover:border-gold hover:text-gold transition-colors rounded-full hover:bg-glass"
            >
              <HiOutlineArrowLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 border border-charcoal flex items-center justify-center text-warm-white hover:border-gold hover:text-gold transition-colors rounded-full hover:bg-glass"
            >
              <HiOutlineArrowRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
