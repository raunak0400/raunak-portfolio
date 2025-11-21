import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(!document.documentElement.classList.contains('light'));
    };
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

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

    // Reduced floating particles for better performance
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 25; i++) { // Reduced from 50 to 25
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Theme-aware background
      ctx.fillStyle = isDark ? 'rgba(5, 5, 5, 0.05)' : 'rgba(250, 250, 250, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw digital rain with theme-aware colors
      ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.8)' : 'rgba(0, 180, 200, 0.6)';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Draw floating particles with theme-aware colors
      particles.forEach((particle) => {
        const scale = particle.z / 100;
        const alpha = 0.3 + (particle.z / 100) * 0.7;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
        const particleColor = isDark ? '138, 92, 255' : '98, 52, 200';
        ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * scale * 3
        );
        const glowColor = isDark ? '0, 255, 198' : '0, 180, 150';
        gradient.addColorStop(0, `rgba(${glowColor}, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
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
  }, [isDark]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      />
      
      {/* Reduced geometric shards with CSS animation */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="fixed w-24 h-24 pointer-events-none animate-float"
          style={{
            left: `${25 + i * 20}%`,
            top: `${35 + i * 10}%`,
            zIndex: 0,
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + i * 2}s`,
          }}
        >
          <div className="w-full h-full border border-primary/15 bg-primary/5 backdrop-blur-sm transform rotate-45" 
               style={{ 
                 clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                 boxShadow: '0 0 20px hsl(var(--primary) / 0.1)'
               }} 
          />
        </div>
      ))}
    </>
  );
};
