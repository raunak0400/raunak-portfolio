import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code2, Database, Layers, Palette, Server, Smartphone, Cpu, Cloud, GitBranch, Terminal, Wrench, Zap } from 'lucide-react';
import { useState, useRef } from 'react';

const skills = [
  { name: 'Python', icon: Code2, level: 'Expert', color: '#FFD700', category: 'Programming' },
  { name: 'C++', icon: Terminal, level: 'Expert', color: '#00E5FF', category: 'Programming' },
  { name: 'React', icon: Code2, level: 'Expert', color: '#00FFC6', category: 'Frontend' },
  { name: 'JavaScript', icon: Zap, level: 'Expert', color: '#FFD700', category: 'Programming' },
  { name: 'TypeScript', icon: Terminal, level: 'Advanced', color: '#8A5CFF', category: 'Programming' },
  { name: 'HTML5', icon: Code2, level: 'Expert', color: '#FF6B9D', category: 'Frontend' },
  { name: 'CSS3', icon: Palette, level: 'Expert', color: '#00FFC6', category: 'Frontend' },
  { name: 'Tailwind', icon: Layers, level: 'Expert', color: '#00E5FF', category: 'Frontend' },
  { name: 'Node.js', icon: Server, level: 'Advanced', color: '#00FF00', category: 'Backend' },
  { name: 'Flask', icon: Server, level: 'Expert', color: '#FFD700', category: 'Backend' },
  { name: 'MongoDB', icon: Database, level: 'Expert', color: '#00FF00', category: 'Database' },
  { name: 'MySQL', icon: Database, level: 'Expert', color: '#00E5FF', category: 'Database' },
  { name: 'PostgreSQL', icon: Database, level: 'Advanced', color: '#8A5CFF', category: 'Database' },
  { name: 'Git', icon: GitBranch, level: 'Expert', color: '#FF6B9D', category: 'DevOps' },
  { name: 'Docker', icon: Cloud, level: 'Advanced', color: '#00E5FF', category: 'DevOps' },
  { name: 'AWS', icon: Cloud, level: 'Advanced', color: '#FFD700', category: 'DevOps' },
];

const SkillCube = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), { stiffness: 100, damping: 20 });
  const z = useSpring(isHovered ? 50 : 0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cubeRef.current) return;
    const rect = cubeRef.current.getBoundingClientRect();
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

  return (
    <motion.div
      ref={cubeRef}
      initial={{ opacity: 0, scale: 0, z: -200 }}
      whileInView={{ opacity: 1, scale: 1, z: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative w-32 h-32 md:w-36 md:h-36"
        style={{
          rotateX,
          rotateY,
          z,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main cube face */}
        <motion.div
          className="absolute inset-0 glass rounded-2xl flex flex-col items-center justify-center p-4 border-2"
          style={{
            borderColor: skill.color,
            boxShadow: isHovered 
              ? `0 0 40px ${skill.color}, 0 0 80px ${skill.color}40, inset 0 0 20px ${skill.color}20`
              : `0 0 20px ${skill.color}40`,
            background: `radial-gradient(circle at center, ${skill.color}10, transparent)`,
          }}
          animate={{
            borderColor: isHovered ? [skill.color, `${skill.color}80`, skill.color] : skill.color,
          }}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
        >
          {/* Icon with glow */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, 360] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            style={{
              filter: `drop-shadow(0 0 20px ${skill.color})`,
            }}
          >
            <skill.icon 
              className="w-12 h-12 md:w-14 md:h-14" 
              style={{ color: skill.color }}
              strokeWidth={1.5}
            />
          </motion.div>
          
          {/* Skill name */}
          <motion.span 
            className="text-xs md:text-sm font-bold mt-2 text-center"
            style={{ 
              color: skill.color,
              textShadow: `0 0 10px ${skill.color}`,
            }}
          >
            {skill.name}
          </motion.span>

          {/* Holographic scanlines */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ height: '100%', backgroundSize: '100% 4px' }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Back face glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${skill.color}40, transparent)`,
            transform: 'translateZ(-20px)',
            filter: 'blur(20px)',
            opacity: isHovered ? 0.8 : 0.3,
          }}
        />

        {/* Holographic data panel */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-1 border"
          style={{
            borderColor: `${skill.color}60`,
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
            boxShadow: `0 0 20px ${skill.color}40`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <span 
            className="text-xs font-mono whitespace-nowrap"
            style={{ color: skill.color }}
          >
            {skill.level}
          </span>
        </motion.div>

        {/* Orbiting particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: skill.color,
                  boxShadow: `0 0 10px ${skill.color}`,
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 120 * Math.PI) / 180) * 60, 0],
                  y: [0, Math.sin((i * 120 * Math.PI) / 180) * 60, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'DevOps'];
  
  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Layered depth field particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `hsl(${180 + Math.random() * 80}, 100%, ${50 + Math.random() * 30}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px hsl(${180 + Math.random() * 80}, 100%, 60%)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Rotating geometric shards */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border-2 border-primary"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Plasma fog layers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 30% 50%, hsl(187, 100%, 50%) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 70% 50%, hsl(267, 100%, 68%) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Holographic title */}
        <motion.div
          initial={{ opacity: 0, y: 50, z: -100 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 relative"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text relative inline-block"
            style={{
              textShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.4)',
            }}
          >
            MY TECH ARSENAL
            
            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none"
              style={{ backgroundSize: '100% 2px' }}
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            // Interactive holographic skill matrix
          </motion.p>

          {/* Laser grid beneath title */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`glass px-6 py-2 rounded-full font-mono text-sm border-2 transition-all ${
                filter === category 
                  ? 'border-primary text-primary' 
                  : 'border-primary/30 text-muted-foreground hover:border-primary/60'
              }`}
              style={{
                boxShadow: filter === category 
                  ? '0 0 30px hsl(var(--primary) / 0.5)' 
                  : 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Skill cubes grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <SkillCube key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Floating laser grid */}
        <div className="absolute bottom-0 left-0 right-0 h-px opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="border-l border-primary/30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
