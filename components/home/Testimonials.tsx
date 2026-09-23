"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "They understood exactly what we wanted and somehow made the entire wedding feel effortless. The photographs are breathtaking.",
    author: "Sneha & Rahul",
    details: "Destination Wedding, Jaipur",
    image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Working with Elysian was the best decision we made. They handled every detail with so much grace, allowing us to just be present in the moment.",
    author: "Anjali & Vikram",
    details: "Traditional Wedding, Chennai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "The creative direction and aesthetic sense they brought to our wedding was unparalleled. It felt like a movie, yet entirely personal to us.",
    author: "Meera & Arjun",
    details: "Intimate Wedding, Kerala",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section bg="surface">
      <SectionHeading 
        title="KIND WORDS" 
        subtitle="Testimonials" 
      />

      <div className="max-w-4xl mx-auto relative px-4 md:px-12 mt-12">
        <Quote className="absolute top-0 left-0 md:left-8 w-16 h-16 text-accent/10 -z-10 -translate-y-8" />
        
        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center absolute inset-0 flex flex-col items-center justify-center will-change-transform"
            >
              <p className="font-serif text-xl md:text-3xl text-text leading-snug mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-text font-medium text-sm tracking-wide uppercase">
                    {testimonials[currentIndex].author}
                  </h5>
                  <p className="text-muted text-xs">
                    {testimonials[currentIndex].details}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-12 md:mt-16">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full text-text hover:bg-text hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-accent w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-border rounded-full text-text hover:bg-text hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </Section>
  );
}
