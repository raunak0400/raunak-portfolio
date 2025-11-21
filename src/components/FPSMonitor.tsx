import { useEffect, useRef, useState } from 'react';

export const FPSMonitor = () => {
  const [fps, setFps] = useState(60);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    let animationFrameId: number;

    const updateFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTimeRef.current;

      if (elapsed >= 1000) {
        const currentFps = Math.round((frameCountRef.current * 1000) / elapsed);
        setFps(currentFps);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      animationFrameId = requestAnimationFrame(updateFPS);
    };

    animationFrameId = requestAnimationFrame(updateFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fpsColor = fps >= 50 ? 'text-green-400' : fps >= 30 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 font-mono">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">FPS:</span>
        <span className={`text-lg font-bold ${fpsColor}`}>{fps}</span>
      </div>
    </div>
  );
};
