import { Section } from "@/components/layout/Section";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Intro() {
  return (
    <Section padding="large" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left text block */}
        <div className="order-2 lg:order-1">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text leading-[1.15] mb-8 text-balance">
              More Than A Wedding.<br />
              <span className="italic text-accent">A Story Worth Remembering.</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              We believe every wedding deserves to feel personal. From the first idea to the final photograph, we carefully design celebrations that reflect who you are. We handle the noise, so you can focus on the moments.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Button asChild withArrow>
                <Link href="/about">Discover Our Approach</Link>
              </Button>
              {/* Handwritten accent via a stylistic font (Playfair italic used here as proxy) */}
              <span className="font-serif italic text-accent text-xl opacity-80 -rotate-2">
                Made with love.
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Right image block */}
        <div className="order-1 lg:order-2 relative">
          <FadeUp delay={0.2} className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
              alt="Couple holding hands"
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-surface -z-10 rounded-sm" />
            <div className="absolute -top-6 -right-6 w-full h-full border border-accent/20 -z-10 rounded-sm" />
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
