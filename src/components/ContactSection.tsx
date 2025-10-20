import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-primary' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-accent' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@imraunak.dev', color: 'hover:text-secondary' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's talk about it
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact form - Control Console UI */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <Card className="glass p-8 relative overflow-hidden"
                  style={{ 
                    boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 229, 255, 0.3)',
                    border: '1px solid rgba(0, 229, 255, 0.4)'
                  }}>
              {/* Holographic header */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
              
              {/* Corner indicators */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-accent" />
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-accent" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-accent" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-accent" />
              
              {/* Scanline effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                  <span className="text-xs text-accent font-mono uppercase tracking-wider">Communication Interface</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary font-mono">
                      [ IDENTITY ]
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your designation..."
                      required
                      className="glass-hover border-primary/30 focus:border-primary transition-all"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(0, 229, 255, 0.1)',
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary font-mono">
                      [ TRANSMISSION ID ]
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="signal@domain.sys"
                      required
                      className="glass-hover border-secondary/30 focus:border-secondary transition-all"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(138, 92, 255, 0.1)',
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-accent font-mono">
                      [ MESSAGE PAYLOAD ]
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Transmit your data packet here..."
                      required
                      rows={5}
                      className="glass-hover border-accent/30 focus:border-accent resize-none transition-all"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(0, 255, 198, 0.1)',
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" size="lg" className="w-full neon-glow relative overflow-hidden"
                            style={{ 
                              boxShadow: '0 0 30px rgba(0, 229, 255, 0.8)',
                              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))'
                            }}>
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <Send className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10 font-mono uppercase tracking-wider">Initiate Transmission</span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Contact info - Holographic panels */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              whileHover={{ z: 30, rotateY: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass p-8 relative overflow-hidden"
                    style={{ 
                      boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(138, 92, 255, 0.3)',
                      border: '1px solid rgba(138, 92, 255, 0.4)'
                    }}>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 pointer-events-none"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
                    <span className="text-xs text-secondary font-mono uppercase tracking-wider">Direct Channel</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-lg glass"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      border: '1px solid rgba(0, 229, 255, 0.3)',
                      boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)'
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(138, 92, 255, 0.2))',
                        boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)'
                      }}
                    >
                      <Mail className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-xs text-muted-foreground font-mono">CONTACT ID</div>
                      <div className="font-medium text-sm">contact@imraunak.dev</div>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Social links - Holographic grid */}
            <motion.div
              whileHover={{ z: 30, rotateY: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass p-8 relative overflow-hidden"
                    style={{ 
                      boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 255, 198, 0.3)',
                      border: '1px solid rgba(0, 255, 198, 0.4)'
                    }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                    <span className="text-xs text-accent font-mono uppercase tracking-wider">Network Links</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.1, z: 20 }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <Button
                            variant="outline"
                            className="glass-hover justify-start w-full"
                            asChild
                            style={{
                              border: '1px solid rgba(0, 255, 198, 0.3)',
                              boxShadow: '0 0 15px rgba(0, 255, 198, 0.2)'
                            }}
                          >
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                              <Icon className="w-4 h-4 mr-2" />
                              <span className="text-xs">{social.label}</span>
                            </a>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Status indicator - Animated */}
            <motion.div
              whileHover={{ z: 30, rotateY: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass p-8 relative overflow-hidden"
                    style={{ 
                      boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 229, 255, 0.3)',
                      border: '1px solid rgba(0, 229, 255, 0.4)'
                    }}>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono mb-1">AVG RESPONSE</div>
                    <div className="text-3xl font-bold gradient-text font-mono">24h</div>
                  </div>
                  <motion.div 
                    className="relative w-16 h-16"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-accent/30" />
                    <div className="absolute inset-2 rounded-full border-4 border-primary/50" />
                    <motion.div 
                      className="absolute inset-4 rounded-full bg-accent"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        boxShadow: '0 0 30px rgba(0, 255, 198, 0.8)'
                      }}
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
