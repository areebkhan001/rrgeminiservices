"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

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
            duration: 0.5,
            delay: delay,
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
    <div className="relative w-full overflow-hidden">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="animate-meteor fixed h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
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
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-full w-full rounded-3xl ${className}`}
    >
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl">
        <div className="absolute left-[--x] top-[--y] h-56 w-56 -translate-x-1/2 -translate-y-1/2 transform animate-spotlight opacity-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl" />
      </div>
      {children}
    </div>
  );
};
