import { useEffect, useRef, useState } from 'react';

interface FPSMonitorProps {
  /** Called once when FPS stays below threshold for several checks */
  onLowFPS?: () => void;
  /** FPS threshold to consider as low */
  lowFPSThreshold?: number;
  /** How many consecutive low-FPS checks before triggering */
  lowFPSStreakThreshold?: number;
}

export const FPSMonitor = ({
  onLowFPS,
  lowFPSThreshold = 45,
  lowFPSStreakThreshold = 3,
}: FPSMonitorProps) => {
  const [fps, setFps] = useState(60);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const lowFPSStreakRef = useRef(0);
  const hasNotifiedRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTimeRef.current;

      if (elapsed >= 1000) {
        const currentFps = Math.round((frameCountRef.current * 1000) / elapsed);
        setFps(currentFps);

        if (currentFps < lowFPSThreshold) {
          lowFPSStreakRef.current += 1;
        } else {
          lowFPSStreakRef.current = 0;
        }

        if (
          !hasNotifiedRef.current &&
          lowFPSStreakRef.current >= lowFPSStreakThreshold &&
          onLowFPS
        ) {
          hasNotifiedRef.current = true;
          onLowFPS();
        }

        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      animationFrameId = requestAnimationFrame(updateFPS);
    };

    animationFrameId = requestAnimationFrame(updateFPS);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [lowFPSThreshold, lowFPSStreakThreshold, onLowFPS]);

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
