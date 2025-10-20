import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3D } from './Hero3D';
import { Suspense } from 'react';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Raunak Kumar Jha
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                An aspiring Full Stack Developer passionate about building sleek web experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="glass-hover bg-primary hover:bg-primary text-primary-foreground font-semibold px-8 neon-glow"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-hover border-primary/50 hover:bg-primary/10"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-hover border-accent/50 hover:bg-accent/10"
                asChild
              >
                <a href="/assets/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <Hero3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
