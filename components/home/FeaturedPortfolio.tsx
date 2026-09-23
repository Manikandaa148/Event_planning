"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

// Placeholder data - in a real app this would be in config/data.ts or CMS
const portfolioItems = [
  {
    id: 1,
    couple: "Arjun & Meera",
    location: "Chennai",
    type: "Traditional Wedding",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    id: 2,
    couple: "Rohan & Priya",
    location: "Udaipur",
    type: "Destination Wedding",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: 3,
    couple: "Vikram & Ananya",
    location: "Bangalore",
    type: "Engagement",
    image: "https://images.unsplash.com/photo-1546944062-8b43de908eb8?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    couple: "Karthik & Sneha",
    location: "Kerala",
    type: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=2072&auto=format&fit=crop",
    colSpan: "col-span-1 lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
];

export function FeaturedPortfolio() {
  return (
    <Section>
      <SectionHeading 
        title="STORIES WE'VE BEEN LUCKY ENOUGH TO TELL" 
        subtitle="Portfolio" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {portfolioItems.map((item, index) => (
          <div key={item.id} className={item.colSpan}>
            <FadeUp delay={index * 0.15}>
              <Link href={`/portfolio/${item.id}`} className="group block relative overflow-hidden" data-cursor="view">
                <ImageReveal delay={index * 0.1}>
                  <div className={`relative w-full ${item.aspect}`}>
                    <Image
                      src={item.image}
                      alt={`${item.couple} Wedding`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </ImageReveal>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 drop-shadow-md">
                    {item.couple}
                  </h3>
                  <p className="text-white/90 text-sm font-medium tracking-wide uppercase drop-shadow-md">
                    {item.location} • {item.type}
                  </p>
                </div>
                
                {/* Touch fallback label */}
                <div className="lg:hidden mt-4 pb-4 px-2">
                  <h3 className="font-serif text-xl text-text mb-1">
                    {item.couple}
                  </h3>
                  <p className="text-muted text-xs font-medium tracking-wide uppercase">
                    {item.location} • {item.type}
                  </p>
                </div>
              </Link>
            </FadeUp>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/portfolio">View All Stories</Link>
        </Button>
      </div>
    </Section>
  );
}
