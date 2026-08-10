import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineZoomIn, HiX } from 'react-icons/hi';

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

// Event-focused mock data tailored for the editor's specific niche
const mockGallery = [
  { id: 1, title: 'The Royal Vows', category: 'Wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop' },
  { id: 2, title: 'Golden Hour Love', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1920&auto=format&fit=crop' },
  { id: 3, title: 'She Said Yes', category: 'Engagement', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1920&auto=format&fit=crop' },
  { id: 4, title: 'Welcoming Joy', category: 'Baby Shower', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1920&auto=format&fit=crop' },
  { id: 5, title: 'Maldives Memories', category: 'Post-Wedding', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1920&auto=format&fit=crop' },
  { id: 6, title: 'Sangeet Night', category: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop' },
  { id: 7, title: 'Destination Magic', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop' },
  { id: 8, title: 'Vintage Romance', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop' },
  { id: 9, title: 'Maternity Glow', category: 'Baby Shower', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop' },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Post-Wedding', 'Engagement', 'Baby Shower', 'Events'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'All' 
    ? mockGallery 
    : mockGallery.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div className="overflow-hidden mb-4">
            <motion.h4 
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              Portfolio
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
              Selected Works.
            </motion.h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-500 ${
                filter === cat 
                  ? 'bg-gold text-primary-black font-semibold shadow-lg shadow-gold/20' 
                  : 'bg-transparent border border-charcoal text-muted-purple hover:border-gold/50 hover:text-gold'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: premiumEase }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={img.id}
                className="relative overflow-hidden rounded-md group cursor-pointer break-inside-avoid shadow-lg bg-primary-black border border-charcoal/50 transition-colors duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 block">{img.category}</span>
                    <h3 className="text-2xl md:text-3xl font-heading text-warm-white">{img.title}</h3>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out scale-50 group-hover:scale-100">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-gold/50 shadow-2xl">
                      <HiOutlineZoomIn className="text-gold text-2xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-primary-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-muted-purple hover:text-gold transition-colors z-[110] bg-black/20 p-2 rounded-full backdrop-blur-md border border-charcoal"
              onClick={() => setSelectedImage(null)}
            >
              <HiX size={32} />
            </button>
            
            <div className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
              <motion.img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain shadow-2xl rounded-sm"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: premiumEase }}
              />
              <motion.div 
                className="mt-6 md:mt-8 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: premiumEase }}
              >
                <h3 className="text-3xl md:text-4xl font-heading text-warm-white mb-3">{selectedImage.title}</h3>
                <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{selectedImage.category}</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
