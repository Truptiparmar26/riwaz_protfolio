import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: 'Neon Nights',
    category: 'VIDEO',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1920&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: '2',
    title: 'Urban Explorer',
    category: 'PHOTO',
    image: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203?q=80&w=1920&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    id: '3',
    title: 'The Golden Hour',
    category: 'COLOR',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    id: '4',
    title: 'Brand Anthem',
    category: 'MOTION',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1920&auto=format&fit=crop',
    span: 'col-span-1 row-span-2'
  },
  {
    id: '5',
    title: 'Fashion Week',
    category: 'REELS',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];

const categories = ['ALL', 'VIDEO', 'PHOTO', 'REELS', 'MOTION', 'COLOR'];

const FeaturedWork = () => {
  const [filter, setFilter] = useState('ALL');
  const navigate = useNavigate();

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h4 
            className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-5xl font-heading text-warm-white max-w-2xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A collection of visuals shaped through editing, timing and creative direction.
          </motion.h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative ${
                filter === cat ? 'text-gold' : 'text-muted-purple hover:text-warm-white'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className={`relative overflow-hidden group cursor-pointer ${project.span}`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-primary-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="text-gold text-xs uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-heading text-warm-white mb-6">{project.title}</h3>
                    <div className="flex items-center text-warm-white text-xs tracking-widest uppercase gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>View Project</span>
                      <span className="w-8 h-[1px] bg-gold block"></span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
