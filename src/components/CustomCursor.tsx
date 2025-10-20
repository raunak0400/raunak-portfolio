import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particles
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-10); // Keep last 10 positions
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
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
      {/* Trail particles - comet effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ 
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary"
               style={{
                 boxShadow: '0 0 10px rgba(0, 229, 255, 0.8)',
                 opacity: 0.3 + (index / trail.length) * 0.7
               }} 
          />
        </motion.div>
      ))}
      
      {/* Main cursor core with glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.5,
        }}
      >
        <div className="w-4 h-4 rounded-full" 
             style={{
               background: 'radial-gradient(circle, rgba(0, 229, 255, 1) 0%, rgba(0, 229, 255, 0.8) 40%, rgba(0, 229, 255, 0) 70%)',
               boxShadow: '0 0 20px rgba(0, 229, 255, 1), 0 0 40px rgba(0, 229, 255, 0.6), 0 0 60px rgba(0, 229, 255, 0.3)'
             }}
        />
      </motion.div>
      
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary/60"
             style={{
               boxShadow: '0 0 15px rgba(0, 229, 255, 0.5), inset 0 0 10px rgba(0, 229, 255, 0.2)'
             }}
        />
      </motion.div>
      
      {/* Ambient glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2.5 : 1.5,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
        }}
      >
        <div className="w-12 h-12 rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(138, 92, 255, 0.4) 0%, rgba(138, 92, 255, 0.1) 50%, rgba(138, 92, 255, 0) 70%)'
             }}
        />
      </motion.div>
    </>
  );
};
