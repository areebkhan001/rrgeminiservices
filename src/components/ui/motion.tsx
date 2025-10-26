"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const meteors = new Array(number).fill(true);

  return (
    <div className="relative w-full overflow-hidden">
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="animate-meteor fixed h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          style={{
            top: 0,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.random() * (10 - 2) + 2}s`,
          }}
        />
      ))}
    </div>
  );
};
        />
      ))}
    </>
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
      className={`relative h-full w-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl ${className}`}
    >
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl">
        <div className="absolute left-[--x] top-[--y] h-56 w-56 -translate-x-1/2 -translate-y-1/2 transform animate-spotlight opacity-0 bg-gradient-to-r from-transparent to-white/10"></div>
      </div>
      {children}
    </div>
  );
};
