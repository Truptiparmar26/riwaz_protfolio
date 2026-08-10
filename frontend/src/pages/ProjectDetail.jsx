import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projectData = {
  '1': {
    title: 'Neon Nights',
    client: 'Vogue Magazine',
    category: 'VIDEO',
    year: '2025',
    role: 'Lead Editor & Colorist',
    tools: 'Premiere Pro, DaVinci Resolve',
    heroImage: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1920&auto=format&fit=crop',
    objective: 'Create a highly energetic, neon-infused editorial video that highlights the futuristic fashion line.',
    approach: 'We focused on rhythmic editing to match the synth-wave soundtrack, utilizing split screens and dynamic speed ramps.',
    result: 'A 60-second visual feast that increased client engagement by 300% across social platforms.',
    gallery: [
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1920&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1920&auto=format&fit=crop'
    ],
    prev: '5',
    next: '2'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate fetching project
    if (projectData[id]) {
      setProject(projectData[id]);
    } else {
      // Fallback for demo
      setProject(projectData['1']);
    }
  }, [id]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-primary-black text-warm-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden pt-24">
        <motion.img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="container mx-auto"
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Meta Info */}
      <section className="py-16 border-b border-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div>
              <span className="text-xs text-muted-purple uppercase tracking-widest block mb-2">Client</span>
              <p className="font-light">{project.client}</p>
            </div>
            <div>
              <span className="text-xs text-muted-purple uppercase tracking-widest block mb-2">Year</span>
              <p className="font-light">{project.year}</p>
            </div>
            <div>
              <span className="text-xs text-muted-purple uppercase tracking-widest block mb-2">Role</span>
              <p className="font-light">{project.role}</p>
            </div>
            <div>
              <span className="text-xs text-muted-purple uppercase tracking-widest block mb-2">Tools Used</span>
              <p className="font-light">{project.tools}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h3 className="text-sm text-gold uppercase tracking-[0.2em] mb-6">Creative Objective</h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-purple">{project.objective}</p>
            </div>
            <div>
              <h3 className="text-sm text-gold uppercase tracking-[0.2em] mb-6">Editing Approach</h3>
              <p className="text-lg font-light leading-relaxed text-muted-purple">{project.approach}</p>
            </div>
            <div>
              <h3 className="text-sm text-gold uppercase tracking-[0.2em] mb-6">Final Result</h3>
              <p className="text-lg font-light leading-relaxed text-muted-purple">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-8">
            {project.gallery.map((img, idx) => (
              <motion.img 
                key={idx}
                src={img} 
                alt={`${project.title} - ${idx}`}
                className="w-full aspect-video object-cover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-charcoal bg-secondary-black">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to={`/project/${project.prev}`} className="group flex items-center gap-4">
            <span className="w-12 h-[1px] bg-charcoal group-hover:bg-gold transition-colors duration-300"></span>
            <span className="text-sm tracking-widest uppercase text-muted-purple group-hover:text-warm-white transition-colors duration-300">Previous Project</span>
          </Link>
          <Link to={`/project/${project.next}`} className="group flex items-center gap-4">
            <span className="text-sm tracking-widest uppercase text-muted-purple group-hover:text-warm-white transition-colors duration-300">Next Project</span>
            <span className="w-12 h-[1px] bg-charcoal group-hover:bg-gold transition-colors duration-300"></span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
