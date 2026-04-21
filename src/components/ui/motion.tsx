"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo, useState } from "react";

export const FadeIn = ({
  children,
  className,
  viewTriggerOffset = -100,
  delay = 0,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  viewTriggerOffset?: number;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px ${viewTriggerOffset}px 0px`,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const meteors = useMemo(() => {
    return new Array(number).fill(true).map((_, idx) => ({
      id: `meteor-${idx}`,
      left: Math.random() * 100,
      delay: Math.random() * (0.8 - 0.2) + 0.2,
      duration: Math.random() * (10 - 2) + 2,
    }));
  }, [number]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="animate-meteor absolute h-0.5 w-0.5 rounded-full bg-violet-500 shadow-[0_0_0_1px_rgba(139,92,246,0.1)] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-violet-500 before:to-transparent"
          style={{
            top: 0,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export const SpotlightCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 bg-white/40 dark:bg-white/5 p-8 transition-colors ${className}`}
      style={{
        borderColor: 'var(--glass-border)',
        backgroundColor: 'var(--glass-bg)',
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--accent-primary), 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export const PremiumCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`premium-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

