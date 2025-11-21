import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[59] blur-md"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
          opacity: 0.5
        }}
      />
    </>
  );
};
