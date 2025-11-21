import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#00E5FF', '#8A5CFF', '#00FFC6', '#FF00FF'];

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (Math.random() > 0.9) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      setIsActive(true);
      // Create burst effect
      for (let i = 0; i < 20; i++) {
        createParticle(e.clientX, e.clientY);
      }
      setTimeout(() => setIsActive(false), 100);
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw mouse trail
      if (particlesRef.current.length > 0) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          50
        );
        gradient.addColorStop(0, 'rgba(138, 92, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(138, 92, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // gravity
        particle.life--;

        const alpha = particle.life / particle.maxLife;

        if (particle.life > 0) {
          // Draw particle glow
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );
          gradient.addColorStop(0, particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, particle.color + '00');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Draw particle core
          ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          return true;
        }
        return false;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[15]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
