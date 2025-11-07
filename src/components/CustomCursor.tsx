import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    
    // Throttle mouse movement to 60fps max
    const updateMousePosition = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdateRef.current < 16) return; // ~60fps
      lastUpdateRef.current = now;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor core with glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 300 },
        }}
      >
        <div className="w-4 h-4 rounded-full" 
             style={{
               background: 'radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 40%, transparent 70%)',
               boxShadow: '0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary) / 0.5)'
             }}
        />
      </motion.div>
      
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 15, stiffness: 200 },
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary/50"
             style={{
               boxShadow: '0 0 10px hsl(var(--primary) / 0.4)'
             }}
        />
      </motion.div>
    </>
  );
};
