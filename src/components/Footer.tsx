import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-primary/20">
      {/* Animated background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Raunak Kumar Jha</h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Let's Work Together</h4>
            <p className="text-muted-foreground text-sm">
              Open to exciting opportunities and collaborations
            </p>
            <Button
              variant="outline"
              className="glass-hover border-primary/50"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>© 2024 Raunak Kumar Jha. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Designed & built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-glow" />
            <span>using React & Lovable</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
