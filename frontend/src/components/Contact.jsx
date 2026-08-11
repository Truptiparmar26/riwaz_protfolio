import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.MODE === 'development'
        ? 'http://localhost:5000/api/v1/contact'
        : 'https://riwaz-protfolioo.onrender.com/api/v1/contact';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowToast(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setShowToast(false), 5000);
      } else {
        setErrorMessage(data.message || 'Unable to send your message right now. Please try again.');
        setErrorToast(true);
        setTimeout(() => setErrorToast(false), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Unable to send your message right now. Please try again.');
      setErrorToast(true);
      setTimeout(() => setErrorToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary-black relative overflow-hidden border-t border-charcoal">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            className="inline-flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-[1px] bg-gold hidden md:block"></span>
            <h4 className="text-gold text-xs uppercase tracking-[0.3em]">
              Get In Touch
            </h4>
            <span className="w-8 h-[1px] bg-gold hidden md:block"></span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 italic font-serif">Something</span> Timeless.
          </motion.h2>

          <motion.p 
            className="text-muted-purple font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's turn your raw footage into a cinematic reality. Tell me about your next project.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-5/12">
            <motion.div 
              className="space-y-6 text-muted-purple font-light text-lg bg-secondary-black/50 backdrop-blur-xl border border-charcoal p-6 md:p-12 rounded-2xl shadow-2xl hover:border-gold/30 transition-colors duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading text-warm-white mb-6 md:mb-8">Contact Details</h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="group flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-black border border-charcoal flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-500 shrink-0 shadow-inner">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] md:text-xs text-muted-purple uppercase tracking-widest mb-1 md:mb-2 font-medium">Email</span>
                    <a href="mailto:riwazstudioofficial@gmail.com" className="text-sm md:text-lg text-warm-white hover:text-gold transition-colors duration-300 block truncate">riwazstudioofficial@gmail.com</a>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-black border border-charcoal flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-500 shrink-0 shadow-inner">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] md:text-xs text-muted-purple uppercase tracking-widest mb-1 md:mb-2 font-medium">Phone / WhatsApp</span>
                    <a href="tel:8780464627" className="text-sm md:text-lg text-warm-white hover:text-gold transition-colors duration-300 block truncate">+91 87804 64627</a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-black border border-charcoal flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-500 shrink-0 shadow-inner">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] md:text-xs text-muted-purple uppercase tracking-widest mb-1 md:mb-2 font-medium">Instagram</span>
                    <a href="https://instagram.com/riwazstudio_" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg text-warm-white hover:text-gold transition-colors duration-300 block truncate">@riwazstudio_</a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-black border border-charcoal flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-500 shrink-0 shadow-inner">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                      <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] md:text-xs text-muted-purple uppercase tracking-widest mb-1 md:mb-2 font-medium">Availability</span>
                    <span className="text-sm md:text-lg text-warm-white block truncate">Mon-Sat, 10 AM - 7 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary-black/50 backdrop-blur-xl border border-charcoal p-8 md:p-12 rounded-2xl shadow-2xl hover:border-gold/30 transition-colors duration-500"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs text-muted-purple uppercase tracking-[0.2em] pl-1 font-semibold">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-primary-black border-b border-charcoal px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder-muted-purple/50 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs text-muted-purple uppercase tracking-[0.2em] pl-1 font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-primary-black border-b border-charcoal px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder-muted-purple/50 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs text-muted-purple uppercase tracking-[0.2em] pl-1 font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      required
                      placeholder="(123) 456-7890"
                      className="w-full bg-primary-black border-b border-charcoal px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder-muted-purple/50 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs text-muted-purple uppercase tracking-[0.2em] pl-1 font-semibold">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full bg-primary-black border-b border-charcoal px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder-muted-purple/50 font-light"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs text-muted-purple uppercase tracking-[0.2em] pl-1 font-semibold">Project Details</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project vision, timeline, and deliverables..."
                    className="w-full bg-primary-black border-b border-charcoal px-4 py-3 text-warm-white focus:outline-none focus:border-gold transition-colors duration-300 placeholder-muted-purple/50 font-light resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 mt-4 relative overflow-hidden group border border-gold bg-transparent text-gold font-heading tracking-[0.3em] uppercase text-sm hover:text-primary-black transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]"></span>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-gold/30 border-t-gold rounded-full animate-spin group-hover:border-primary-black/30 group-hover:border-t-primary-black"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-50 bg-glass backdrop-blur-md border border-gold/30 p-6 shadow-2xl max-w-sm rounded-xl"
          >
            <h4 className="text-gold font-heading text-xl mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Message Sent
            </h4>
            <p className="text-sm text-warm-white font-light">
              Thank you for contacting Riwaz Studio. We'll get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Toast */}
      <AnimatePresence>
        {errorToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-50 bg-glass backdrop-blur-md border border-red-500/50 p-6 shadow-2xl max-w-sm rounded-xl"
          >
            <h4 className="text-red-400 font-heading text-xl mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Sending Failed
            </h4>
            <p className="text-sm text-warm-white font-light">
              {errorMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
