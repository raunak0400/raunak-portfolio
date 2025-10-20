import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const JourneySection = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Chaitanya School, Lekawada, Gandhinagar',
      description: 'Passed with Central Board of Secondary Education with 96%',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Omlandmark School, Mota Chiloda, Gandhinagar',
      description: 'Passed with Central Board of Secondary Education with 87% (Science stream)',
      icon: Award,
    },
    {
      year: 'Aug 2024 - Aug 2028',
      title: 'Gandhinagar Institute of Technology',
      description: "Bachelor's of Computer Science and Engineering",
      icon: GraduationCap,
    },
    {
      year: 'Sep 2024 - Sep 2025',
      title: 'Indian Institute of Technology Guwahati',
      description: 'Minor degree in computer science domain.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my academic achievements and learning milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, z: -100, rotateY: isEven ? -45 : 45 }}
                  whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                  style={{ perspective: '1000px' }}
                >
                  {/* Timeline node - Holographic */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.2, rotateZ: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center relative"
                         style={{ 
                           boxShadow: '0 0 40px rgba(0, 229, 255, 0.6), inset 0 0 20px rgba(0, 229, 255, 0.3)',
                           border: '2px solid rgba(0, 229, 255, 0.5)'
                         }}>
                      <Icon className="w-8 h-8 text-primary" />
                      {/* Orbital rings */}
                      <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-secondary/30 animate-pulse-glow" />
                    </div>
                  </motion.div>

                  {/* Content - 3D floating card */}
                  <motion.div 
                    className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
                    whileHover={{ 
                      z: 50,
                      rotateY: isEven ? 5 : -5,
                      rotateX: -5,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Card className="glass glass-hover p-6 relative overflow-hidden"
                          style={{ 
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(138, 92, 255, 0.3)',
                            border: '1px solid rgba(138, 92, 255, 0.3)'
                          }}>
                      {/* Holographic scanline effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 animate-shimmer pointer-events-none" />
                      
                      <div className="text-primary font-bold mb-2 text-lg">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2 gradient-text">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-accent" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-accent" />
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
