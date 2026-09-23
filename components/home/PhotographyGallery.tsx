"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1532712938736-59b10646c2d1?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3270&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=2072&auto=format&fit=crop",
];

export function PhotographyGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  if (prefersReducedMotion) {
    return (
      <section className="py-24 overflow-hidden bg-text text-background">
        <div className="container mx-auto px-4 mb-12">
          <SectionHeading title="WE CAPTURE THE MOMENTS YOU DIDN'T KNOW YOU'D MISS." className="text-background" />
        </div>
        <div className="flex flex-col gap-8 px-4">
          {images.map((src, i) => (
            <div key={i} className="relative w-full aspect-[3/2]">
              <Image src={src} alt="Wedding moment" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-text">
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden py-24">
        <div className="container mx-auto px-4 z-10 shrink-0">
          <SectionHeading 
            title="WE CAPTURE THE MOMENTS YOU DIDN'T KNOW YOU'D MISS." 
            className="text-background max-w-4xl mx-auto" 
          />
        </div>
        
        <div className="relative mt-8 flex-1 w-full flex items-center">
          {/* 
            Calculate total width so the translation feels natural.
            With 5 images each taking say 40vw to 80vw, we map scroll to X.
          */}
          <motion.div 
            style={{ x }} 
            className="flex gap-4 md:gap-8 px-4 md:px-8 absolute left-0 will-change-transform h-[50vh] md:h-[60vh]"
          >
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-full shrink-0"
              >
                <Image
                  src={src}
                  alt={`Wedding photography moment ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
