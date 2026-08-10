import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Look for data-cursor attribute up the DOM tree
      const cursorElement = target.closest('[data-cursor]');
      
      if (cursorElement) {
        const type = cursorElement.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorVariant('view');
          setCursorText('VIEW');
        } else if (type === 'open') {
          setCursorVariant('open');
          setCursorText('OPEN');
        }
      } else if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'rgba(234, 219, 200, 0.5)', // warm-white semi-transparent
      border: '1px solid rgba(234, 219, 200, 1)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(234, 219, 200, 0.1)',
      border: '1px solid rgba(234, 219, 200, 0.5)',
      mixBlendMode: 'difference',
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: 'rgba(212, 175, 55, 0.9)', // gold
      border: 'none',
      mixBlendMode: 'normal',
    },
    open: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: 'rgba(234, 219, 200, 0.9)', // warm-white
      border: 'none',
      mixBlendMode: 'normal',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-[10px] font-heading font-bold tracking-widest text-primary-black"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {(cursorVariant === 'view' || cursorVariant === 'open') && (
        <span className="opacity-100 transition-opacity duration-300">{cursorText}</span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
