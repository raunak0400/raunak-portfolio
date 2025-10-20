import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Digital rain particles
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw digital rain
      ctx.fillStyle = 'rgba(0, 229, 255, 0.8)';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Draw floating particles
      particles.forEach((particle) => {
        const scale = particle.z / 100;
        const alpha = 0.3 + (particle.z / 100) * 0.7;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 92, 255, ${alpha})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * scale * 3
        );
        gradient.addColorStop(0, `rgba(0, 255, 198, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 255, 198, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += 0.1;

        if (particle.z > 100) particle.z = 0;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      />
      
      {/* Floating geometric shards */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-32 h-32 pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            zIndex: 0,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full border border-primary/20 bg-primary/5 backdrop-blur-sm transform rotate-45" 
               style={{ 
                 clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                 boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)'
               }} 
          />
        </motion.div>
      ))}
    </>
  );
};
