import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { packagesData } from "@/config/data";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

export function Packages() {
  return (
    <Section>
      <SectionHeading 
        title="CURATED OFFERINGS" 
        subtitle="Investment" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesData.map((pkg, index) => (
          <FadeUp key={pkg.name} delay={index * 0.15} className="h-full">
            <div className={`h-full flex flex-col p-8 md:p-10 border ${pkg.popular ? "border-accent shadow-sm relative bg-surface/30" : "border-border bg-background"}`}>
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background text-[10px] font-bold tracking-widest uppercase py-1 px-4 rounded-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-3xl text-text mb-2">{pkg.name}</h3>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">{pkg.subtitle}</p>
              
              <p className="text-muted text-sm leading-relaxed mb-8 min-h-[60px]">
                {pkg.description}
              </p>
              
              <div className="mb-8">
                <span className="text-xs text-muted block mb-1">Starting from</span>
                <span className="font-serif text-3xl text-text">{pkg.startingPrice}</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} strokeWidth={2} className="text-accent mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm text-text/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant={pkg.popular ? "primary" : "outline"} className="w-full">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </FadeUp>
        ))}
      </div>
      
      <p className="text-center text-muted text-sm mt-12 max-w-2xl mx-auto">
        Every wedding is different. We create packages based on your celebration, guest count and specific requirements.
      </p>
    </Section>
  );
}
