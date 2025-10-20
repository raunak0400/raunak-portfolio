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
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center neon-glow">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="glass glass-hover p-6">
                      <div className="text-primary font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
