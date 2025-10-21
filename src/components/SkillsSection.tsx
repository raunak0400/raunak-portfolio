import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

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

// Holographic Skill Card Component
const HologramSkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 150, damping: 25 });
  const z = useSpring(isHovered ? 40 : 0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Get neon glow color based on proficiency
  const getGlowColor = () => {
    if (skill.proficiency >= 90) return '#00FFC6';
    if (skill.proficiency >= 70) return '#00E5FF';
    if (skill.proficiency >= 50) return '#8A5CFF';
    return '#FF6B9D';
  };

  const glowColor = getGlowColor();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateX: -30, z: -100 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.03,
        type: "spring",
        stiffness: 120
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
    >
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          z,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic glass card */}
        <motion.div
          className="relative glass rounded-2xl p-6 border-2 overflow-hidden backdrop-blur-xl"
          style={{
            borderColor: isHovered ? glowColor : `${glowColor}40`,
            boxShadow: isHovered 
              ? `0 0 50px ${glowColor}80, 0 20px 60px rgba(0,0,0,0.4), inset 0 0 30px ${glowColor}20`
              : `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${glowColor}30`,
            background: `
              radial-gradient(circle at top left, ${glowColor}08, transparent 60%),
              radial-gradient(circle at bottom right, ${skill.color}05, transparent 60%),
              rgba(10, 10, 30, 0.4)
            `,
          }}
          animate={{
            borderColor: isHovered ? [glowColor, `${glowColor}60`, glowColor] : `${glowColor}40`,
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        >
          {/* Skill logo with holographic effect */}
          <motion.div
            className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center"
            animate={{
              rotateY: isHovered ? [0, 15, -15, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            style={{
              filter: `drop-shadow(0 0 20px ${glowColor}) drop-shadow(0 0 40px ${skill.color}80)`,
            }}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain"
              style={{
                filter: isHovered ? 'brightness(1.3) contrast(1.2)' : 'brightness(1.1)',
              }}
            />
            
            {/* Rotating hologram ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 opacity-40"
              style={{ borderColor: glowColor }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
          </motion.div>
          
          {/* Skill name with neon glow */}
          <motion.h3 
            className="text-lg md:text-xl font-bold text-center mb-2 relative z-10"
            style={{ 
              color: glowColor,
              textShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}60`,
            }}
          >
            {skill.name}
          </motion.h3>

          {/* Proficiency level */}
          <motion.p 
            className="text-sm text-center font-mono mb-3 opacity-90"
            style={{ 
              color: glowColor,
            }}
          >
            {skill.level}
          </motion.p>

          {/* Proficiency bar */}
          <div className="relative h-2 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${glowColor})`,
                boxShadow: `0 0 15px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.3)`,
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1.5, delay: index * 0.03 }}
            />
            
            {/* Scanning light effect */}
            <motion.div
              className="absolute inset-y-0 w-8"
              style={{
                background: `linear-gradient(90deg, transparent, ${glowColor}80, transparent)`,
              }}
              animate={{
                x: ['-100%', '400%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />
          </div>

          {/* Proficiency percentage */}
          <motion.div 
            className="text-xs text-center mt-2 font-mono"
            style={{ color: `${glowColor}80` }}
          >
            {skill.proficiency}%
          </motion.div>

          {/* Holographic scanlines */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-20">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ 
                height: '200%', 
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
              }}
              animate={{ y: ['-100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-60" style={{ borderColor: glowColor }} />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-60" style={{ borderColor: glowColor }} />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-60" style={{ borderColor: glowColor }} />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-60" style={{ borderColor: glowColor }} />
        </motion.div>

        {/* Back face depth glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${glowColor}40, transparent 70%)`,
            transform: 'translateZ(-30px)',
            filter: 'blur(30px)',
            opacity: isHovered ? 0.9 : 0.4,
          }}
        />

        {/* Floating particles around card */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: glowColor,
                  boxShadow: `0 0 10px ${glowColor}`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 90 * Math.PI) / 180) * 80, 0],
                  y: [0, Math.sin((i * 90 * Math.PI) / 180) * 80, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}
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
      className="text-6xl md:text-8xl font-bold gradient-text relative inline-block"
      style={{
        textShadow: '0 0 60px hsl(187, 100%, 50%), 0 0 100px hsl(267, 100%, 68%)',
        fontFamily: '"Orbitron", monospace',
      }}
    >
      {displayText}
      <motion.span
        className="inline-block w-1 h-16 md:h-20 ml-2 bg-primary"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      
      {/* Glowing underline */}
      <motion.div
        className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
        style={{
          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--secondary))',
        }}
        initial={{ width: 0 }}
        animate={{ width: `${(displayText.length / text.length) * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </motion.h2>
  );
};

export const SkillsSection = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Programming Languages', 'Frontend', 'Backend', 'Database', 'DevOps & Tools', 'Other Tech Skills'];
  
  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Floating 3D particles background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `hsl(${180 + Math.random() * 100}, 100%, ${50 + Math.random() * 30}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 15px hsl(${180 + Math.random() * 100}, 100%, 60%)`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 50, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5 + Math.random(), 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Depth fog layers */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 20% 30%, hsl(187, 100%, 50%) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 80% 70%, hsl(267, 100%, 68%) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-center mb-20 relative"
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          <TypewriterTitle text="SKILL UNIVERSE" />
          
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto font-mono text-lg mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              textShadow: '0 0 10px hsl(var(--primary) / 0.3)',
            }}
          >
            // Futuristic 3D holographic workstation — where Raunak's skills are displayed like an AI control system
          </motion.p>

          {/* Holographic light projection */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-2"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary)) 20%, hsl(var(--secondary)) 50%, hsl(var(--accent)) 80%, transparent)',
              boxShadow: '0 0 40px hsl(var(--primary)), 0 0 80px hsl(var(--secondary))',
              filter: 'blur(2px)',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* 3D Category Filter Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-20 flex-wrap px-4"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`glass px-6 py-3 rounded-xl font-mono text-sm border-2 relative overflow-hidden backdrop-blur-lg ${
                filter === category 
                  ? 'border-primary text-primary' 
                  : 'border-primary/20 text-muted-foreground hover:border-primary/50'
              }`}
              style={{
                boxShadow: filter === category 
                  ? '0 0 40px hsl(var(--primary) / 0.6), 0 10px 30px rgba(0,0,0,0.4)' 
                  : '0 5px 15px rgba(0,0,0,0.3)',
                background: filter === category
                  ? 'radial-gradient(circle at center, hsl(var(--primary) / 0.15), transparent)'
                  : 'rgba(10, 10, 30, 0.3)',
              }}
              initial={{ opacity: 0, x: -20, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 0 50px hsl(var(--primary) / 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
              
              {/* Active indicator */}
              {filter === category && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeCategory"
                  style={{
                    boxShadow: '0 0 10px hsl(var(--primary))',
                  }}
                />
              )}
              
              {/* Scanline effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Holographic Skill Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <HologramSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Floating 3D laser grid floor */}
        <div className="absolute bottom-20 left-0 right-0 h-64 opacity-20 pointer-events-none" style={{ perspective: '1000px' }}>
          <motion.div 
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg)',
            }}
          >
            {/* Horizontal lines */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{
                  top: `${i * 10}%`,
                  background: 'linear-gradient(90deg, transparent, hsl(var(--primary)) 50%, transparent)',
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px"
                style={{
                  left: `${i * 8.33}%`,
                  background: 'linear-gradient(180deg, transparent, hsl(var(--secondary)) 50%, transparent)',
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Rotating 3D micro-particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `hsl(${180 + Math.random() * 80}, 100%, 60%)`,
                boxShadow: `0 0 20px hsl(${180 + Math.random() * 80}, 100%, 60%)`,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
