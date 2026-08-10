import { motion } from 'framer-motion';

const tools = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "DaVinci Resolve",
  "Cinema 4D"
];

const Tools = () => {
  return (
    <section className="py-24 bg-primary-black border-t border-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="w-full md:w-1/3">
            <motion.h4 
              className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The Tools
            </motion.h4>
            <motion.h2 
              className="text-3xl font-heading text-warm-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Software & Workflow.
            </motion.h2>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal group-hover:bg-gold transition-colors duration-300"></div>
                  <span className="text-muted-purple text-sm tracking-wider uppercase group-hover:text-warm-white transition-colors duration-300">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tools;
