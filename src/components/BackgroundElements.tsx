'use client';

import { useEffect, useRef } from 'react';

export const BackgroundStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    const stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number; color: string }[] = [];
    const starCount = 200;

    const colors = ['rgba(139, 92, 246, ', 'rgba(59, 130, 246, ', 'rgba(236, 72, 153, ', 'rgba(255, 255, 255, '];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.01 + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.8 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.opacity})`;
        ctx.fill();
        
        if (star.radius > 0.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        } else {
          ctx.shadowBlur = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-10 dark:opacity-40"
    />
  );
};

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          color: 'var(--foreground-rgb)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, var(--accent-color, #8b5cf6) 1px, transparent 0)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/5 dark:bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export const BackgroundElements = () => {
  return (
    <>
      <BackgroundStars />
      <BackgroundGrid />
    </>
  );
};

