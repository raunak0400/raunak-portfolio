import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with natural language processing capabilities.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
    tags: ['Python', 'Flask', 'PyTorch', 'WebSocket'],
    github: '#',
    live: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics and custom reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'PostgreSQL', 'AWS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management tool with team workflows and project tracking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Docker'],
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'Modern social networking platform with real-time feeds and media sharing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'MongoDB', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'Real-time weather application with location-based forecasts and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'API', 'Tailwind', 'Chart.js'],
    github: '#',
    live: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '2000px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, rotateX: -30, z: -200 }}
              whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                rotateY: 8,
                rotateX: -5,
                z: 80,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass glass-hover overflow-hidden h-full group relative"
                    style={{ 
                      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(138, 92, 255, 0.3)',
                      border: '1px solid rgba(138, 92, 255, 0.4)'
                    }}>
                {/* Holographic frame effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-shimmer" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-shimmer" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-shimmer" />
                </div>
                
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Scanline effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent"
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Hover overlay with buttons - enhanced holographic */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" className="neon-glow" asChild
                              style={{ boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)' }}>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotateZ: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" variant="outline" className="glass-hover" asChild
                              style={{ 
                                border: '1px solid rgba(138, 92, 255, 0.5)',
                                boxShadow: '0 0 15px rgba(138, 92, 255, 0.5)'
                              }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project details - enhanced */}
                <div className="p-6 relative">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                  
                  <h3 className="text-xl font-bold mb-2 gradient-text relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 relative z-10">
                    {project.description}
                  </p>

                  {/* Tech stack - enhanced badges */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="secondary" className="text-xs"
                               style={{
                                 background: 'rgba(138, 92, 255, 0.2)',
                                 border: '1px solid rgba(138, 92, 255, 0.4)',
                                 boxShadow: '0 0 10px rgba(138, 92, 255, 0.3)'
                               }}>
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-primary/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-primary/50" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
