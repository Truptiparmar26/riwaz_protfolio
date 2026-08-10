import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const mockBlogs = [
  {
    id: 1,
    title: "The Art of Cinematic Color Grading in Portraits",
    category: "Technique",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Retaining Skin Texture: The Frequency Separation Method",
    category: "Tutorial",
    date: "Jul 22, 2026",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Why High-End E-Commerce Needs Manual Retouching",
    category: "Industry",
    date: "Jun 10, 2026",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-secondary-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h4 
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Journal
            </motion.h4>
            <motion.h2 
              className="text-4xl md:text-5xl font-heading text-warm-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Latest Insights.
            </motion.h2>
          </div>
          
          <motion.a 
            href="#"
            className="hidden md:flex items-center text-sm uppercase tracking-wider text-muted-purple hover:text-gold transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View All <BsArrowRight className="ml-2" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBlogs.map((blog, index) => (
            <motion.article 
              key={blog.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center text-xs text-gold uppercase tracking-widest mb-3 gap-4">
                <span>{blog.category}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="text-muted-purple">{blog.date}</span>
              </div>
              <h3 className="text-xl font-heading text-warm-white group-hover:text-gold transition-colors duration-300">
                {blog.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
