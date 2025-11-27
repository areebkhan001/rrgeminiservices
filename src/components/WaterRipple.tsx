'use client';

import { useRef, useState, useEffect } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

interface WaterRippleProps {
  children: React.ReactNode;
  className?: string;
}

export const WaterRipple = ({ children, className = '' }: WaterRippleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      timestamp: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1500);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      for (const ripple of ripples) {
        const elapsed = now - ripple.timestamp;
        const duration = 1500; // 1.5 seconds
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOut = 1 - (1 - progress) ** 3;

        // Ripple properties
        const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;
        const radius = easeOut * maxRadius;
        const opacity = (1 - progress) * 0.6;

        // Create gradient for water effect
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          radius
        );

        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.8})`); // Blue
        gradient.addColorStop(0.4, `rgba(96, 165, 250, ${opacity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(147, 197, 253, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(191, 219, 254, 0)');

        // Draw main ripple
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw ripple ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw inner ripple
        if (progress < 0.7) {
          const innerRadius = radius * 0.5;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, innerRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 1.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ripples]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};
