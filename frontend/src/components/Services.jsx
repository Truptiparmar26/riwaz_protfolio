import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    category: 'Weddings & Color',
    title: 'Wedding Photo Editing',
    shortLine: 'Elegant, consistent and timeless wedding edits.',
    desc: 'Complete wedding galleries are meticulously edited to achieve a clean, polished, and consistent aesthetic while preserving authentic emotions, natural skin tones, and rich details.',
    includes: [
      'Color Correction & Grading',
      'Exposure & White Balance',
      'Natural Skin Retouching',
      'Background Cleanup',
      'Detail Enhancement',
      'Consistent Look Across the Gallery',
      'High-Resolution Export'
    ],
    idealFor: ['Wedding Photographers', 'Studios', 'Wedding Albums']
  },
  {
    id: '02',
    category: 'Weddings & Color',
    title: 'Cinematic Color Grading',
    shortLine: 'Turning ordinary colors into a cinematic visual mood.',
    desc: 'Photographs are infused with carefully balanced cinematic tones, featuring controlled highlights, rich shadow depth, and preserved natural skin tones.',
    includes: [
      'Cinematic Color Tones',
      'Highlight & Shadow Balancing',
      'Skin Tone Protection',
      'Contrast Refinement',
      'Mood-Based Color Styling',
      'Gallery-Wide Color Consistency'
    ],
    idealFor: ['Wedding', 'Portrait', 'Pre-Wedding', 'Creative Photography']
  },
  {
    id: '03',
    category: 'Retouching & Cleanup',
    title: 'Natural Skin Retouching',
    shortLine: 'Clean skin without losing real skin texture.',
    desc: 'Skin is naturally refined without looking plastic or artificial, ensuring facial character and authentic natural textures remain completely intact.',
    includes: [
      'Blemish Removal',
      'Skin Tone Balancing',
      'Texture Refinement',
      'Under-Eye Cleanup',
      'Minor Facial Distractions',
      'Natural Finishing'
    ],
    idealFor: ['Portraits', 'Weddings', 'Maternity', 'Kids']
  },
  {
    id: '04',
    category: 'Retouching & Cleanup',
    title: 'Premium Photo Retouching',
    shortLine: 'Detailed retouching for a polished final image.',
    desc: 'Every important detail is carefully refined to create a clean, professional, and visually balanced photograph with high-end magazine finish.',
    includes: [
      'Detailed Skin Cleanup',
      'Dodge & Burn',
      'Hair Refinement',
      'Clothing Cleanup',
      'Facial Detail Enhancement',
      'Light & Contrast Refinement',
      'Final Image Polishing'
    ],
    idealFor: ['Fashion', 'Commercial', 'Editorial', 'Studio Portraits']
  },
  {
    id: '05',
    category: 'Creative & Albums',
    title: 'Creative Retouching',
    shortLine: 'Creative ideas transformed into believable visuals.',
    desc: 'For photographs that need something beyond standard editing — creative enhancements, visual cleanup, and controlled image manipulation are used to create a unique final look.',
    includes: [
      'Object Removal',
      'Background Enhancement',
      'Creative Lighting',
      'Image Manipulation',
      'Atmospheric Effects',
      'Mood Enhancement',
      'Final Composition Refinement'
    ],
    idealFor: ['Concept Shoots', 'Commercial', 'Fine Art', 'Posters']
  },
  {
    id: '06',
    category: 'Retouching & Cleanup',
    title: 'Background Cleanup & Object Removal',
    shortLine: 'Removing distractions without disturbing the photograph.',
    desc: 'Unwanted objects, people, and distractions are carefully removed while maintaining realistic surroundings, natural shadows, and accurate perspective.',
    includes: [
      'Unwanted Object Removal',
      'Person Removal',
      'Background Cleanup',
      'Wire & Distraction Removal',
      'Edge Refinement',
      'Natural Reconstruction'
    ],
    idealFor: ['Destination Weddings', 'Crowded Venues', 'Outdoor Shoots']
  },
  {
    id: '07',
    category: 'Weddings & Color',
    title: 'Kids Photo Editing',
    shortLine: 'Soft, natural and joyful edits for precious moments.',
    desc: 'Kids photographs are enhanced with a gentle editing approach that keeps expressions, skin texture, and natural character completely authentic and untouched.',
    includes: [
      'Natural Skin Cleanup',
      'Color Correction',
      'Soft Tonal Enhancement',
      'Background Cleanup',
      'Minor Distraction Removal',
      'Final Polishing'
    ],
    idealFor: ['Kids Portraits', 'Newborn', 'Family', 'Birthdays']
  },
  {
    id: '08',
    category: 'Creative & Albums',
    title: 'Instagram Carousel Design',
    shortLine: 'Creative carousel designs made for photographers and brands.',
    desc: 'Professional multi-slide Instagram carousels designed to present photographs, stories, and creative work in a clean, high-engagement visual format.',
    includes: [
      '5–10 Slide Seamless Carousel',
      'Custom Graphic Layout',
      'Typography & Visual Hierarchy',
      'Strategic Photo Placement',
      'Brand Consistency',
      'Instagram-Ready Export'
    ],
    idealFor: ['Photographers', 'Content Creators', 'Creative Brands']
  },
  {
    id: '09',
    category: 'Creative & Albums',
    title: 'Luxury Album Design',
    shortLine: 'Elegant layouts that turn photographs into a visual story.',
    desc: 'Wedding photographs are arranged into sophisticated album spreads with balanced compositions, clean spacing, and a premium storytelling approach.',
    includes: [
      'Custom Album Layouts',
      'Photo Selection & Arrangement',
      'Story-Based Sequencing',
      'Elegant Typography',
      'Background & Design Elements',
      'Print-Ready Export'
    ],
    idealFor: ['Wedding Albums', 'Coffee Table Books', 'Portfolios']
  }
];

