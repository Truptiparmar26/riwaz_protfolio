import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// Pages & Components
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling setup with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate preloader
    // Preloader takes care of its own timer and calls setLoading(false)
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <CustomCursor />
        <AnimatePresence mode="wait">
          {loading && <Preloader setLoading={setLoading} />}
        </AnimatePresence>
        {!loading && (
          <div className="app-container font-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
