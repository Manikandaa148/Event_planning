"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FadeUp } from "@/components/animations/FadeUp";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollY } = useScroll();
  
  // Parallax calculations - bound to scrollY instead of scrollYProgress for finer control
  // Only apply if user hasn't requested reduced motion
  const y = useTransform(scrollY, [0, 1000], [0, prefersReducedMotion ? 0 : 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, prefersReducedMotion ? 1 : 1.1]);
  const opacity = useTransform(scrollY, [0, 800], [1, prefersReducedMotion ? 1 : 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[85vh] md:h-[90vh] lg:h-screen w-full flex items-center justify-center overflow-hidden bg-text"
    >
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ y, scale }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop"
          alt="Luxury Wedding Celebration"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center mt-20">
        <motion.div style={{ opacity }} className="flex flex-col items-center will-change-transform">
          <FadeUp delay={0.2} duration={1}>
            <span className="block text-background/90 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
              Wedding Planning • Photography • Event Experiences
            </span>
          </FadeUp>
          
          <FadeUp delay={0.4} duration={1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[1.1] text-balance mb-8 max-w-5xl drop-shadow-lg">
              YOUR LOVE STORY,<br />
              BEAUTIFULLY TOLD.
            </h1>
          </FadeUp>

          <FadeUp delay={0.6} duration={1}>
            <p className="text-background/90 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light drop-shadow-md">
              Wedding planning, photography & unforgettable celebrations crafted around your story.
            </p>
          </FadeUp>

          <FadeUp delay={0.8} duration={1} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
            <Button asChild size="lg" withArrow className="bg-background text-text hover:bg-accent hover:text-background border-none min-w-[200px]">
              <Link href="/contact">Start Planning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/50 text-background hover:bg-background/10 hover:border-background min-w-[200px]">
              <Link href="/portfolio">View Our Stories</Link>
            </Button>
          </FadeUp>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-background/80 text-[10px] uppercase tracking-widest mb-4">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-background/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-background absolute top-0 left-0"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
