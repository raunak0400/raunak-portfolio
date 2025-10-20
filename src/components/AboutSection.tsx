import { motion } from 'framer-motion';
import { Code2, Sparkles, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const stats = [
    { label: 'Years Coding', value: '3+', icon: Code2 },
    { label: 'Projects', value: '20+', icon: Sparkles },
    { label: 'Technologies', value: '50+', icon: Target },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass glass-hover p-8 text-center h-full">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                Hi, I'm <span className="text-primary font-semibold">Raunak Kumar Jha</span>, a passionate and results-driven developer dedicated to building impactful digital experiences. I am currently pursuing a B.Tech in Computer Science Engineering at Gandhinagar University, complemented by a micro-credit program from IIT Guwahati to strengthen my technical expertise and industry exposure.
              </p>
              <p>
                My journey into technology began with curiosity—what started as experimenting with basic code quickly transformed into a deep passion for developing solutions that create real-world impact. Over time, I have honed my ability to think logically, solve complex problems, and build practical applications that combine both functionality and creativity.
              </p>
              <p>
                I firmly believe that technology is not just about coding; it is about understanding user needs, designing innovative solutions, and creating experiences that make a difference. Every project I work on is an opportunity to learn, adapt, and push my boundaries to become a better version of myself.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
