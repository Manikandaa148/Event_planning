import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { servicesData } from "@/config/data";
import { FadeUp } from "@/components/animations/FadeUp";
import Link from "next/link";
import * as Icons from "lucide-react";
import { MoveRight } from "lucide-react";

// Helper to render dynamic Lucide icons
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} strokeWidth={1.5} /> : null;
};

export function Services() {
  return (
    <Section bg="surface">
      <SectionHeading 
        title="OUR EXPERTISE" 
        subtitle="Services" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <FadeUp key={service.title} delay={index * 0.1}>
            <Link 
              href="/services" 
              className="block group bg-background p-8 md:p-10 h-full border border-transparent hover:border-accent/20 transition-colors duration-500 rounded-sm"
              data-cursor="view"
            >
              <div className="w-12 h-12 mb-6 text-accent">
                <IconComponent name={service.icon} className="w-full h-full" />
              </div>
              <h3 className="font-serif text-2xl text-text mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center text-xs font-medium tracking-widest uppercase text-text group-hover:text-accent transition-colors duration-300">
                <span className="mr-2">Explore</span>
                <MoveRight 
                  size={16} 
                  strokeWidth={1.5} 
                  className="transition-transform duration-500 group-hover:translate-x-2" 
                />
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
