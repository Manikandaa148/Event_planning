"use client";

import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function FinalCTA() {
  return (
    <Section padding="none" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          alt="Couple walking in the sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-text/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16 pb-16">
        <FadeUp delay={0.1}>
          <h2 className="font-serif text-5xl md:text-7xl text-background leading-[1.1] mb-8 drop-shadow-md">
            YOUR DAY. YOUR STORY.<br />
            YOUR WAY.
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <p className="text-background/90 text-base md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-sm">
            Let's create a celebration you'll remember for the rest of your life.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.5}>
          <Button asChild size="lg" withArrow className="bg-background text-text hover:bg-accent hover:text-background border-none">
            <Link href="/contact">Plan Your Wedding</Link>
          </Button>
        </FadeUp>
      </div>
    </Section>
  );
}