const categories = ['All', 'Weddings & Color', 'Retouching & Cleanup', 'Creative & Albums'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  // Freeze background page scroll & pause Lenis when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
    };
  }, [selectedService]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  const filteredServices = activeCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  const handleGetQuote = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const subjectInput = document.querySelector('input[name="subject"]');
      if (subjectInput) {
        subjectInput.value = `Inquiry: ${serviceTitle}`;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
    if (selectedService) setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-primary-black transition-colors duration-300 relative overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-[1px] bg-gold/60"></span>
            <h4 className="text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              Services
            </h4>
            <span className="w-8 h-[1px] bg-gold/60"></span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-white tracking-tight leading-tight max-w-3xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What I Create.
          </motion.h2>

          <motion.p 
            className="text-muted-purple text-sm md:text-base font-light max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* From complete wedding galleries to bespoke color grading, editorial skin retouching, and luxury album layouts. */}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gold text-primary-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-secondary-black/60 text-warm-white/70 hover:text-warm-white hover:bg-secondary-black border border-charcoal/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 9 Services Grid (Clean Typographic Luxury Cards, No Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group flex flex-col justify-between bg-secondary-black/40 backdrop-blur-sm border border-charcoal hover:border-gold/50 rounded-xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 p-6 md:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              
              <div>
                {/* Card Top Header: Number & Category Badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal/50">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl md:text-3xl font-bold text-gold tracking-tight">
                      {service.id}
                    </span>
                    <span className="h-4 w-[1px] bg-gold/40"></span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-warm-white/70 bg-primary-black/80 px-3 py-1 rounded-full border border-charcoal/70">
                    {service.category}
                  </span>
                </div>

                {/* Title & Short Line */}
                <h3 className="text-xl md:text-2xl font-heading text-warm-white group-hover:text-gold transition-colors duration-300 mb-2 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-4">
                  {service.shortLine}
                </p>
                
                <p className="text-sm text-muted-purple font-light leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Scope / Includes */}
                <div className="pt-4 border-t border-charcoal/50 mb-6">
                  <p className="text-[11px] font-semibold tracking-wider text-warm-white/90 uppercase mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Includes:
                  </p>
                  <ul className="space-y-2.5">
                    {service.includes.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-warm-white/80 font-light">
                        <svg className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.includes.length > 4 && (
                      <li className="pt-1">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="text-[11px] text-gold hover:text-gold-light tracking-wider uppercase font-medium flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          + {service.includes.length - 4} More Deliverables
                          <span className="text-xs">→</span>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Ideal For */}
                {service.idealFor && (
                  <div className="pt-3 border-t border-charcoal/40 mb-6">
                    <p className="text-[10px] uppercase tracking-wider text-muted-purple font-medium mb-2">Ideal For:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-primary-black/70 border border-charcoal/60 text-warm-white/70 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-charcoal/40 flex items-center gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded border border-charcoal hover:border-gold/60 text-warm-white/80 hover:text-gold text-xs uppercase tracking-wider transition-all duration-300 text-center font-medium cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleGetQuote(service.title)}
                  className="flex-1 py-2.5 px-3 rounded bg-gold/10 hover:bg-gold text-gold hover:text-primary-black border border-gold/40 text-xs uppercase tracking-wider transition-all duration-300 text-center font-semibold cursor-pointer shadow-sm"
                >
                  Get A Quote →
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner (matching user specification) */}
        <motion.div 
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-secondary-black via-primary-black to-secondary-black border border-charcoal relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block mb-2">
              Ready To Start?
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-warm-white mb-2">
              Let's create something worth remembering.
            </h3>
            <p className="text-sm text-muted-purple font-light leading-relaxed">
              Whether you need single image perfection or full event galleries edited to timeless consistency, get in touch for customized studio quotes.
            </p>
          </div>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-primary-black font-semibold text-xs tracking-[0.25em] uppercase rounded-md transition-all duration-300 shrink-0 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
          >
            Get A Quote →
          </a>
        </motion.div>

      </div>

      {/* Scope Details Modal with Background Scroll Lock */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overscroll-contain"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Box */}
            <motion.div 
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto overscroll-contain bg-secondary-black border border-gold/40 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10"
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-primary-black border border-charcoal hover:border-gold text-warm-white hover:text-gold flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Service Number & Category */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading text-gold font-bold text-xl">{selectedService.id}</span>
                <span className="text-[10px] tracking-widest uppercase text-muted-purple bg-primary-black px-2.5 py-1 rounded border border-charcoal/60">
                  {selectedService.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl md:text-3xl font-heading text-warm-white mb-2 pr-12">
                {selectedService.title}
              </h3>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-6">
                {selectedService.shortLine}
              </p>

              {/* Two Column Content on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Left Column: Description & Ideal For */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/80 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Service Overview
                  </h4>
                  <p className="text-sm text-muted-purple font-light leading-relaxed mb-6">
                    {selectedService.desc}
                  </p>

                  {selectedService.idealFor && (
                    <div className="p-4 rounded-xl bg-primary-black/60 border border-charcoal/60">
                      <span className="text-[10px] uppercase tracking-wider text-muted-purple font-semibold block mb-2.5">
                        Best Suited For:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.idealFor.map((item, idx) => (
                          <span key={idx} className="text-xs text-warm-white bg-secondary-black px-3 py-1 rounded-full border border-gold/20 font-light">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Complete Scope Deliverables */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/80 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Complete Deliverables:
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded bg-primary-black/60 border border-charcoal/50 text-xs text-warm-white/90">
                        <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal CTA */}
              <div className="pt-6 border-t border-charcoal flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-0.5">Ready To Start?</span>
                  <p className="text-xs text-warm-white/70">Let's create something worth remembering.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none px-5 py-3 rounded border border-charcoal hover:border-gold/60 text-warm-white/80 hover:text-gold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleGetQuote(selectedService.title)}
                    className="flex-1 sm:flex-none px-6 py-3 bg-gold hover:bg-gold-light text-primary-black font-semibold text-xs tracking-widest uppercase rounded transition-colors cursor-pointer shadow-md"
                  >
                    Get A Quote →
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Services;
