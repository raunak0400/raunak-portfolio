import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  { name: 'All', count: 52 },
  { name: 'Programming', count: 9 },
  { name: 'Frontend', count: 9 },
  { name: 'Backend', count: 4 },
  { name: 'Database', count: 4 },
  { name: 'DevOps', count: 8 },
];

const skills = [
  { name: 'Python', category: 'Programming', proficiency: 96, description: 'Backend development, automation, and AI/ML', icon: '🐍' },
  { name: 'C++', category: 'Programming', proficiency: 95, description: 'Object-oriented programming and system development', icon: '⚙️' },
  { name: 'React', category: 'Frontend', proficiency: 94, description: 'Building interactive UIs with hooks and modern patterns', icon: '⚛️' },
  { name: 'C', category: 'Programming', proficiency: 93, description: 'System programming and embedded development', icon: '©️' },
  { name: 'MongoDB', category: 'Database', proficiency: 92, description: 'NoSQL database management', icon: '🍃' },
  { name: 'MySQL', category: 'Database', proficiency: 92, description: 'Database design and optimization', icon: '🗄️' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 91, description: 'Utility-first CSS framework', icon: '💨' },
  { name: 'Git', category: 'DevOps', proficiency: 90, description: 'Version control and collaboration', icon: '📝' },
  { name: 'Node.js', category: 'Backend', proficiency: 89, description: 'Server-side JavaScript development', icon: '📗' },
  { name: 'Docker', category: 'DevOps', proficiency: 89, description: 'Containerization and deployment', icon: '🐳' },
  { name: 'JavaScript', category: 'Programming', proficiency: 88, description: 'ES6+ features and modern JavaScript patterns', icon: '📜' },
  { name: 'HTML5', category: 'Frontend', proficiency: 85, description: 'Semantic markup and accessibility', icon: '🌐' },
  { name: 'AWS', category: 'DevOps', proficiency: 76, description: 'Amazon Web Services cloud platform', icon: '☁️' },
  { name: 'Flask', category: 'Backend', proficiency: 96, description: 'Lightweight Python web framework', icon: '🌶️' },
  { name: 'TypeScript', category: 'Programming', proficiency: 71, description: 'Type-safe JavaScript development', icon: '📘' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 70, description: 'Relational database management', icon: '🐘' },
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const averageProficiency = Math.round(
    skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length
  );

  return (
    <section id="skills" className="py-24 relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            A comprehensive overview of my technical expertise
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Card className="glass p-4">
              <div className="text-3xl font-bold gradient-text">{averageProficiency}%</div>
              <div className="text-sm text-muted-foreground">Average Proficiency</div>
            </Card>
            <Card className="glass p-4">
              <div className="text-3xl font-bold gradient-text">{skills.length}</div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </Card>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? 'default' : 'outline'}
              className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                selectedCategory === category.name
                  ? 'bg-primary text-primary-foreground neon-glow'
                  : 'glass-hover border-primary/30'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </motion.div>

        {/* Skills grid - 3D floating cubes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, rotateY: -90, z: -200 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                rotateY: 15,
                rotateX: 10,
                z: 60,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass glass-hover p-6 h-full relative overflow-hidden group"
                    style={{ 
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.2)',
                      border: '1px solid rgba(0, 229, 255, 0.3)'
                    }}>
                {/* Holographic scanline */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent pointer-events-none"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* 3D icon container */}
                <motion.div 
                  className="text-5xl mb-4 flex items-center justify-center h-20"
                  whileHover={{ 
                    rotateY: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.8 }}
                  style={{
                    textShadow: '0 0 20px rgba(0, 229, 255, 0.6)',
                    transform: 'translateZ(30px)'
                  }}
                >
                  {skill.icon}
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold gradient-text">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs"
                           style={{
                             background: 'rgba(138, 92, 255, 0.2)',
                             border: '1px solid rgba(138, 92, 255, 0.4)'
                           }}>
                      {skill.proficiency}%
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3">{skill.description}</p>

                  {/* Holographic proficiency bar */}
                  <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 229, 255, 0.6)'
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  <div className="mt-2 text-xs text-primary font-mono">
                    {skill.category}
                  </div>
                </div>
                
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-accent/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-accent/50" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
