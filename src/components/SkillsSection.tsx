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
  { name: 'Python', category: 'Programming', proficiency: 96, description: 'Backend development, automation, and AI/ML' },
  { name: 'C++', category: 'Programming', proficiency: 95, description: 'Object-oriented programming and system development' },
  { name: 'React', category: 'Frontend', proficiency: 94, description: 'Building interactive UIs with hooks and modern patterns' },
  { name: 'C', category: 'Programming', proficiency: 93, description: 'System programming and embedded development' },
  { name: 'MongoDB', category: 'Database', proficiency: 92, description: 'NoSQL database management' },
  { name: 'MySQL', category: 'Database', proficiency: 92, description: 'Database design and optimization' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 91, description: 'Utility-first CSS framework' },
  { name: 'Git', category: 'DevOps', proficiency: 90, description: 'Version control and collaboration' },
  { name: 'Node.js', category: 'Backend', proficiency: 89, description: 'Server-side JavaScript development' },
  { name: 'Docker', category: 'DevOps', proficiency: 89, description: 'Containerization and deployment' },
  { name: 'JavaScript', category: 'Programming', proficiency: 88, description: 'ES6+ features and modern JavaScript patterns' },
  { name: 'HTML5', category: 'Frontend', proficiency: 85, description: 'Semantic markup and accessibility' },
  { name: 'AWS', category: 'DevOps', proficiency: 76, description: 'Amazon Web Services cloud platform' },
  { name: 'Flask', category: 'Backend', proficiency: 96, description: 'Lightweight Python web framework' },
  { name: 'TypeScript', category: 'Programming', proficiency: 71, description: 'Type-safe JavaScript development' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 70, description: 'Relational database management' },
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

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass glass-hover p-6 h-full relative overflow-hidden group">
                {/* Proficiency background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"
                  style={{ width: `${skill.proficiency}%` }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.proficiency}%
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>

                  {/* Proficiency bar */}
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>

                  <div className="mt-2 text-xs text-muted-foreground">
                    {skill.category}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
