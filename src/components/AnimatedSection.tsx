"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const dirMap = {
    up:    { y: 48, x: 0 },
    down:  { y: -48, x: 0 },
    left:  { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none:  { y: 0, x: 0 },
  };
  const { x, y } = dirMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // iOS spring-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
