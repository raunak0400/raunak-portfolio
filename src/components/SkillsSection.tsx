import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skills = [
  // Programming Languages
  { name: 'C', level: 'Expert', proficiency: 93, color: '#00599C', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', level: 'Expert', proficiency: 95, color: '#00599C', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', level: 'Intermediate', proficiency: 60, color: '#239120', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', level: 'Expert', proficiency: 96, color: '#3776AB', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', level: 'Expert', proficiency: 88, color: '#F7DF1E', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', level: 'Advanced', proficiency: 71, color: '#3178C6', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Go', level: 'Intermediate', proficiency: 56, color: '#00ADD8', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Kotlin', level: 'Intermediate', proficiency: 60, color: '#7F52FF', category: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  
  // Frontend
  { name: 'React', level: 'Expert', proficiency: 94, color: '#61DAFB', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', level: 'Expert', proficiency: 91, color: '#06B6D4', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'CSS3', level: 'Expert', proficiency: 89, color: '#1572B6', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'HTML5', level: 'Expert', proficiency: 85, color: '#E34F26', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Next.js', level: 'Intermediate', proficiency: 60, color: '#000000', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Angular', level: 'Intermediate', proficiency: 60, color: '#DD0031', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
  { name: 'Bootstrap', level: 'Advanced', proficiency: 70, color: '#7952B3', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  
  // Backend
  { name: 'Flask', level: 'Expert', proficiency: 96, color: '#000000', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Django', level: 'Expert', proficiency: 92, color: '#092E20', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Node.js', level: 'Expert', proficiency: 89, color: '#339933', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 'Advanced', proficiency: 76, color: '#000000', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'FastAPI', level: 'Advanced', proficiency: 72, color: '#009688', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'NestJS', level: 'Advanced', proficiency: 70, color: '#E0234E', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  
  // Database
  { name: 'MongoDB', level: 'Expert', proficiency: 92, color: '#47A248', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', level: 'Expert', proficiency: 92, color: '#4479A1', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', level: 'Advanced', proficiency: 70, color: '#336791', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Cassandra', level: 'Intermediate', proficiency: 48, color: '#1287B1', category: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
  
  // DevOps & Tools
  { name: 'GitHub', level: 'Expert', proficiency: 98, color: '#181717', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Git', level: 'Expert', proficiency: 90, color: '#F05032', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', level: 'Expert', proficiency: 89, color: '#2496ED', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', level: 'Advanced', proficiency: 80, color: '#326CE5', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GCP', level: 'Advanced', proficiency: 80, color: '#4285F4', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'AWS', level: 'Advanced', proficiency: 76, color: '#FF9900', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Jenkins', level: 'Intermediate', proficiency: 60, color: '#D24939', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Azure', level: 'Intermediate', proficiency: 56, color: '#0078D4', category: 'DevOps & Tools', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  
  // Other Tech Skills
  { name: 'Vercel', level: 'Expert', proficiency: 92, color: '#000000', category: 'Other Tech Skills', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'Netlify', level: 'Expert', proficiency: 90, color: '#00C7B7', category: 'Other Tech Skills', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  { name: 'Figma', level: 'Expert', proficiency: 89, color: '#F24E1E', category: 'Other Tech Skills', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Firebase', level: 'Expert', proficiency: 87, color: '#FFCA28', category: 'Other Tech Skills', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Postman', level: 'Expert', proficiency: 95, color: '#FF6C37', category: 'Other Tech Skills', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'PyTorch', level: 'Advanced', proficiency: 69, color: '#EE4C2C', category: 'Other Tech Skills', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Plotly', level: 'Advanced', proficiency: 68, color: '#3F4F75', category: 'Other Tech Skills', logo: 'https://www.vectorlogo.zone/logos/plot_ly/plot_ly-icon.svg' },
  { name: 'Pytest', level: 'Advanced', proficiency: 67, color: '#0A9EDC', category: 'Other Tech Skills', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
];

// Skill Item Component - Horizontal layout with logo left, text right
const SkillItem = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group flex items-center gap-4 p-3 rounded-xl"
      style={{
        background: isHovered 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'transparent',
        borderLeft: `2px solid ${isHovered ? skill.color : 'transparent'}`,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Skill Logo */}
      <motion.div
        className="relative w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
        style={{
          background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.1)`,
          border: `1px solid ${skill.color}40`,
          boxShadow: isHovered ? `0 0 20px ${skill.color}60` : 'none',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
      >
        <img 
          src={skill.logo} 
          alt={skill.name}
          className="w-8 h-8 object-contain"
        />
      </motion.div>

      {/* Skill Info */}
      <div className="flex-1 min-w-0">
        <h4 
          className="font-semibold text-sm md:text-base mb-0.5"
          style={{
            color: isHovered ? skill.color : 'hsl(var(--foreground))',
            textShadow: isHovered ? `0 0 10px ${skill.color}80` : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {skill.name}
        </h4>
        <p className="text-xs opacity-70 font-mono">
          {skill.level} • {skill.proficiency}%
        </p>
      </div>

      {/* Proficiency indicator */}
      <motion.div 
        className="w-16 h-1 rounded-full overflow-hidden bg-black/20 backdrop-blur-sm flex-shrink-0"
        style={{
          border: `1px solid ${skill.color}20`,
        }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            boxShadow: `0 0 8px ${skill.color}80`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Typewriter effect for title
const TypewriterTitle = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.h2 
      className="text-5xl md:text-7xl font-bold gradient-text relative inline-block mb-4"
      style={{
        textShadow: '0 0 60px hsl(187, 100%, 50%), 0 0 100px hsl(267, 100%, 68%)',
        fontFamily: '"Orbitron", monospace',
      }}
    >
      {displayText}
      <motion.span
        className="inline-block w-1 h-14 md:h-16 ml-2 bg-primary"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      
      {/* Glowing underline */}
      <motion.div
        className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
        style={{
          width: '100%',
          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--secondary))',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.h2>
  );
};

export const SkillsSection = () => {
  const categories = ['Programming Languages', 'Frontend', 'Backend', 'Database', 'DevOps & Tools', 'Other Tech Skills'];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 -z-10">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080820] to-black" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `hsl(${180 + i * 10}, 100%, ${50 + (i % 3) * 15}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 8px hsl(${180 + i * 10}, 100%, ${50 + (i % 3) * 15}%)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(187, 100%, 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(187, 100%, 50%) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <TypewriterTitle text="SKILL UNIVERSE" />
        </div>
        
        {/* Category Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: catIndex * 0.15,
                  type: "spring"
                }}
                className="relative group"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1200,
                }}
              >
                {/* Glassmorphic Panel */}
                <div 
                  className="relative rounded-3xl p-6 backdrop-blur-xl"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01)),
                      rgba(10, 10, 30, 0.4)
                    `,
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: `
                      0 8px 32px rgba(0, 0, 0, 0.4),
                      inset 0 0 60px rgba(0, 255, 198, 0.05),
                      0 0 40px rgba(0, 229, 255, 0.1)
                    `,
                  }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/60 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/60 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/60 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/60 rounded-br-2xl" />

                  {/* Category heading with floating effect */}
                  <motion.div
                    className="relative mb-6 pb-4 border-b border-white/10"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <h3 
                      className="text-lg md:text-xl font-bold text-center relative z-10"
                      style={{
                        color: 'hsl(var(--primary))',
                        textShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
                        fontFamily: '"Orbitron", monospace',
                      }}
                    >
                      {category}
                    </h3>
                    
                    {/* Glowing underline */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                      style={{
                        width: '60%',
                        boxShadow: '0 0 10px hsl(var(--primary))',
                      }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        width: ['50%', '70%', '50%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {categorySkills.map((skill, index) => (
                      <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>

                  {/* Holographic scanlines */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden opacity-10">
                    <motion.div
                      className="absolute inset-0"
                      style={{ 
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)',
                      }}
                      animate={{ y: ['-100%', '0%'] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0, 255, 198, 0.1), transparent 70%)',
                      transition: 'opacity 0.5s ease',
                    }}
                  />
                </div>

                {/* Depth shadow */}
                <div 
                  className="absolute inset-0 rounded-3xl -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.3), transparent 60%)',
                    transform: 'translateZ(-20px) scale(0.95)',
                    filter: 'blur(20px)',
                    opacity: 0.5,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Floating laser grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.1))',
              backgroundImage: `
                linear-gradient(rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 229, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom',
            }}
          />
        </div>
      </div>
    </section>
  );
};
