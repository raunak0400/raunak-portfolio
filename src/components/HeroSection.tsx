import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3D } from './Hero3D';
import { Suspense, useEffect, useState } from 'react';

export const HeroSection = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scanline" 
             style={{ backgroundSize: '100% 4px', height: '100%' }} />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -100, z: -100 }}
            animate={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              transformPerspective: 1000,
            }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 relative"
            >
              <h1 className={`text-5xl md:text-7xl font-bold leading-tight relative ${isGlitching ? 'glitch' : ''}`}>
                <span className="relative inline-block">
                  Hi, I'm{' '}
                  <span className="gradient-text neon-text relative" style={{ textShadow: '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--primary) / 0.4)' }}>
                    Raunak Kumar Jha
                  </span>
                </span>
                {isGlitching && (
                  <>
                    <span className="absolute top-0 left-0 text-primary opacity-70" style={{ transform: 'translate(-2px, -2px)' }}>
                      Hi, I'm <span className="gradient-text">Raunak Kumar Jha</span>
                    </span>
                    <span className="absolute top-0 left-0 text-secondary opacity-70" style={{ transform: 'translate(2px, 2px)' }}>
                      Hi, I'm <span className="gradient-text">Raunak Kumar Jha</span>
                    </span>
                  </>
                )}
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Building futuristic experiences with code and creativity.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, z: 20 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg" 
                  className="magnetic-button glass-hover bg-primary hover:bg-primary text-primary-foreground font-semibold px-8 relative overflow-hidden group"
                  onClick={scrollToProjects}
                  style={{ 
                    boxShadow: '0 0 30px hsl(var(--primary) / 0.5), 0 10px 40px hsl(var(--primary) / 0.3)',
                  }}
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, z: 20 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="magnetic-button glass-hover border-primary/50 hover:bg-primary/10 backdrop-blur-xl"
                  onClick={scrollToContact}
                  style={{ 
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, z: 20 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="magnetic-button glass-hover border-accent/50 hover:bg-accent/10 backdrop-blur-xl"
                  asChild
                  style={{ 
                    boxShadow: '0 0 20px hsl(var(--accent) / 0.3)',
                  }}
                >
                  <a href="/assets/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                <span>Open to opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, z: -200 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.9, 0.1, 1] }}
            className="relative h-[500px] lg:h-[600px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="absolute inset-0 glass rounded-3xl overflow-hidden"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 60px hsl(var(--primary) / 0.4), 0 0 120px hsl(var(--secondary) / 0.2)',
              }}
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-background/50 backdrop-blur-xl">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-secondary border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
                  </div>
                </div>
              }>
                <Hero3D />
              </Suspense>
            </motion.div>
            
            {/* Hologram scan lines */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scanline-slow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - laser pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-sm text-primary font-mono uppercase tracking-widest">Scroll</span>
          </div>
          <motion.div
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-primary" style={{ filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
