import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import WhyRiwaz from '../components/WhyRiwaz';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navbar />
      <Hero />
      <Introduction />
      <About />
      <Services />
      <Gallery />
      <Process />
      <WhyRiwaz />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
