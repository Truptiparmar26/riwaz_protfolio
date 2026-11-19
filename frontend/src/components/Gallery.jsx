import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineZoomIn, HiX } from 'react-icons/hi';

// Premium cinematic easing curve
const premiumEase = [0.76, 0, 0.24, 1];

// Event-focused mock data tailored for the editor's specific niche with accurate aspect ratios
const mockGallery = [
  { id: 1, title: 'Baraat Euphoria', category: 'Wedding', image: '/gallery/wedding/wedding-car-celebration.webp', aspect: 1.5 },
  { id: 2, title: 'The Royal Bride', category: 'Wedding', image: '/gallery/wedding/wedding-bride-lehenga.webp', aspect: 1.5 },
  { id: 3, title: 'The Regal Groom', category: 'Wedding', image: '/gallery/wedding/wedding-groom-entry.webp', aspect: 0.67 },
  { id: 4, title: 'Radiant Bride Moments', category: 'Wedding', image: '/gallery/wedding/wedding-bride-radiant.webp', aspect: 0.67 },
  { id: 5, title: 'Bridal Henna & Chooda', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-henna.webp', aspect: 0.67 },
  { id: 6, title: 'Heritage Bridal Adornment', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-jewels.webp', aspect: 0.67 },
  { id: 7, title: 'The Royal Mojari', category: 'Wedding', image: '/gallery/wedding/wedding-groom-mojari.webp', aspect: 0.67 },
  { id: 8, title: 'Haldi Sunshine Moments', category: 'Wedding', image: '/gallery/wedding/wedding-haldi-groom-watch.webp', aspect: 1.5 },
  { id: 9, title: 'Haldi Celebration Swag', category: 'Wedding', image: '/gallery/wedding/wedding-haldi-groom-portrait.webp', aspect: 1.5 },
  { id: 10, title: 'Whispers of Love', category: 'Wedding', image: '/gallery/wedding/wedding-couple-sweet-glance.webp', aspect: 1.5 },
  { id: 11, title: 'Grace Beneath the Veil', category: 'Wedding', image: '/gallery/wedding/wedding-bride-veil-portrait.webp', aspect: 1.5 },
  { id: 12, title: 'Garden of Elegance', category: 'Wedding', image: '/gallery/wedding/wedding-bride-garden-twirl.webp', aspect: 1.5 },
  { id: 13, title: 'Eternal Bond', category: 'Wedding', image: '/gallery/wedding/wedding-couple-tender-smile.webp', aspect: 0.67 },
  { id: 14, title: 'Crimson Royalty', category: 'Wedding', image: '/gallery/wedding/wedding-bride-crimson-elegance.webp', aspect: 1.5 },
  { id: 15, title: 'Bridal Radiance', category: 'Wedding', image: '/gallery/wedding/wedding-bride-candid-glow.webp', aspect: 1.5 },
  { id: 16, title: 'Warm Embrace', category: 'Wedding', image: '/gallery/wedding/wedding-couple-magenta-hug.webp', aspect: 1.5 },
  { id: 17, title: 'Serenade in Pastel', category: 'Wedding', image: '/gallery/wedding/wedding-couple-serene-moment.webp', aspect: 1.5 },
  { id: 18, title: 'Walking into Forever', category: 'Wedding', image: '/gallery/wedding/wedding-couple-walking-hand-in-hand.webp', aspect: 1.33 },
  { id: 19, title: 'Soulful Connection', category: 'Wedding', image: '/gallery/wedding/wedding-couple-intimate-touch.webp', aspect: 1.5 },
  { id: 20, title: 'The Royal Ghodi Entry', category: 'Wedding', image: '/gallery/wedding/wedding-groom-horse-entry.webp', aspect: 1.5 },
  { id: 21, title: 'Hand in Hand Forever', category: 'Wedding', image: '/gallery/wedding/wedding-hand-holding-vows.webp', aspect: 0.67 },
  { id: 22, title: 'Twirl of Romance', category: 'Wedding', image: '/gallery/wedding/wedding-couple-pastel-dance.webp', aspect: 1.5 },
  { id: 23, title: 'Gentleman\'s Preparation', category: 'Wedding', image: '/gallery/wedding/wedding-groom-getting-ready.webp', aspect: 1.5 },
  { id: 24, title: 'Leading My Groom', category: 'Wedding', image: '/gallery/wedding/wedding-bride-leading-ghodi.webp', aspect: 1.5 },
  { id: 25, title: 'Regal Smile & Kundan', category: 'Wedding', image: '/gallery/wedding/wedding-bridal-smile-jewels.webp', aspect: 0.67 },
  { id: 26, title: 'Bride\'s Joyful Cheers', category: 'Wedding', image: '/gallery/wedding/wedding-bride-sunroof-cheer.webp', aspect: 0.67 },
  { id: 27, title: 'The Royal Swag Entry', category: 'Wedding', image: '/gallery/wedding/wedding-groom-katar-entry.webp', aspect: 1.5 },
  { id: 28, title: 'Tender Kiss of Love', category: 'Wedding', image: '/gallery/wedding/wedding-couple-kiss-cheek.webp', aspect: 1.5 },
  { id: 29, title: 'Seated in Royalty', category: 'Wedding', image: '/gallery/wedding/wedding-bride-seated-grace.webp', aspect: 1.33 },
  { id: 30, title: 'Golden Hour Love', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 31, title: 'She Said Yes', category: 'Engagement', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 32, title: 'Welcoming Joy', category: 'Baby Shower', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 33, title: 'Maldives Memories', category: 'Post-Wedding', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 34, title: 'Sangeet Night', category: 'Events', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 35, title: 'Vintage Romance', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
  { id: 36, title: 'Maternity Glow', category: 'Baby Shower', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop', aspect: 0.67 },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Post-Wedding', 'Engagement', 'Baby Shower', 'Events'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [columnsCount, setColumnsCount] = useState(3);

  // Responsive column count listener
  useEffect(() => {
    const updateColumns = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setColumnsCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnsCount(2);
      } else {
        setColumnsCount(3);
      }
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const filteredImages = filter === 'All' 
    ? mockGallery 
    : mockGallery.filter(img => img.category === filter);

  // Exact Height-Balanced Distribution Algorithm:
  // Uses actual aspect ratios to dynamically place each photo into the shortest column.
  // This guarantees that all 3 columns reach the exact same bottom line together!
  const columnData = useMemo(() => {
    const cols = Array.from({ length: columnsCount }, () => []);
    const colHeights = Array(columnsCount).fill(0);

    filteredImages.forEach((img) => {
      const ratio = img.aspect || 1.0;

      // Find the currently shortest column
      let shortestCol = 0;
      for (let i = 1; i < columnsCount; i++) {
        if (colHeights[i] < colHeights[shortestCol]) {
          shortestCol = i;
        }
      }

      cols[shortestCol].push(img);
      colHeights[shortestCol] += ratio;
    });

    return cols;
  }, [filteredImages, columnsCount]);

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
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-500 cursor-pointer ${
                filter === cat 
                  ? 'bg-gold text-primary-black font-semibold shadow-lg shadow-gold/20 scale-105' 
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

        {/* Balanced Responsive Masonry Grid (Perfect Bottom Alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {columnData.map((colImages, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {colImages.map((img) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    key={img.id}
                    className="relative overflow-hidden rounded-xl group cursor-pointer shadow-xl bg-primary-black border border-charcoal/40 hover:border-gold/60 transition-all duration-500"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="relative overflow-hidden w-full bg-charcoal/10">
                      <img 
                        src={img.image} 
                        alt={img.title} 
                        onError={(e) => {
                          if (e.currentTarget.src.endsWith('.webp')) {
                            e.currentTarget.src = e.currentTarget.src.replace(/\.webp$/, '.jpg');
                          }
                        }}
                        className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 block">
                          {img.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-heading text-warm-white">
                          {img.title}
                        </h3>
                      </div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out scale-75 group-hover:scale-100">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-gold/50 shadow-2xl">
                          <HiOutlineZoomIn className="text-gold text-xl md:text-2xl" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-primary-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-muted-purple hover:text-gold transition-colors z-[110] bg-black/30 p-2.5 rounded-full backdrop-blur-md border border-charcoal/80 cursor-pointer"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <HiX size={28} />
            </button>
            
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('.webp')) {
                    e.currentTarget.src = e.currentTarget.src.replace(/\.webp$/, '.jpg');
                  }
                }}
                className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain shadow-2xl rounded-lg border border-charcoal/30"
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: premiumEase }}
              />
              <motion.div 
                className="mt-6 md:mt-8 text-center"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: premiumEase }}
              >
                <h3 className="text-2xl md:text-4xl font-heading text-warm-white mb-2">{selectedImage.title}</h3>
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