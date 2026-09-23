"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn("overflow-hidden", className)}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.2, delay, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-background z-10 will-change-transform"
      />
    </div>
  );
}
